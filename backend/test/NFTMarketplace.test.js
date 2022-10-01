const { expect } = require("chai");

const toWei = num => ethers.utils.parseEther(num.toString());
const fromWei = num => ethers.utils.formatEther(num);

describe("NFT Marketplace", async () => {
  let deployer, address1, address2, nft, marketplace;
  let feePercent = 1;
  let URI = "Test URI";

  beforeEach(async () => {
    // contract factories
    const NFT = await ethers.getContractFactory("NFT");
    const Marketplace = await ethers.getContractFactory("Marketplace");
    // signers
    [deployer, address1, address2, ...addresses] = await ethers.getSigners();

    nft = await NFT.deploy();
    marketplace = await Marketplace.deploy(feePercent);
  });
  describe("Deployment", () => {
    it("should track name and symbol of the nft collection", async () => {
      expect(await nft.name()).to.equal("DAPP NFT");
      expect(await nft.symbol()).to.equal("DAPP");
    });
    it("should track feeAccount and feePercent of the marketplace", async () => {
      expect(await marketplace.feeAccount()).to.equal(deployer.address);
      expect(await marketplace.feePercent()).to.equal(feePercent);
    });
  });
  describe("Minting NFTs", () => {
    it("should track each minted NFT", async () => {
      // address1 mints an nft
      await nft.connect(address1).mint(URI);
      expect(await nft.tokenCount()).to.equal(1);
      expect(await nft.balanceOf(address1.address)).to.equal(1);
      expect(await nft.tokenURI(1)).to.equal(URI);
      // address2 mints an nft
      await nft.connect(address2).mint(URI);
      expect(await nft.tokenCount()).to.equal(2);
      expect(await nft.balanceOf(address2.address)).to.equal(1);
      expect(await nft.tokenURI(2)).to.equal(URI);
    });
  });
  describe("Making marketplace items", () => {
    let price = 1;
    beforeEach(async () => {
      // address1 mints an nft
      await nft.connect(address1).mint(URI);
      // address1 approves marketplace to spend nft
      await nft.connect(address1).setApprovalForAll(marketplace.address, true);
    });
    it("Should track newly created item, transfer NFT from seller to marketplace and emit Offered event", async () => {
      // address1 offers their nft
      await expect(
        marketplace.connect(address1).makeItem(nft.address, 1, toWei(1))
      )
        .to.emit(marketplace, "Offered")
        .withArgs(1, nft.address, 1, toWei(price), address1.address);

      // owner of NFT should now be the marketplace
      expect(await nft.ownerOf(1)).to.equal(marketplace.address);
      // item count should now equal to 1
      expect(await marketplace.itemCount()).to.equal(1);
      // check item fields to ensure they are correct
      const item = await marketplace.items(1);
      expect(item.itemId).to.equal(1);
      expect(item.nft).to.equal(nft.address);
      expect(item.tokenId).to.equal(1);
      expect(item.price).to.equal(toWei(price));
      expect(item.sold).to.equal(false);
    });
    it("Should fail if price is set to zero", async () => {
      await expect(
        marketplace.connect(address1).makeItem(nft.address, 1, 0)
      ).to.be.revertedWith("Price must be greater than zero");
    });
  });
  describe("Purchasing marketplace items", () => {
    let price = 2;
    const fee = (feePercent / 100) * price;
    let NFTTotalPriceInWei;
    beforeEach(async () => {
      // address1 mints an nft
      await nft.connect(address1).mint(URI);
      // address1 approves marketplace to spend nft
      await nft.connect(address1).setApprovalForAll(marketplace.address, true);
      // address1 makes their nft a marketplace item
      await marketplace
        .connect(address1)
        .makeItem(nft.address, 1, toWei(price));
    });
    it("Should update item as sold, pay seller, transfer NFT to buyer, charge fees and emit a Bought event", async () => {
      const sellerInitialEthereumBallance = await address1.getBalance();
      const buyerInitialEthereumBallance = await address2.getBalance();
      const feeAccountInitialEthereumBallance = await deployer.getBalance();
      NFTTotalPriceInWei = await marketplace.getTotalPrice(1);

      // address2 purchases item
      await expect(
        marketplace
          .connect(address2)
          .purchaseItem(1, { value: NFTTotalPriceInWei })
      )
        .to.emit(marketplace, "Bought")
        .withArgs(
          1,
          nft.address,
          1,
          toWei(price),
          address1.address,
          address2.address
        );
      const sellerFinalEthereumBallance = await address1.getBalance();
      const buyerFinalEthereumBallance = await address2.getBalance();
      const feeAccountFinalEthereumBallance = await deployer.getBalance();

      // Seller should receive payment
      expect(+fromWei(sellerFinalEthereumBallance)).to.equal(
        +price + +fromWei(sellerInitialEthereumBallance)
      );

      // buyer should own the NFT
      expect(await nft.ownerOf(1)).to.equal(address2.address);

      // feeAccount should receive fee
      expect(+fromWei(feeAccountFinalEthereumBallance)).to.equal(
        +fee + +fromWei(feeAccountInitialEthereumBallance)
      );
    });
    it("Should fail for invalid item ids, sold items and when not enough ether is paid", async function () {
      // fails for invalid item ids
      await expect(
        marketplace
          .connect(address2)
          .purchaseItem(2, { value: NFTTotalPriceInWei })
      ).to.be.revertedWith("Item doesn't exist");
      await expect(
        marketplace
          .connect(address2)
          .purchaseItem(0, { value: NFTTotalPriceInWei })
      ).to.be.revertedWith("Item doesn't exist");
      // Fails when not enough ether is paid with the transaction.
      // In this instance, fails when buyer only sends enough ether to cover the price of the nft
      // not the additional market fee.
      await expect(
        marketplace.connect(address2).purchaseItem(1, { value: toWei(price) })
      ).to.be.revertedWith(
        "not enough ether to cover item price and market fee"
      );
      // address2 purchases item 1
      await marketplace
        .connect(address2)
        .purchaseItem(1, { value: NFTTotalPriceInWei });
      // address3 tries purchasing item 1 after its been sold
      const address3 = addresses[0];
      await expect(
        marketplace
          .connect(address3)
          .purchaseItem(1, { value: NFTTotalPriceInWei })
      ).to.be.revertedWith("Item already sold");
    });
  });
});

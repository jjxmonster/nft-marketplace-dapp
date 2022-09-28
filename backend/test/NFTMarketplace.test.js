const { expect } = require("chai");

describe("NFT Marketplace", async () => {
  let deployer, addr1, addr2, nft, marketplace;
  let feePercent = 1;
  beforeEach(async () => {
    // contract factories
    const NFT = await ethers.getContractFactory("NFT");
    const Marketplace = await ethers.getContractFactory("Marketplace");
    // signers
    [deployer, addr1, addr2] = await ethers.getSigners();

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
});

import React from "react";
import { useForm } from "react-hook-form";

import Button from "../Button/Button";
import InputComponent from "../InputComponent/InputComponent";
import UploadArea from "../UploadArea/UploadArea";

import { FormValues } from "../../types/types";

const CreateNFTForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit = handleSubmit(data => console.log(data));

  return (
    <div className="flex flex-col items-center w-full  px-52 gap-4">
      <h2 className="text-white font-bold text-4xl">Create your NFT</h2>
      <UploadArea />
      <InputComponent
        register={register}
        formKey="title"
        label="Title"
        type="text"
      />
      <InputComponent
        register={register}
        formKey="price"
        label="Price [ETH]"
        type="number"
      />
      <InputComponent
        register={register}
        formKey="description"
        label="Description"
        area
      />
      <Button onClick={onSubmit} color="primary" label="Create NFT" />
    </div>
  );
};

export default CreateNFTForm;

import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import Button from "../Button/Button";
import InputComponent from "../InputComponent/InputComponent";
import UploadArea from "../UploadArea/UploadArea";

import { CreateNFTFormItem, CreateNFTFormValues } from "../../types/types";
import { CREATE_FORM_FIELDS } from "../../utils/constants/constants";

const schema = yup
  .object({
    title: yup.string().required(),
    price: yup.number().required().min(1),
    description: yup.string().required(),
  })
  .required();

const CreateNFTForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateNFTFormValues>({
    resolver: yupResolver(schema),
  });

  const onSubmit = handleSubmit(data => console.log(data));
  console.log(errors);
  return (
    <div className="flex flex-col items-center w-full  px-52 gap-4">
      <h2 className="text-white font-bold text-4xl">Create your NFT</h2>
      <UploadArea />
      {CREATE_FORM_FIELDS.map(
        ({ type, formKey, label, area }: CreateNFTFormItem) => (
          <InputComponent
            error={errors[formKey]}
            key={formKey}
            register={register}
            formKey={formKey}
            label={label}
            type={type}
            area={area}
          />
        )
      )}

      <Button onClick={onSubmit} color="primary" label="Create NFT" />
    </div>
  );
};

export default CreateNFTForm;

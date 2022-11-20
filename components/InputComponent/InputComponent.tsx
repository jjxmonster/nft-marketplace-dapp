import React, { FunctionComponent } from "react";
import { FieldError, UseFormRegister } from "react-hook-form";

import { CreateNFTFormValues } from "../../types/types";
import { capitalizeFirstLetter } from "../../utils/functions/helpers";

interface InputComponentProps {
  label: string;
  formKey: "title" | "nft" | "price" | "description";
  area?: boolean;
  type?: string;
  register: UseFormRegister<CreateNFTFormValues>;
  error: FieldError | undefined;
}

const input_styles = (error: FieldError | undefined) =>
  `p-2 text-white w-full outline-none ring-0 bg-transparent transition border-b-2 focus:bg-gray-100 border-purple-light ${
    error && "border-red"
  }`;

const InputComponent: FunctionComponent<InputComponentProps> = ({
  label,
  area = false,
  type,
  register,
  formKey,
  error,
}) => {
  return (
    <div className="flex flex-col w-full gap-2">
      <label className={`text-white font-medium text-m ${error && "text-red"}`}>
        {label}
      </label>
      {area ? (
        <>
          <textarea
            {...register(formKey)}
            placeholder={label}
            className={`${input_styles(error)} h-24`}
          />
          {error?.message && (
            <p className="text-red font-medium">
              {capitalizeFirstLetter(error.message)}
            </p>
          )}
        </>
      ) : (
        <>
          <input
            {...register(formKey)}
            type={type}
            placeholder={label}
            className={input_styles(error)}
          />
          {error?.message && (
            <p className="text-red font-medium">
              {capitalizeFirstLetter(error.message)}
            </p>
          )}
        </>
      )}
    </div>
  );
};

export default InputComponent;

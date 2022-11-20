import React, { FunctionComponent } from "react";
import { UseFormRegister } from "react-hook-form";

import { FormValues } from "../../types/types";

interface InputComponentProps {
  label: string;
  formKey: "title" | "nft" | "price" | "description";
  area?: boolean;
  type?: string;
  register: UseFormRegister<FormValues>;
}

const input_styles =
  "p-2 text-white w-full outline-none ring-0 bg-transparent transition border-b focus:bg-gray-100 border-purple-light";

const InputComponent: FunctionComponent<InputComponentProps> = ({
  label,
  area = false,
  type,
  register,
  formKey,
}) => {
  return (
    <div className="flex flex-col w-full gap-2">
      <label className="text-white font-medium text-m">{label}</label>
      {area ? (
        <textarea placeholder={label} className={`${input_styles} h-24`} />
      ) : (
        <input
          {...register(formKey)}
          type={type}
          placeholder={label}
          className={input_styles}
        />
      )}
    </div>
  );
};

export default InputComponent;

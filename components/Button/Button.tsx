import * as React from "react";

interface PrimaryButtonProps {
  label: string;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  color: "primary" | "secondary";
}

const buttonTheme = {
  primary:
    "bg-purple-light border-purple-light text-white hover:bg-transparent hover:text:purple-light",
  secondary:
    "border-purple-light text-purple-light  hover:text-white hover:bg-purple-light",
};

const Button: React.FunctionComponent<PrimaryButtonProps> = ({
  label,
  onClick,
  color,
}) => {
  return (
    <button
      onClick={onClick}
      className={`px-6 py-2 border-solid  border-2 transition rounded-full ${buttonTheme[color]}`}
    >
      {label}
    </button>
  );
};

export default Button;

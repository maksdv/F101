import React, { FC, ButtonHTMLAttributes } from "react";

import "./Button.scss";

export type ButtonProps = Pick<
  ButtonHTMLAttributes<HTMLButtonElement>,
  "type" | "onClick" | "disabled" | "title"
>;

const Button: FC<ButtonProps> = ({ disabled = false, ...props }) => {
  const classname = disabled ? "button-disabled" : "button";
  return (
    <button
      disabled={disabled}
      style={{ cursor: !disabled ? "pointer" : "not-allowed" }}
      className={classname}
      {...props}
    >
      Create
    </button>
  );
};

export default Button;

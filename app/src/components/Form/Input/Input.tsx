import React, { ChangeEvent } from "react";

import "./FormInput.scss";
import FormItem from "../FormItem";

type FormInputProps = {
  labelText?: string;
  placeholder: string;
  type?: "text" | "number";
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  animate?: "right" | "left";
  required?: boolean;
  value?: string;
};

export const FormInput: React.FC<FormInputProps> = ({
  labelText,
  placeholder,
  type = "text",
  onChange,
  animate,
  required = false,
  value,
}) => (
  <FormItem>
    <label style={{ color: "grey" }}>{labelText}</label>
    <br />
    <input
      className={"form-input"}
      type={type}
      placeholder={placeholder}
      onChange={onChange}
      required={required}
      value={value}
    />
  </FormItem>
);

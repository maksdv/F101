import React from "react";

type FormItemProps = {};

const FormItem: React.FC<FormItemProps> = ({ children }) => (
  <div className={"form-item"}>{children}</div>
);

export default FormItem;

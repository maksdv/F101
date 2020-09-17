import React from "react";
import { AiFillPlusCircle } from "react-icons/ai";
import "./buttonStyle.scss";

type AddButtonType = {
  action: Function;
};

export const AddButton: React.FC<AddButtonType> = ({ action }) => (
  <div className="addButtContainer">
    <AiFillPlusCircle
      onClick={() => action()}
      color="red"
      size="4em"
      className="addButton"
    />
  </div>
);

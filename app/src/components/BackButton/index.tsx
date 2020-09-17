import React from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { useHistory } from "react-router-dom";
import "./backButton.scss";

export const BackButton: React.FC = () => {
  const history = useHistory();

  const goTo = () => {
    history.goBack();
  };
  return (
    <div className="backButton">
      <AiOutlineArrowLeft
        onClick={() => goTo()}
        color="red"
        size="4em"
        className="addButton"
      />
      <span id="text">Back</span>
    </div>
  );
};

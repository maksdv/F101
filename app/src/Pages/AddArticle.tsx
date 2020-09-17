import React, { useState, ChangeEvent } from "react";
import { FormInput } from "../components/Form/Input/Input";
import Button from "../components/Button";
import { setArticle } from "../services/api";

export const AddArticle: React.FC = () => {
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [price, setPrice] = useState<string>("");
  const handleEvent = (
    e: ChangeEvent<HTMLInputElement>,
    set: (event: any) => void
  ) => {
    set(e.currentTarget.value);
  };

  const handleSubmit = async () => {
    const resp = await setArticle({ title, description, price });
    console.log(resp);
  };

  const anyInputEmpty = () => {
    return title !== "" && description !== "" && price !== "";
  };

  return (
    <div className="addArticleContainer">
      <div className="formContainer">
        <FormInput
          placeholder={"Name of the article"}
          labelText="Title"
          animate="right"
          onChange={(e) => {
            handleEvent(e, setTitle);
          }}
        />
        <FormInput
          placeholder={"Describe the article"}
          labelText="Description"
          onChange={(e) => {
            handleEvent(e, setDescription);
          }}
        />
        <FormInput
          placeholder={"Price"}
          labelText="Price"
          type="number"
          onChange={(e) => {
            handleEvent(e, setPrice);
          }}
        />
        <Button
          type="submit"
          disabled={!anyInputEmpty()}
          onClick={handleSubmit}
        />
      </div>
    </div>
  );
};

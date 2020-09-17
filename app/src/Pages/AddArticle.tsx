import React, { useState, ChangeEvent } from "react";
import { FormInput } from "../components/Form/Input/Input";
import Button from "../components/Button";
import { setArticle } from "../services/api";
import { BackButton } from "../components/BackButton";

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
    if (resp.message) {
      alert("Sorry, but something went wrong.");
    } else {
      alert(`${resp.title} has been succesfully created.`);
      clearState();
    }
  };

  const anyInputEmpty = () => {
    return title !== "" && description !== "" && price !== "";
  };

  const clearState = () => {
    setTitle("");
    setDescription("");
    setPrice("");
  };

  return (
    <div className="addArticleContainer">
      <BackButton />
      <div className="formContainer">
        <FormInput
          placeholder={"Name the article"}
          labelText="Title"
          animate="right"
          onChange={(e) => {
            handleEvent(e, setTitle);
          }}
          value={title}
        />
        <FormInput
          placeholder={"Describe the article"}
          labelText="Description"
          onChange={(e) => {
            handleEvent(e, setDescription);
          }}
          value={description}
        />
        <FormInput
          placeholder={"Set price"}
          labelText="Price"
          type="number"
          onChange={(e) => {
            handleEvent(e, setPrice);
          }}
          value={price}
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

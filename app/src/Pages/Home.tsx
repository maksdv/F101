import React, { useState, useEffect } from "react";
import { get } from "../services/api";
import { List } from "../components/Articles/List";
import { AddButton } from "../components/AddButton";
import { useHistory } from "react-router-dom";
import ReactLoading from "react-loading";

export const Home: React.FC = () => {
  const [data, setData] = useState([]);
  const history = useHistory();

  const [loading, setLoading] = useState(true);
  useEffect(() => {
    get(setData, setLoading);
  }, []);

  const goTo = () => {
    return history.push("/add-article");
  };

  if (loading) {
    return (
      <ReactLoading type={"balls"} color={"red"} height={100} width={100} />
    );
  }
  if (!data) {
    return (
      <span id="emptyCopy">
        Something went wrong. Probably you have not connection to the database.
      </span>
    );
  }

  return (
    <>
      <List data={data} />
      <AddButton action={() => goTo()} />
    </>
  );
};

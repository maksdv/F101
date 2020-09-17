import React, { useState, useEffect } from "react";
import { get } from "../services/api";
import { List } from "../components/Articles/List";
import { AddButton } from "../components/AddButton";
import { useHistory } from "react-router-dom";

export const Home: React.FC = () => {
  const [data, setData] = useState([]);
  const history = useHistory();

  const [loading, setLoading] = useState(false);
  useEffect(() => {
    get(setData, setLoading);
  }, []);

  if (loading) {
    return <p>cargando</p>;
  }

  const goTo = () => {
    return history.push("/add-article");
  };

  return (
    <>
      <List data={data} />
      <AddButton action={() => goTo()} />
    </>
  );
};

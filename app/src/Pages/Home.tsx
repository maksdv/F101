import React, { useState, useEffect } from "react";
import { get } from "../services/api";
import { List } from "../components/Articles/List";

export const Home: React.FC = () => {
  const [data, setData] = useState([]);

  const [loading, setLoading] = useState(false);
  useEffect(() => {
    get(setData, setLoading);
  }, []);

  if (loading) {
    return <p>cargando</p>;
  }

  return (
    <>
      <List data={data} />
    </>
  );
};

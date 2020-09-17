import React from "react";
import { Article } from "../../model/Article";
import { ArticleItem } from "./ArticleItem";
import { EmptyList } from "../EmptyList";

type ListProps = {
  data: Array<Article>;
};

export const List: React.FC<ListProps> = ({ data }) => {
  if (!data.length) {
    return <EmptyList />;
  }
  return (
    <div className="container">
      <div className="listContainer">
        {data.map(({ title, description, price, id }, i) => (
          <ArticleItem
            key={i}
            title={title}
            description={description}
            price={price}
            id={id}
          ></ArticleItem>
        ))}{" "}
      </div>
    </div>
  );
};

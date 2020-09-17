import React from "react";
import { Article } from "../../model/Article";

export type ArticleProps = Article;

export const ArticleItem: React.FC<ArticleProps> = ({
  description,
  price,
  title,
}) => (
  <div className="article">
    <p>{title}</p>
    <p>
      {description.length > 20
        ? `${description.substr(0, 20)}...`
        : description}
    </p>
    <p>{price}€</p>
  </div>
);

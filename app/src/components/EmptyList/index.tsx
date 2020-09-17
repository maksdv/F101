import React from "react";
import "./emptyList.scss";

export const EmptyList: React.FC = () => {
  return (
    <div className="emptyContainer">
      <p id="emptyCopy">
        Actually you don't have any articles, but you can add it.
      </p>
    </div>
  );
};

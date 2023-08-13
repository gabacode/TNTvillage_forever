import React from "react";
import { Categories } from "../../types";

interface Props {
  category: number;
}

export const CategoryImage: React.FC<Props> = ({ category }) => {
  const getImage = (number: number): string =>
    require(`../../assets/icons/icon${number}.gif`);
  return <img src={getImage(category)} alt={Categories[category]} />;
};


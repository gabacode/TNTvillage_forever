import React from "react";
import { Categories } from "../../../types";

interface Props {
  category: number;
}

export const CategoryImage: React.FC<Props> = ({ category }) => {
  const iconPath = "../../../assets/icons";
  const getImage = (number: number): string =>
    require(`${iconPath}/icon${number}.gif`);
  return <img src={getImage(category)} alt={Categories[category]} />;
};


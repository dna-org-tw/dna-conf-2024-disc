import React from "react";
import { CharTypeEnum } from "./types";
import CharTemplate from "./CharTemplate";

const getRandomResult = (): CharTypeEnum => {
  return Math.floor(Math.random() * 4);
};

const ResultPage = (props: unknown) => {
  return <CharTemplate charTypeCode={getRandomResult()} userName="Test001" />;
};

export default ResultPage;

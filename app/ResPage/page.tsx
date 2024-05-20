import React from "react";
import { CharTypeEnum } from "./types";
import CharTemplate from "./CharTemplate";

const ResultPage = (props: any) => {
  return <CharTemplate charTypeCode={CharTypeEnum.刺客} userName="Test001" />;
};

export default ResultPage;

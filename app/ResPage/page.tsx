import React from "react";
import CharTemplate, { CharTypeEnum } from "./CharTemplate";

const ResultPage = (props: any) => {
  return <CharTemplate charTypeCode={CharTypeEnum.刺客} userName="Test001" />;
};

export default ResultPage;

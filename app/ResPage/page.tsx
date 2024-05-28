import React from "react";
import { CharTypeEnum } from "./types";
import CharTemplate from "./CharTemplate";
import Footer from "../components/Footer";

const ResultPage = (props: any) => {
  return (
    <>
      <CharTemplate charTypeCode={CharTypeEnum.魔法師} userName="Test001" />{" "}
      {/* <Footer /> */}
    </>
  );
};

export default ResultPage;

import React from "react";
import CharTemplate from "./CharTemplate";

const ResultPage = (props: any) => {
  const getRandomInt = (max: number) => {
    return Math.floor(Math.random() * Math.floor(max));
  };

  return (
    <>
      <CharTemplate charTypeCode={getRandomInt(4)} userName="Test001" />
      {/* <Footer /> */}
    </>
  );
};

export default ResultPage;

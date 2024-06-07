"use client";

import React, { useEffect, useState } from "react";
import CharTemplate from "./CharTemplate";

const ResultPage = (props: any) => {
  const [userName, setUserName] = useState<string>("");

  const { resetGame } = props;
  const getRandomInt = (max: number) => {
    return Math.floor(Math.random() * Math.floor(max));
  };

  useEffect(() => {
    if (window !== undefined) {
      const name = localStorage.getItem("playerName");
      if (name) {
        setUserName(name);
      }
    }
  }, []);

  return (
    <>
      <CharTemplate
        charTypeCode={getRandomInt(4)}
        userName={userName}
        resetGame={resetGame}
      />
      {/* <Footer /> */}
    </>
  );
};

export default ResultPage;

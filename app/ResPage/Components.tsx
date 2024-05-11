"use client";
import React, { useEffect, useState } from "react";

export const Tag = ({
  content,
  bgColor,
}: {
  content: string;
  bgColor: string;
}) => {
  const [color, setColor] = useState("");

  useEffect(() => {
    setColor(bgColor);
  }, [bgColor]);

  return (
    <div
      className={`px-3 py-1 mx-1 rounded-[16px] text-white bg-[${color}]`}
    >{`#${content}`}</div>
  );
};

export const Card = ({
  title,
  imgSrc,
}: {
  title: string;
  imgSrc: string;
}) => {};

// export default Components

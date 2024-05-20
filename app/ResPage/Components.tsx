"use client";
import clsx from "clsx";
import React, { useEffect, useState } from "react";
import { toPng } from "html-to-image";
import { useToPng } from "@hugocxl/react-to-image";

export const Tag = ({
  content,
  bgColor,
}: {
  content: string;
  bgColor: string;
}) => {
  // const [color, setColor] = useState("");

  // useEffect(() => {
  //   setColor(bgColor);
  // }, [bgColor]);

  return (
    <div
      className={clsx(
        `px-3 py-1 mb-1 rounded-md text-white font-bold`,
        bgColor
      )}
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

export const SocicalMediaBtns = ({ className }: { className: string }) => {
  return (
    <div className={className}>
      <img
        className="w-[48px] h-[48px] hover:cursor-pointer"
        src="/resPage/line-logo.png"
        alt="line"
        onClick={() => {}}
      />
      <img
        className="w-[48px] h-[48px] hover:cursor-pointer"
        src="/resPage/ig-logo.png"
        alt="ig"
        onClick={() => {}}
      />
      <img
        className="w-[48px] h-[48px] hover:cursor-pointer"
        src="/resPage/fb-logo.png"
        alt="fb"
        onClick={() => {}}
      />
    </div>
  );
};

export const UtilsBtns = ({ className }: { className: string }) => {
  return (
    <div className={className}>
      <img
        className="hover:cursor-pointer"
        src="/resPage/checkmore.png"
        alt="checkmore"
        onClick={() => {}}
      />
      <img
        className=" hover:cursor-pointer"
        src="/resPage/backHome.png"
        alt="backHome"
        onClick={() => {}}
      />
    </div>
  );
};

export const PlayAgainBtn = ({ className }: { className: string }) => {
  return <button className={className}>再玩一次</button>;
};

export const SaveImageBtn = ({
  className,
  convertMethod,
}: {
  className: string;
  convertMethod: () => void;
}) => {
  // const htmlToImageConvert = () => {
  //   toPng(target, { cacheBust: false, backgroundColor: "white" })
  //     .then((dataUrl) => {
  //       const link = document.createElement("a");
  //       link.download = "my-image-name.png";
  //       link.href = dataUrl;
  //       link.click();
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };

  return (
    <button className={className} onClick={convertMethod}>
      儲存結果圖
    </button>
  );
};

//styleName: Body normal 2_Source Sans 3_Bold_18pt;
// font-family: Source Sans 3;
// font-size: 18px;
// font-weight: 700;
// line-height: 25.63px;
// text-align: left;

"use client";
import clsx from "clsx";
import Link from "next/link";
import React from "react";

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
      />

      <Link
        href="https://conf.dna.org.tw/zh-TW/2024"
        className=" hover:cursor-pointer w-full flex justify-center items-center"
        target="_blank"
      >
        <img src="/resPage/backHome.png" alt="backHome" />
      </Link>
    </div>
  );
};

export const PlayAgainBtn = ({ className }: { className: string }) => {
  return (
    <Link className={clsx("w-full text-center block", className)} href="/">
      再玩一次
    </Link>
  );
};

export const SaveImageBtn = ({
  className,
  convertMethod,
}: {
  className: string;
  convertMethod: () => void;
}) => {
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

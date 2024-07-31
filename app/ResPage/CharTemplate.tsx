"use client";
import React, { useEffect } from "react";
import {
  PlayAgainBtn,
  SaveImageBtn,
  SocicalMediaBtns,
  Tag,
  UtilsBtns,
} from "./Components";
import clsx from "clsx";
import { CardContentTypeEnum, CharTypeEnum } from "./types";
import { useToPng } from "@hugocxl/react-to-image";
import Image from "next/image";
import { OrbitProgress } from "react-loading-indicators";
// import Footer from "../components/Footer";

// bg-set
const bgSet = {
  assassin: "bg-gradient-to-r from-[#FBA138] to-[#E4003D]",
  minstrel: "bg-gradient-to-r from-[#FFD028] to-[#C0801E]",
  magican: "bg-gradient-to-r from-[#F48ACA] to-[#C54090]",
  knight: "bg-gradient-to-r from-[#10B8D9] to-[#004E9D]",
};

const charInfo = {
  [CharTypeEnum.刺客]: {
    charType: "刺客",
    charImg: "/resPage/char_assassin.png",
    charTypeImg: "/resPage/char_assassin-title.png",
    weaponImg: "/resPage/weapon_assassin.png",
    mainColor: "bg-[#E4003D]",
    borderColor: "border-[#E4003D]",
    btnColor: "bg-[#E74310]",
    typeName: "掌控型",
    bgSet: bgSet["assassin"],
    tags: ["行動力", "領頭羊", "目標導向", "壓力挑戰並存"],
    jobs: ["勞版", "嶌演", "事業管理經貍", "勞闆"],
    desc: "常常是團隊的活力來源、開心果！他們傾向於和其他思想開放的社交人士一起工作，並且渴望成為協作團隊的一部分，來大大展現自己的創意無邊際。這類型的人也具有強烈好奇心，喜歡分享",
    benifit:
      "喜歡 站在主導地位，步調明快、果斷、行動力強且不達目的不罷休，做事充滿自信與活力，重視結果與效率，屬於推動它人行動的角色，在團體中往往位居領導地位。",
    weakness:
      "不過這樣勇往直前的個性，很容易只看到自己的需求而忽略旁人，固執且沒耐心，不懂的體貼與讚美。甚至覺得自己是對的、不太需要朋友，過度專橫以至於說話傷人，而得不到他人的支持與認同。",
    cardContents: {
      luckyItem: "/resPage/hat.png",
      partner: "/resPage/char_knight.png",
      stranger: "/resPage/char_magican.png ",
    },
  },
  [CharTypeEnum.騎士]: {
    charType: "騎士",
    charImg: "/resPage/char_knight.png",
    charTypeImg: "/resPage/char_knight-title.png",
    weaponImg: "/resPage/weapon_knight.png",
    typeName: "影響型",
    bgSet: bgSet["knight"],
    mainColor: "bg-[#004E9D]",
    borderColor: "border-[#004E9D]",

    tags: [
      "重和平",
      "同理共情",
      "神隊友",
      // "壓力挑戰並存",#重和平 #同理共情 #神隊友 #小圈圈 #黏著劑
    ],
    jobs: ["社䲲", "輔導老獅", "人力資猿管理師"],
    desc: "為人親切喜好和平，擅傾聽與同理，關係一旦建立習於依賴同溫層，朋友圈小但緊密。看似散漫寡言及不擅做決定，需要旁人鼓勵與下指導棋，若指令明確是忠誠可靠的好隊友",
    benifit:
      "這類型的人往往天生內向、輕聲細語、不愛生氣，給人溫柔親切、和事佬的印象，屬於追隨型人格。忠誠度高並習慣在關係中尋求相似的支持者，也具備同情他人與優秀的傾聽能力，當他們一旦建立關係後，會非常依賴於維持關係，雖然朋友圈較小但非常緊密。",
    weakness:
      "目標感不強也不擅長做決定，漫不經心外還有些沉默。和無尾熊型的人相處，記得要多鼓勵、督促他，給予他們明確的指令，其實會是很棒的隊友、閨蜜。",
    cardContents: {
      luckyItem: "/resPage/libon.png",
      partner: "/resPage/char_magican.png",
      stranger: "/resPage/char_minstrel.png",
    },
  },
  [CharTypeEnum.魔法師]: {
    charType: "魔法師",
    charImg: "/resPage/char_magican.png",
    charTypeImg: "/resPage/char_magican-title.png",
    weaponImg: "/resPage/weapon_magican.png",
    bgSet: bgSet["magican"],
    typeName: "影響型",
    mainColor: "bg-[#C54090]",
    borderColor: "border-[#C54090]",
    // tags: ["獨立", "冷靜", "機智"],#條理分明 #幕僚 #精明務實 #完美主義 #低調

    tags: [
      "條理分明",
      "幕僚",
      // "精明務實",
      "完美主義",
      // "低調",
    ],
    jobs: ["工程獅", "精算獅", "策略人猿", "會計獅", "設計獅"],
    desc: "邏輯清晰擅思辨，重細節與數字，喜愛研究並找出有效解方，追求完美與美感。個性龜毛偏好先計劃再行動，常流於空想未執行再自責慚愧，給人悲觀消極又情緒化的印象。",
    benifit:
      "分析型的人邏輯清晰有條理、善長思考與分析，做事經過深思熟慮、謹慎務實，且重視細節與數字，不喜歡無法預測的事情也不愛出風頭。這類型的人通常也是發明者，能給予問題準確有效的解決方案，擁有追求完美與天生的藝術美感。",
    weakness:
      "吹毛求疵，做事前一定要先想個計劃，但又容易想太多沒有行動，或是要求過高（太過理想）但難以做到，進而感到強烈的自慚自愧，自然就給旁人悲觀消極、情緒化的印象。",
    cardContents: {
      luckyItem: "/resPage/cup.png",
      partner: "/resPage/char_knight.png",
      stranger: "/resPage/char_minstrel.png",
    },
  },
  [CharTypeEnum.吟遊詩人]: {
    charType: "吟遊詩人",
    charImg: "/resPage/char_minstrel.png",
    charTypeImg: "/resPage/char_minstre-title.png",
    weaponImg: "/resPage/weapon_minstrel.png",
    bgSet: bgSet["minstrel"],
    typeName: "影響型",
    mainColor: "bg-[#FFD028]",
    borderColor: "border-[#FFD028]",
    // tags: ["獨立", "冷靜", "機智"],
    tags: ["臭美愛現", "社交嗨咖", "萬眾矚目"],
    jobs: ["商務開發人猿", "公關人猿", "講獅"],
    desc: "團隊開心果，思想開明有創意，愛分享不怕生，享受眾人矚目。以自我為中心，善變熱愛嘗鮮，粗線條又一心多用，當心答應的事易忘記影響自身信用！適合從事社交型工作(人為導向)",
    benifit:
      "常常是團隊的活力來源、開心果！他們傾向於和其他思想開放的社交人士一起工作，並且渴望成為協作團隊的一部分，來大大展現自己的創意無邊際。這類型的人也具有強烈好奇心，喜歡分享與表達、健談不怕生，享受成為舞台中心受歡迎與肯定的感覺",
    weakness:
      "因為熱愛探索新想法，也讓他們容易在工作之間跳來跳去，想一次完成很多事情但礙於專注力不夠而失敗。此外，以自己為世界中心、粗線條、輕許諾、愛打岔又變化無常也是要特別留意的缺點，答應別人但是由於記憶差而忘記，久而久之是會惹人厭煩的唷。",
    cardContents: {
      luckyItem: "/resPage/tag.png",
      partner: "/resPage/char_knight.png",
      stranger: "/resPage/char_assassin.png",
    },
  },
};

const CharTemplate = (props: {
  charTypeCode: CharTypeEnum;
  userName: string;
  resetGame: () => void;
}) => {
  const { charTypeCode, userName, resetGame } = props;
  const currentCharData = charInfo[charTypeCode];
  const { mainColor, borderColor, desc, cardContents } = currentCharData;
  const [isLoading, setIsLoading] = React.useState<boolean>(true);
  // const [imgSrc, setImgSrc] = React.useState<string | null>(null);
  // const converted = React.useRef(false);

  const [_, convertToPng, ref] = useToPng<HTMLDivElement>({
    onSuccess: (data) => {
      // setImgSrc(data);
      // converted.current = true;
      downloadBase64Image(data, "image.png");
    },
    backgroundColor: "white",
  });

  const _getVerticalText = (text: string) => {
    const textEle = text
      .split("")
      .map((char, index) => <span key={index}>{char}</span>);

    return (
      <div className="flex-col flex justify-between h-full">{textEle}</div>
    );
  };

  const _getTags = (tags: string[]) => {
    return tags.map((tag) => (
      <Tag key={tag} content={tag} bgColor={mainColor} />
    ));
  };

  const _getJobs = (jobs: string[]) => {
    let textStr = "";
    jobs.forEach((job, index) => {
      index !== jobs.length - 1 ? (textStr += job + "、") : (textStr += job);
    });
    return <div>{textStr}</div>;
  };

  const _getCardContents = (cardContents: any) => {
    return Object.keys(cardContents).map((key) => {
      return (
        <div
          key={key}
          className={clsx(
            "flex-1 flex-col flex border-2 rounded-md overflow-hidden",
            borderColor
          )}
        >
          <span
            className={clsx(
              "text-white font-bold px-2 py-1 text-center",
              mainColor
            )}
          >
            {CardContentTypeEnum[key as keyof typeof CardContentTypeEnum]}
          </span>
          <img
            className={"p-2 w-[95px] h-[95px] object-contain"}
            src={cardContents[key]}
          />
        </div>
      );
    });
  };

  const downloadBase64Image = (base64Data: any, fileName: any) => {
    const link = document.createElement("a");
    link.href = base64Data;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const resBg = "/ResBg.webp";

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => {
      localStorage.removeItem("playerName");
    };
  }, []);

  return (
    <div className="w-full h-full bg-[top left] bg-contain bg-no-repeat bg-white overflow-x-hidden">
      {/* header section */}
      {isLoading && (
        <div className="abssolute w-full h-full bg-gray-300">
          <div className="flex justify-center items-center w-full h-full">
            <OrbitProgress color="white" size="medium" text="" textColor="" />
          </div>
        </div>
      )}
      {!isLoading && (
        <>
          <div
            className={clsx("px-8 pb-4 pt-4")}
            ref={ref}
            style={{
              backgroundImage: `url(${resBg})`,
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "top left",
            }}
          >
            {/* head block*/}
            <div className={clsx("flex items-bottom justify-between mb-1")}>
              {/* charImg */}
              <div
                className={clsx(
                  "max-w-[63%] p-1 rounded-md flex justify-center flex-wrap",
                  currentCharData.bgSet && currentCharData.bgSet
                )}
              >
                <img
                  src={currentCharData.charImg}
                  alt={currentCharData.charType}
                  className="w-full bg-white rounded-md p-1 min-h-[185px]"
                />
                <div className="text-white font-bold text-xl flex gap-4 py-1">
                  <span>Type</span>
                  <span>{currentCharData.typeName}</span>
                </div>
              </div>

              {/* charTypeImg */}
              <div className="flex max-w-[35%] items-start">
                <img
                  src={currentCharData.charTypeImg}
                  alt={currentCharData.charType}
                  className="object-contain flex-1 px-2 max-w-[60%]"
                />
                <span className="font-bold text-xl h-full">
                  {_getVerticalText("你的冒險者角色是")}
                </span>
              </div>
            </div>
            {/* tags */}
            <div className="flex flex-wrap gap-1">
              {_getTags(currentCharData.tags)}
            </div>
            {/* jobs */}
            <div
              className={clsx(
                "flex rounded-md overflow-hidden border-2 mb-2",
                borderColor
              )}
            >
              <div
                className={clsx(
                  "flex flex-col w-[40%] text-white px-2 py-1 text-md font-bold text-center  items-center justify-center",
                  mainColor
                )}
              >
                <span>{userName}</span>
                <span>適合的職業</span>
              </div>
              <div className="text-lg px-3 pl-2 flex-1 gap-1 flex flex-wrap font-bold bg-white">
                {_getJobs(currentCharData.jobs)}
              </div>
            </div>
            {/* desc */}
            <div
              className={clsx(
                "border-2 rounded-md overflow-hidden mb-2",
                borderColor
              )}
            >
              <div className={clsx("flex", mainColor)}>
                <span className="text-white font-bold px-2 py-1">
                  冒險者指南
                </span>
                <img
                  src={currentCharData.weaponImg}
                  alt=""
                  className="h-[39px]"
                />
              </div>
              <div className="px-2 py-1 text-md bg-white">{desc}</div>
            </div>
            {/* cardContents */}
            <div className="flex justify-between gap-3 mb-2 bg-white">
              {_getCardContents(cardContents)}
            </div>
          </div>
          {/* footer */}
          <div className="w-[80%] mx-auto">
            {/* save res Img */}
            <div className="flex justify-center mb-2">
              <SaveImageBtn
                className={clsx(
                  "py-4 px-5 rounded-[30px] text-white font-bold text-lg w-full",
                  mainColor
                )}
                convertMethod={() => {
                  convertToPng();
                  // downloadBase64Image(imgSrc, "image.png");
                }}
              />
            </div>

            {/* social media btns */}
            {<SocicalMediaBtns className="flex gap-4 justify-center mb-2" />}

            {/* utils btns */}
            {<UtilsBtns className="flex gap-4 justify-center mb-2 flex-wrap" />}

            {/* once again */}
            <PlayAgainBtn
              className="text-center w-full text-xl font-bold text-[#757575] my-4"
              resetGame={resetGame}
            />
          </div>
          {/* footer Img */}
          {/* <div className="bg-[#0E5A7E] py-8 flex justify-center items-center">
            <img src="/resPage/footerImg.png" alt="" />
          </div> */}
          <footer className="bg-[#0E5A7E] pb-4 w-full sm:w-[402px] ">
            <div className="mx-auto pt-6 pb-1 px-8">
              <section className="flex justify-center items-center">
                <Image
                  src="/footer-logo.svg"
                  alt="Taiwan Digital Nomad Association 台灣數位遊牧協會"
                  width={150}
                  height={50}
                  className="w-full max-w-[150px]"
                />
              </section>
            </div>
          </footer>
        </>
      )}
    </div>
  );
};

export default CharTemplate;

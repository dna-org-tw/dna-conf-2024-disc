// 'use client'
import Image from "next/image";
import React from "react";
import { Tag } from "./Components";

export enum CharTypeEnum {
  刺客,
  騎士,
  魔法師,
  吟遊詩人,
}

const charInfo = {
  [CharTypeEnum.刺客]: {
    charType: "刺客",
    charImg: "/resPage/char_assassin.png",
    charTypeImg: "",
    mainColor: "#C54090",
    tags: ["大武地方創生", "大武地方", "大武地方"],
    jobs: ["勞版", "工程屍", "市場策略人猿", "設計猿"],
    desc: "刺客/Dominance-掌控型代表了實踐力、果斷力、支配、管理、目標導向、熱愛壓力及挑戰。",
    benifit:
      "喜歡 站在主導地位，步調明快、果斷、行動力強且不達目的不罷休，做事充滿自信與活力，重視結果與效率，屬於推動它人行動的角色，在團體中往往位居領導地位。",
    weakness:
      "不過這樣勇往直前的個性，很容易只看到自己的需求而忽略旁人，固執且沒耐心，不懂的體貼與讚美。甚至覺得自己是對的、不太需要朋友，過度專橫以至於說話傷人，而得不到他人的支持與認同。",
    cardContents: { luckyItem: "", partner: "", stranger: "" },
  },
  [CharTypeEnum.騎士]: {
    charType: "騎士",
    charImg: "",
    charTypeImg: "",
    mainColor: "#00993E",
    tags: ["獨立", "冷靜", "機智"],
    jobs: ["勞版", "工程屍", "市場策略人猿", "設計猿"],
    desc: "騎士/Steadiness-穩定型喜愛安定、不安於改變，因此有最佳的持續能力，就算是事情有重大變化也會堅守崗位到最後一刻。",
    benifit:
      "這類型的人往往天生內向、輕聲細語、不愛生氣，給人溫柔親切、和事佬的印象，屬於追隨型人格。忠誠度高並習慣在關係中尋求相似的支持者，也具備同情他人與優秀的傾聽能力，當他們一旦建立關係後，會非常依賴於維持關係，雖然朋友圈較小但非常緊密。",
    weakness:
      "目標感不強也不擅長做決定，漫不經心外還有些沉默。和無尾熊型的人相處，記得要多鼓勵、督促他，給予他們明確的指令，其實會是很棒的隊友、閨蜜。",
    cardContents: { luckyItem: "", partner: "", stranger: "" },
  },
  [CharTypeEnum.魔法師]: {
    charType: "魔法師",
    charImg: "",
    charTypeImg: "",
    mainColor: "#10B8D9",
    tags: ["獨立", "冷靜", "機智"],
    jobs: ["勞版", "工程屍", "市場策略人猿", "設計猿"],
    desc: "魔法師/Compliance-分析型腦子最精明、善於思考與規劃，很適合作幕僚的工作，像是工程師等行業的人",
    benifit:
      "分析型的人邏輯清晰有條理、善長思考與分析，做事經過深思熟慮、謹慎務實，且重視細節與數字，不喜歡無法預測的事情也不愛出風頭。這類型的人通常也是發明者，能給予問題準確有效的解決方案，擁有追求完美與天生的藝術美感。",
    weakness:
      "吹毛求疵，做事前一定要先想個計劃，但又容易想太多沒有行動，或是要求過高（太過理想）但難以做到，進而感到強烈的自慚自愧，自然就給旁人悲觀消極、情緒化的印象。",
    cardContents: { luckyItem: "", partner: "", stranger: "" },
  },
  [CharTypeEnum.吟遊詩人]: {
    charType: "吟遊詩人",
    charImg: "",
    charTypeImg: "",
    mainColor: "#E74310",
    tags: ["獨立", "冷靜", "機智"],
    jobs: ["勞版", "工程屍", "市場策略人猿", "設計猿"],
    desc: "吟遊詩人/Influence-影響想型愛表現、專注於人際互動、善於運用群眾魅力、富創意，因此很適合從事廣告、企劃、公關等需要到處social協調的工作。",
    benifit:
      "常常是團隊的活力來源、開心果！他們傾向於和其他思想開放的社交人士一起工作，並且渴望成為協作團隊的一部分，來大大展現自己的創意無邊際。這類型的人也具有強烈好奇心，喜歡分享與表達、健談不怕生，享受成為舞台中心受歡迎與肯定的感覺",
    weakness:
      "因為熱愛探索新想法，也讓他們容易在工作之間跳來跳去，想一次完成很多事情但礙於專注力不夠而失敗。此外，以自己為世界中心、粗線條、輕許諾、愛打岔又變化無常也是要特別留意的缺點，答應別人但是由於記憶差而忘記，久而久之是會惹人厭煩的唷。",
    cardContents: { luckyItem: "", partner: "", stranger: "" },
  },
};

const CharTemplate = (props: { charTypeCode: CharTypeEnum }) => {
  const { charTypeCode } = props;
  const currentCharData = charInfo[charTypeCode];
  const mainColor = currentCharData.mainColor;

  const tags = currentCharData.tags.map((tag) => (
    <Tag key={tag} content={tag} bgColor={mainColor} />
  ));

  return (
    <div className="w-full h-full ">
      {/* head block*/}
      <div className="flex">
        {/* charImg */}
        <Image
          src={currentCharData.charImg}
          alt={currentCharData.charType}
          width={295}
          height={205}
        />
        {/* charTypeImg */}
        <Image
          src={currentCharData.charTypeImg}
          alt={currentCharData.charType}
        />
      </div>
      {/* tags */}
      <div className="flex gap-2 justify-center">{tags}</div>
      {/* desc */}
    </div>
  );
};

export default CharTemplate;

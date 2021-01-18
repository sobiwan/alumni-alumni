import React from "react";
import CoolTabs from "react-cool-tabs";
import ChampionContent from "./Champions";
import CreamCrap from "./CreamCrap";
import "../../../styles";

const activeTabColor1 = "#ffffff";
const activeTabColor2 = "darkslategray";
const inactiveTabBackground = "#f9f9f9";
const tableBorder = 7;

const FFContent = () => (
  <div className="ff-content-item">
    <CoolTabs
      tabKey={"1"}
      className="ff-content-tabs"
      style={{
        width: 550,
        height: 500,
        background: activeTabColor1,
        borderRadius: tableBorder,
        boxShadow:
          "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
      }}
      activeTabStyle={{
        background: activeTabColor1,
        color: activeTabColor2,
        borderRadius: tableBorder,
      }}
      unActiveTabStyle={{
        background: inactiveTabBackground,
        color: "#808080",
        borderRadius: tableBorder,
      }}
      activeLeftTabBorderBottomStyle={{
        background: activeTabColor2,
        height: 4,
      }}
      activeRightTabBorderBottomStyle={{
        background: activeTabColor2,
        height: 4,
      }}
      tabsBorderBottomStyle={{ background: activeTabColor1, height: 4 }}
      leftContentStyle={{
        background: activeTabColor1,
        borderRadius: tableBorder,
      }}
      rightContentStyle={{
        background: activeTabColor1,
        borderRadius: tableBorder,
      }}
      leftContentClassName="content-tab-style"
      rightContentClassName="content-tab-style"
      leftTabTitle={"Champions"}
      rightTabTitle={"Cream v Crap"}
      leftContent={<ChampionContent />}
      rightContent={<CreamCrap />}
      contentTransitionStyle={"transform 0.6s ease-in"}
      borderTransitionStyle={"all 0.6s ease-in"}
    />
  </div>
);

export default FFContent;

import React from "react";
import { Image } from "../common";
import FFContent from "./fantasy-football/FFContent";
import "../../styles";

const TrophyItem = ({ item }) => (
  <div className="trophy-item flex-center flex-column">
    <Image
      source={item.url}
      width={350}
      height={200}
      style={{ borderRadius: 7 }}
      dropShadow
      text={item.text}
      textPosition="center"
      textStyle={{ fontSize: 25 }}
      cover
    />
    {item.showContent && <FFContent />}
  </div>
);

export default TrophyItem;

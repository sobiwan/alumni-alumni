import React from "react";
import { Link } from "react-router-dom";
import { Image } from "../common";
import {
  FantasyFBallURL,
  GolfImageURL,
  KOMImageURL,
  OpaqueTrophyBackgroundURL,
} from "../../assets/images";
import "../../styles";

const TrophyItems = [
  {
    id: "fball",
    text: "Fantasy Football",
    url: FantasyFBallURL,
    showContent: true,
  },
  {
    id: "kom",
    text: "King of the Mountain",
    url: KOMImageURL,
  },
  {
    id: "golf",
    url: GolfImageURL,
  },
];

const TophyItem = ({ item }) => (
  <div className="trophy-item">
    <Image
      source={item.url}
      width={350}
      height={200}
      dropShadow
      text={item.text}
      textPosition="center"
      textStyle={{ fontSize: 25 }}
      cover
    />
    {item.showContent && <div>hello</div>}
  </div>
);

function TrophyRoom() {
  return (
    <div
      style={{ backgroundImage: `url(${OpaqueTrophyBackgroundURL})` }}
      className="trophy-room-container fade-in"
    >
      <Link to="/">back to the gate</Link>
      <div>
        <div className="trophy-title flex-center">Trophy Room</div>
        <div className="trophies-container flex-column flex-center">
          {TrophyItems.map((item) => (
            <TophyItem item={item} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default TrophyRoom;

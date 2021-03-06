import React from "react";
import { Link } from "react-router-dom";
import {
  FantasyFBallURL,
  GolfImageURL,
  KOMImageURL,
  OpaqueTrophyBackgroundURL,
} from "../../assets/images";
import TrophyItem from "../trophy/TrophyItem";
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

function TrophyRoom() {
  return (
    <div
      style={{ backgroundImage: `url(${OpaqueTrophyBackgroundURL})` }}
      className="trophy-room-container fade-in"
    >
      <Link to="/">back to the gate</Link>
      <div>
        <div className="trophy-title flex-center">Hall of Fame</div>
        <div className="trophies-container flex-column flex-center">
          {TrophyItems.map((item) => (
            <TrophyItem item={item} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default TrophyRoom;

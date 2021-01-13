import React from "react";
import { Link } from "react-router-dom";
import { TrophyRoomBackground } from "../../assets/images";
import { GiAmericanFootballHelmet, GiMountainRoad } from "react-icons/gi";
import "../../styles";

// const TrophyIcons = [
//   {
//     id: "",
//     title: "",
//     icon: "",
//   },
// ];

function TrophyRoom() {
  return (
    <div
      style={{ backgroundImage: `url(${TrophyRoomBackground})` }}
      className="trophy-room-container fade-in"
    >
      <Link to="/">back to the gate</Link>
      <div>
        <div className="trophy-title flex-center">Trophy Room</div>
        <div className="trophy-icons-container flex-row flex-center">
          <GiAmericanFootballHelmet size={100} color="gold" />
          <GiMountainRoad size={100} color="gold" />
        </div>
      </div>
    </div>
  );
}

export default TrophyRoom;

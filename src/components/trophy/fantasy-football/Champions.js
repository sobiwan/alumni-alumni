import React from "react";
import "../../../styles";

const PlaqueItem = () => (
  <div className="champion-plauqe-item flex-center flex-column">
    <div className="champion-plauqe-decorations" />
    <div>2020</div>
    <div>Scruffy Nerf Herders</div>
    <div>Sean OBrien</div>
  </div>
);

const ChampionContent = () => (
  <div className="flex-center flex-column champion-content-container">
    <div className="champion-title">Domer Fantasy Champions</div>
    <PlaqueItem />
    <PlaqueItem />
    <PlaqueItem />
    <PlaqueItem />
  </div>
);

export default ChampionContent;

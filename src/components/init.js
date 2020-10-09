import React, { useRef } from "react";
import ReactFreezeframe from "react-freezeframe";
import { gateGIF } from "../assets/images";
import "../styles";

function EntranceScreen(props) {
  const gateRef = useRef(null);
  function startGate() {
    gateRef.current.start();
  }
  function openMainPage() {
    props.history.replace("/trophy-room");
  }
  function onClickEnter() {
    startGate();
    setTimeout(function () {
      openMainPage();
    }, 5000);
  }
  return (
    <div className="entrance-screen-container">
      <div onClick={onClickEnter} className="entrance-button">
        <div>Enter</div>
      </div>
      <div className="gate-gif-container">
        <ReactFreezeframe
          src={gateGIF}
          ref={gateRef}
          options={{
            trigger: false,
            overlay: false,
          }}
        />
      </div>
    </div>
  );
}

export default EntranceScreen;

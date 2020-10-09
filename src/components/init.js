import React, { useRef } from "react";
import ReactFreezeframe from "react-freezeframe";
import { gateGIF } from "../assets/images";
import "../styles";

function EntranceScreen() {
  const gateRef = useRef(null);
  function startGate() {
    gateRef.current.start();
  }
  function stopGate() {
    gateRef.current.stop();
  }
  return (
    <div className="entrance-screen-container">
      <div onClick={startGate}>Start</div>
      <ReactFreezeframe
        src={gateGIF}
        ref={gateRef}
        options={{
          trigger: false,
          overlay: false,
        }}
        className="entrance-gate-gif"
      />
      <div onClick={stopGate}>Stop</div>
    </div>
  );
}

export default EntranceScreen;

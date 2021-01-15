import React from "react";
import { Img } from "react-image";
import ClipLoader from "react-spinners/ClipLoader";
import { LazyLoadComponent } from "react-lazy-load-image-component";
import "../../styles";

const ImageLoader = ({ width, height }) => (
  <div
    style={{
      width,
      height,
    }}
    className="img-loader-shop"
  >
    <ClipLoader loading={true} size={80} color={"#123abc"} />
  </div>
);

export default ({
  width,
  height,
  source,
  style,
  cover,
  contain,
  center,
  top,
  left,
  right,
  bottom,
  dropShadow,
  text,
  textPosition,
  textStyle,
}) => (
  <LazyLoadComponent
    placeholder={<ImageLoader width={width} height={height} />}
    width={width}
    height={height}
  >
    <div className="image-container">
      <Img
        className={`${
          contain ? "img-contain" : cover ? "img-cover" : "img-default"
        }
    ${dropShadow ? "img-drop-shadow" : ""}
      ${
        center
          ? "img-center"
          : left
          ? "img-left"
          : right
          ? "img-right"
          : top
          ? "img-top"
          : bottom
          ? "img-bottom"
          : "img-center"
      }`}
        width={width}
        height={height}
        style={style}
        src={source}
        loader={<ImageLoader width={width} height={height} />}
      />
      <div
        className={`${textPosition === "center" ? "image-text-centered" : ""}`}
        style={textStyle}
      >
        {text}
      </div>
    </div>
  </LazyLoadComponent>
);

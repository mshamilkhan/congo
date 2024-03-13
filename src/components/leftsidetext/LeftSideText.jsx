import React from "react";
import "./LeftSideText.css";
import Buttonblue4 from "../buttonblue4/Buttonblue4";

export default function LeftSideText({
  rightImage,
  leftTexth1,
  leftTexth2,
  leftTextp,
}) {
  return (
    <>
      <div className="parentdiv">
        <div className="lefttextbox">
          <h1>{leftTexth1}</h1>
          <h1 className="bluehead">{leftTexth2}</h1>
          <p>{leftTextp}</p>
          <Buttonblue4 btntext={"Explore Now"} />
        </div>
        <div className="imgdiv">
          <img src={rightImage} alt="" />
        </div>
      </div>
    </>
  );
}

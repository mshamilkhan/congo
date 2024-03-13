import React from "react";
import "./SideText.css";
import Buttonblue4 from "../buttonblue4/Buttonblue4";

export default function SideText({
  leftImage,
  rightTexth1,
  rightTexth2,
  rightTextp,
}) {
  return (
    <>
      <div className="parentdiv">
        <div className="imgdiv">
          <img src={leftImage} alt="" />
        </div>
        <div className="righttextbox">
          <h1>{rightTexth1}</h1>
          <h1 className="bluehead">{rightTexth2}</h1>
          <p>{rightTextp}</p>
          <Buttonblue4 btntext={"Explore Now"} />
        </div>
      </div>




    </>
  );
}

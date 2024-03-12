import React from "react";
import main from "../../assets/images/img2.png";
import "./textonpic.css";
import Buttonblue4 from "../buttonblue4/Buttonblue4";



function Textonpic({line1, line2 , para , image }) {
  return (
    <>
      <div className="imgdiv">
        <img src={image} alt="" className="main" />

        <div className="herosection">
          <h1 className="head1">{line1}</h1>
          <h1 className="head1 head2">{line2} </h1>
          <div className="mainparadiv">
            <p className="mainpara">
             {para}
            </p>
          </div>
          <div className="btnboxhero">

          <Buttonblue4 btntext = {"Visit Now"}/>
          </div>
        </div>
      </div>
    </>
  );
}

export { Textonpic };

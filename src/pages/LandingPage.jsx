import React from "react";
import { Navbar } from "../components/NAVBAR/Navbar";
import bg from "../assets/images/img2.png";
import img4 from "../assets/images/img4.png";
import img3 from "../assets/images/img3.png";
import img5 from "../assets/images/img5.png";
import img6 from "../assets/images/img6.jpg";
import img7 from "../assets/images/img7.png";
import BottomTextCard from "../components/bottomtextcard/BottomTextCard";
import "./css/LandingPage.css";
//PROPS
import logo from "../assets/images/logowhite.png";
import { Textonpic } from "../components/TEXTONPIC/Textonpic";
import SideText from "../components/sidetext/SideText";
import LeftSideText from "../components/leftsidetext/LeftSideText";

function LandingPage() {
  return (
    <>
      <Navbar logo={logo} />

      <Textonpic
        line1={"Build Discord Bots In "}
        line2={"A Motion Of Blur"}
        para={
          " Build code-powered Discord bots in minutes without worrying about servers, sockets or reconnection. Then hook them up to any other API you want. For business or pleasure."
        }
        image={bg}
        classname={"herosection "}
      />

      <div className="section2">
        <div className="head">
          <h1>Have your Discord bot running in minutes</h1>
          <p>
            If you're a Discord bot maker, then Congo is the perfect place to
            build and host your bots. We offer 24/7 hosting, easy Discord API
            authentication and tools to make building a breeze.
          </p>
        </div>

        <div className="cardbox">
          <BottomTextCard
            image={img4}
            bottomHeading={"Manage Discord authentication easily"}
            bottomPara={
              "Link your Discord account in a few steps with an easy to follow guide. We'll keep track of your secrets and API keys."
            }
          />

          <BottomTextCard
            image={img5}
            bottomHeading={"Update your bot instantly"}
            bottomPara={
              "Congo projects are auto-scaling, always accessible web services. Your bot is automatically ready to go as you make changes."
            }
          />
        </div>
      </div>

      <div className="section3">
        <Textonpic
          line1={"Build Discord Bots In "}
          line2={"A Motion Of Blur"}
          para={
            " Build code-powered Discord bots in minutes without worrying about servers, sockets or reconnection. Then hook them up to any other API you want. For business or pleasure."
          }
          image={img3}
          classname={"herosection herosection3"}
        />
      </div>

      <div className="section3">
        <SideText leftImage={img6} rightTexth1={"Connect Open AI"} rightTexth2={"Chat-GPT"} rightTextp={"Link your account to chat gpt and make your bot able to respond like a human as chat gpt does with just a single click "}/>
      </div>
      <div className="section3">
        
        <LeftSideText rightImage={img7} leftTexth1={"Use Built-in Data"} leftTexth2={"Templates"} leftTextp={"Use our built-in training data samples that you can use in your bots without wasting time on training your bots "}/>
      </div>
    </>
  );
}

export { LandingPage };

import React from 'react'
import {Navbar} from "../components/NAVBAR/Navbar"
import {Textonpic} from "../components/TEXTONPIC/Textonpic"
import bg from "../assets/images/img2.png"

//PROPS
import logo from "../assets/images/logowhite.png"




function LandingPage() {
  return (
   <>
   <Navbar logo = {logo}/>
   <Textonpic line1 = {"Build Discord Bots In "} line2 = {"A Motion Of Blur"} para = {" Build code-powered Discord bots in minutes without worrying about servers, sockets or reconnection. Then hook them up to any other API you want. For business or pleasure."} image = {bg} />
   </>
  )
}

export { LandingPage}

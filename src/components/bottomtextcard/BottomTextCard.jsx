import React from 'react'

import "./bottomTextCard.css"
export default function BottomTextCard({image , bottomHeading , bottomPara}) {
  return (
    <>
   <div className="card cardmargin">
    <div className="imagediv">
<img src={image} alt="" />
    </div>

    <h2>{bottomHeading}</h2>
    <p>{bottomPara}</p>
   </div>
    </>
  )
}

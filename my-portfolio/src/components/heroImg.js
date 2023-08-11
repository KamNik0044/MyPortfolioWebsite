import "./HeroImgStyles.css";

import React from "react";

import IntroImg from "../assets/intro-bg.jpg"

const heroImg = () => {
  return (
    <div className="hero">
      <div className="mask">
        <img className="into-img" src={IntroImg} alt="IntroImg"/>
      </div>
    </div>
  )
}

export default heroImg;



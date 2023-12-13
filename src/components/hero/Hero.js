import React from "react";
import styled from "styled-components";
import heroimg from "../../assets/hero.png";
import { defaultTheme } from "../defaultTheme";

const Hero = () => {
  return (
    <HeroDiv>
      <HeroInfo>
        <div style={{ marginTop: "-250px" }}>
          <h1>უფასო საცდელი სესია ტრენერთან</h1>
        </div>

        <button>დეტალურად</button>
      </HeroInfo>
      <HeroImage>
        <img src={heroimg} alt="Hero" />

        <OverlayOne />
        <OverlayTwo />
        <OverlayTheee />
      </HeroImage>
    </HeroDiv>
  );
};

export default Hero;

const HeroDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100vh;
  /* overflow: hidden; */
`;

const HeroInfo = styled.div`
  display: flex;
  align-items: start;
  flex-direction: column;
  z-index: 100;
  @media (max-width: 720px) {
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    /* transform: translate(50%, -50%); */
    margin: 0 auto;
  }

  h1 {
    font-size: 64px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    color: ${defaultTheme.colors.white};
    width: 668px;
    flex-shrink: 0;
    @media (max-width: 720px) {
      font-size: 40px;
      width: 300px;
      flex-shrink: 0;
    }
  }

  button {
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    padding: 16px 51px 16px 50px;
    border-radius: 30px;
    color: ${defaultTheme.colors.black};
    background-color: ${defaultTheme.colors.yellow};
    margin-top: 60px;
  }
`;

const HeroImage = styled.div`
  position: relative;
  /* overflow: hidden; */
  img {
    position: absolute;
    opacity: 80%;

    top: -560px;
    right: 0;
    @media (max-width: 1000px) {
      width: 650px;
      height: 800px;
      right: -30px;
    }
    @media (max-width: 744px) {
      width: 450px;
      height: 600px;
      opacity: 1;
    }
  }
`;

const OverlayOne = styled.div`
  position: absolute;
  top: -560px;
  right: 650px;
  width: 1043px;
  height: 791px;
  flex-shrink: 0;
  background: linear-gradient(90deg, #000 70.93%, rgba(0, 0, 0, 0) 102.25%);
  z-index: 13;
  @media (max-width: 1000px) {
    right: 310px;
  }
  @media (max-width: 744px) {
    right: 100px;
  }
`;
const OverlayTwo = styled.div`
  position: absolute;
  top: 60px;
  left: -1000px;
  width: 1043px;
  height: 791px;
  flex-shrink: 0;
  background: linear-gradient(91deg, #000 70.49%, rgba(0, 0, 0, 0) 90.96%);
  z-index: 10;
  transform: rotate(-90deg);
  @media (max-width: 744px) {
    top: -100px;
  }
`;
const OverlayTheee = styled.div`
  position: absolute;
  top: -600px;
  right: -650px;
  width: 1043px;
  height: 900px;
  flex-shrink: 0;
  background: linear-gradient(91deg, #000 70.49%, rgba(0, 0, 0, 0) 90.96%);
  z-index: 13;
  transform: rotate(180deg);
  @media (max-width: 1000px) {
    /* display: none; */
    right: -870px;
  }
`;

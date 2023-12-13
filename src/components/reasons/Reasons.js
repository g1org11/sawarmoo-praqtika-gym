import React from "react";
import lineIcon from "../../assets/icon_line.svg";
import epuipmentIcon from "../../assets/icon_ eqipment.svg";
import zonesIcon from "../../assets/icon_ fitness zones.svg";
import timeIcon from "../../assets/icon_time.svg";
import styled from "styled-components";
import { defaultTheme } from "../defaultTheme";
import Reason from "./Reason";

const Reasons = () => {
  return (
    <ReasonsContainer id="reasons">
      <ReasonsTitle>Reasons to join</ReasonsTitle>
      <ReasonWrapper>
        <ReasonsDiv>
          <Reason
            img={lineIcon}
            title={"15000 sq.m."}
            text={"A spacious gym for sports – a safe distance between exercise machines"}
          />
          <Reason
            img={epuipmentIcon}
            title={"More than 200 equipment"}
            text={
              "No queues at the simulators. Premium equipment from LifeStyle, Hammer Strength, TechnoGym."
            }
          />
          <Reason
            img={zonesIcon}
            title={"4 fitness zones"}
            text={
              "From cardio to functional and cycle. Separate area for boxing and mixed martial arts"
            }
          />
          <Reason
            img={timeIcon}
            title={"Round-the-clock operation"}
            text={"The gym is open 24 hours a day, also works on all holidays and weekends"}
          />
        </ReasonsDiv>
      </ReasonWrapper>
    </ReasonsContainer>
  );
};

export default Reasons;

const ReasonsContainer = styled.div`
  position: relative;
  z-index: 20;
  @media (max-width: 393px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: -100px;
  }
`;
const ReasonsDiv = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px 117px;
  /* width: 100%; */
  @media (max-width: 1000px) {
    gap: 70px 20px;
  }
  @media (max-width: 744px) {
    justify-content: left;
  }
  @media (max-width: 670px) {
    grid-template-columns: 1fr;
  }

  img {
    padding: 20px;
    @media (max-width: 1000px) {
      padding: 10px;
    }
  }

  h3 {
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    color: ${defaultTheme.colors.white};
    margin-bottom: 10px;
  }
  p {
    font-size: 14px;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
    color: ${defaultTheme.colors.white};
  }
`;
const ReasonsTitle = styled.h2`
  font-size: 48px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  color: ${defaultTheme.colors.white};
  margin-bottom: 120px;
  @media (max-width: 393px) {
    font-size: 24px;
  }
`;
const ReasonWrapper = styled.div`
  display: flex;
  align-items: start;
  justify-content: center;

  flex-wrap: wrap;
  gap: 80px 117px;
`;

import React from "react";
import styled from "styled-components";

import ig from "../../assets/ig.svg";
import twiter from "../../assets/twiter.svg";
import yt from "../../assets/yt.svg";
import { defaultTheme } from "../defaultTheme";
const Trainer = ({ img, title }) => {
  return (
    <TrainersDiv>
      <div>
        <img src={img} alt="Trainer 1" />
      </div>
      <h3>{title}</h3>
      <Icons>
        <Cyrcle>
          <IconImg src={ig} alt="Instagram" />
        </Cyrcle>
        <Cyrcle>
          <IconImg src={twiter} alt="Twitter" />
        </Cyrcle>
        <Cyrcle>
          <IconImg src={yt} alt="YouTube" />
        </Cyrcle>
      </Icons>
    </TrainersDiv>
  );
};

export default Trainer;
const TrainersDiv = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: ${defaultTheme.colors.brown};
  padding: 22px 18px 29px 18px;
  border-radius: 20px;
  h3 {
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    color: ${defaultTheme.colors.white};
    margin: 18px 0;
  }
`;
const Cyrcle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${defaultTheme.colors.brown};
  border: 1px solid ${defaultTheme.colors.white};
  padding: 10px;
  border-radius: 50%;
`;

const Icons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
  ${Cyrcle}:hover {
    border: 1px solid ${defaultTheme.colors.yellow}; // You may adjust the border color accordingly
  }
`;
const IconImg = styled.img`
  width: 20px;
  height: 20px;

  &:hover {
    color: ${defaultTheme.colors.yellow}; // Change to your desired hover color
    fill: ${defaultTheme.colors.yellow};
    stroke: ${defaultTheme.colors.yellow};
  }
`;

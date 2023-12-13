import React from "react";
import styled from "styled-components";
import { defaultTheme } from "../defaultTheme";

const Member = ({ title, price, icon, textone, texttwo, textthree, textfour }) => {
  return (
    <div>
      <InfoContainer>
        <TitlePrice>
          <h3>{title} </h3>
          <p>{price}</p>
        </TitlePrice>
        <Line></Line>
        <Info>
          <MainInfo>
            <Img src={icon} alt="img"></Img>
            <p>{textone}</p>
          </MainInfo>
          <MainInfo>
            <Img src={icon} alt="img"></Img>
            <p>{texttwo}</p>
          </MainInfo>
          {textthree && (
            <MainInfo>
              <Img src={icon} alt="img"></Img>
              <p>{textthree}</p>
            </MainInfo>
          )}
          {textfour && (
            <MainInfo>
              <Img src={icon} alt="img"></Img>
              <p>{textfour}</p>
            </MainInfo>
          )}
        </Info>
        <ButtonDiv>
          <button>Buy</button>
        </ButtonDiv>
      </InfoContainer>
    </div>
  );
};

export default Member;
const InfoContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 275px;
  height: 397px;
  flex-shrink: 0;
  background-color: ${defaultTheme.colors.brown};
  font-family: ${defaultTheme.fonts.primary};
  /* padding: 22px 20px 38px 20px; */
  border-radius: 10px;
  &:hover {
    outline: 2px solid ${defaultTheme.colors.yellow};
    transition: 0.6s ease-in;
  }
`;
const TitlePrice = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-top: 22px;
  border-radius: 10px 10px 0 0;
  ${InfoContainer}:hover & {
    background-color: ${defaultTheme.colors.yellow};
    transition: background-color 0.6s ease-in;
    h3 {
      color: ${defaultTheme.colors.black};
    }
    p {
      color: ${defaultTheme.colors.black};
    }
  }

  /* border-bottom: 1px solid black; */
  h3 {
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    color: ${defaultTheme.colors.white};
    margin-bottom: 8px;
  }
  p {
    /* text-align: center; */
    font-family: MADE Outer Sans;
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    color: ${defaultTheme.colors.white};
    margin-bottom: 22px;
  }
`;

const Img = styled.img`
  ${InfoContainer}:hover & {
    filter: brightness(150%);
    transition: filter 0.3s ease;
  }

  ${InfoContainer}:hover & svg path {
    fill: ${defaultTheme.colors.yellow};
    transition: fill 0.3s ease;
  }
`;

const Info = styled.div`
  margin-top: 27px;
`;

const MainInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  margin-bottom: 15px;
  padding: 0 20px;
  ${InfoContainer}:hover & {
    img {
      color: ${defaultTheme.colors.yellow};
    }
  }
  p {
    font-size: 14px;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
    color: ${defaultTheme.colors.white};
    margin-left: 10px;
  }
`;
const ButtonDiv = styled.div`
  margin-top: auto;
  margin-bottom: 38px;
  button {
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    color: ${defaultTheme.colors.black};
    background-color: ${defaultTheme.colors.yellow};
    font-family: ${defaultTheme.fonts.primary};
    border-radius: 30px;
    padding: 10px 40px;
  }
`;
const Line = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${defaultTheme.colors.black};
`;

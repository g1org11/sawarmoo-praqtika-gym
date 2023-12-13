import React from "react";
import { defaultTheme } from "../defaultTheme";
import styled from "styled-components";
import Logo from "../../assets/GYM24 - logo.png";
import phone from "../../assets/icon_call.svg";
import email from "../../assets/icon_email.svg";
import fb from "../../assets/icon_facebook.svg";
import ig from "../../assets/ig.svg";
import twiter from "../../assets/twiter.svg";
import yt from "../../assets/yt.svg";
const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrapper>
        <LeftPart>
          <a href="/">
            <img src={Logo} alt="logo"></img>
          </a>

          <p>
            განავითარეთ ძალა და ნდობა ჩვენს სპორტდარბაზში უახლესი ტექნიკით, პერსონალიზებული ტრენინგი
            და მოტივაციის საზოგადოება
          </p>
        </LeftPart>
        <MiddlePart>
          <h4>მისამართი</h4>
          <p>საქართველო ქალაქი თბილისი, რუსთაველის გამზირი 15</p>
        </MiddlePart>
        <RightPart>
          <h4>Contact</h4>
          <Infos>
            <Info>
              <Imgs>
                <img src={phone} alt="img"></img>
                <img src={email} alt="img"></img>
              </Imgs>
              <Texts>
                <p>+559 - 599 55 55 88 </p>
                <p>gym24@gmail.com</p>
              </Texts>
            </Info>

            <Icons>
              <Cyrcle>
                <IconImg src={ig} alt="Instagram" />
              </Cyrcle>
              <Cyrcle>
                <IconImg src={fb} alt="fb" />
              </Cyrcle>
              <Cyrcle>
                <IconImg src={twiter} alt="Twitter" />
              </Cyrcle>
              <Cyrcle>
                <IconImg src={yt} alt="YouTube" />
              </Cyrcle>
            </Icons>
          </Infos>
        </RightPart>
      </FooterWrapper>
    </FooterContainer>
  );
};

export default Footer;
const FooterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 230px;
`;
const FooterWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  @media (max-width: 393px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    margin: 0;
  }
`;
const LeftPart = styled.div`
  display: flex;
  align-items: start;
  flex-direction: column;
  @media (max-width: 744px) {
    display: none;
  }
  p {
    font-size: 14px;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
    color: ${defaultTheme.colors.white};
    width: 275px;
    height: 68px;
    flex-shrink: 0;
    margin-top: 26px;
  }
`;
const MiddlePart = styled.div`
  display: flex;
  align-items: start;
  flex-direction: column;
  @media (max-width: 393px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
  h4 {
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    color: ${defaultTheme.colors.white};
  }
  p {
    font-size: 14px;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
    color: ${defaultTheme.colors.white};
    width: 174px;
    height: 50px;
    flex-shrink: 0;
    margin-top: 26px;
  }
`;
const RightPart = styled.div`
  display: flex;
  align-items: start;
  flex-direction: column;
  @media (max-width: 393px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    margin-top: 47px;
  }
  h4 {
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    color: ${defaultTheme.colors.white};
    margin-bottom: 26px;
  }
`;
const Infos = styled.div`
  display: flex;
  align-items: start;
  flex-direction: column;
  @media (max-width: 393px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
`;
const Info = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Imgs = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
const Texts = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-left: 12px;
  p {
    font-size: 14px;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
    color: ${defaultTheme.colors.white};
  }
`;
const Cyrcle = styled.div`
  display: flex;
  align-items: center;
  justify-content: baseline;

  border: 1px solid ${defaultTheme.colors.white};
  padding: 10px;
  border-radius: 50%;
  margin-top: 20px;
  @media (max-width: 393px) {
    margin-top: 31px;
  }
`;

const Icons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
  ${Cyrcle}:hover {
    border: 1px solid ${defaultTheme.colors.yellow}; // You may adjust the border color accordingly
  }
  @media (max-width: 393px) {
    gap: 24px;
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

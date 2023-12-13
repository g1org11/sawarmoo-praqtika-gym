import React, { useState } from "react";
import { defaultTheme } from "../defaultTheme";
import styled from "styled-components";
import Vector from "../../assets/Vector.png";
import Xmark from "../../assets/xmark-solid .svg";
import Logo from "../../assets/GYM24 - logo.png";

import { Link, scroller } from "react-scroll";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  const scrollToSection = (sectionId) => {
    scroller.scrollTo(sectionId, {
      duration: 500,
      delay: 100,
      smooth: true,
      offset: -70,
    });
  };

  const handleClicks = () => {
    scrollToSection("reasons");
    scrollToSection("membership");
    scrollToSection("aboutUs");
    scrollToSection("trainers");
  };

  return (
    <HeaderContainer>
      <LogoDiv>
        <a href="/">
          <img src={Logo} alt="GYM24 Logo" />
        </a>
      </LogoDiv>
      <MenuDiv>
        {/* Display the burger icon by default */}
        <BurgerButton onClick={toggleMenu} show={!showMenu}>
          <img src={Vector} alt="Burger Icon" />
        </BurgerButton>
        {/* Display the X mark icon when showMenu is true */}
        {showMenu && (
          <XMarkButton onClick={toggleMenu} show={showMenu}>
            <img src={Xmark} alt="X Mark Icon" />
          </XMarkButton>
        )}
        {/* Display the modal when showMenu is true */}
        {showMenu && (
          <ModalDiv>
            <div>
              <ModalUl>
                <ModalLi>
                  <Link
                    activeClass="active"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    to={"reasons"}
                  >
                    უპირატესობები
                  </Link>
                </ModalLi>
                <ModalLi>
                  <Link
                    activeClass="active"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    to={"membership"}
                  >
                    აბონიმენტები
                  </Link>
                </ModalLi>
                <ModalLi>
                  <Link
                    activeClass="active"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    to={"aboutUs"}
                  >
                    ჩვენს შესახებ
                  </Link>
                </ModalLi>
                <ModalLi>
                  <Link
                    activeClass="active"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    to={"trainers"}
                  >
                    ტრენერები
                  </Link>
                </ModalLi>
              </ModalUl>
            </div>
          </ModalDiv>
        )}
        {/* Regular menu items */}
        <Ul>
          <Li>
            <Link
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              to={"reasons"}
            >
              უპირატესობები
            </Link>
          </Li>
          <Li>
            <Link
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              to={"membership"}
            >
              აბონიმენტები
            </Link>
          </Li>
          <Li>
            <Link
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              to={"aboutUs"}
            >
              აბონიმენტები
            </Link>
          </Li>
          <Li>
            <Link
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              to={"trainers"}
            >
              ტრენერები
            </Link>
          </Li>
        </Ul>
      </MenuDiv>
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.div`
  width: 100%;
  padding: 20px;
  color: ${defaultTheme.colors.white};
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  z-index: 110;
`;

const BurgerButton = styled.button`
  all: unset;
  display: none;
  img {
    height: 25px;
    width: 25px;
  }

  @media (max-width: 550px) {
    display: ${(props) => (props.show ? "inline-block" : "none")};
  }
`;

const XMarkButton = styled.button`
  all: unset;
  display: none;

  img {
    height: 25px;
    width: 25px;
  }
  @media (max-width: 550px) {
    display: ${(props) => (props.show ? "inline-block" : "none")};
  }
`;

const LogoDiv = styled.div`
  display: flex;
  align-items: center;
`;

const Ul = styled.ul`
  display: flex;
  align-items: center;
  list-style-type: none;
  gap: 70px;
  @media (max-width: 744px) {
    gap: 30px;
  }
  @media (max-width: 550px) {
    display: none;
  }
`;

const Li = styled.li`
  font-size: 16px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  /* margin-right: 70px; */
  a {
    text-decoration: none;
    color: ${defaultTheme.colors.white};
    cursor: pointer;
  }
`;

const MenuDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ModalUl = styled.ul`
  list-style-type: none;
  margin-bottom: 10px;
`;

const ModalDiv = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 100%;
  left: 0%;
  background-color: ${defaultTheme.colors.yellow};
  padding: 20px;
`;

const ModalLi = styled.li`
  font-size: 16px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  color: ${defaultTheme.colors.black};
  margin-bottom: 8px;

  a {
    text-decoration: none;
    color: ${defaultTheme.colors.brown};
    cursor: pointer;
  }
`;

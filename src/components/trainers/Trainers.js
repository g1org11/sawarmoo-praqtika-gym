import React from "react";
import styled from "styled-components";
import t1 from "../../assets/t-1.png";
import t2 from "../../assets/t-2.png";
import t3 from "../../assets/t-3.png";
import t4 from "../../assets/t-4.png";
import t5 from "../../assets/t-5.png";
import t6 from "../../assets/t-6.png";
import t7 from "../../assets/t-7.png";
import t8 from "../../assets/t-8.png";

import { defaultTheme } from "../defaultTheme";
import Trainer from "./trainer";

const Trainers = () => {
  return (
    <Container id="trainers">
      <Wrapper>
        <h1>ტრენერების პერსონალი</h1>
        <TrainersWrapper>
          <Trainer img={t1} title={"მარი თოფურია"} />
          <Trainer img={t2} title={"ელიზაბეტ ლაბარტყავა"} />
          <Trainer img={t3} title={"გიორგი ხოშტარია"} />
          <Trainer img={t4} title={"ლუდმილა სურმაავა"} />
          <Trainer img={t5} title={"გიორგი გამრეკელი"} />
          <Trainer img={t6} title={"ზურა ცარციძე"} />
          <Trainer img={t7} title={"ლევან ალიბეგაშვილი"} />
          <Trainer img={t8} title={"ანა შამათავა"} />
        </TrainersWrapper>
      </Wrapper>
    </Container>
  );
};

export default Trainers;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 230px;
`;
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  h1 {
    font-size: 48px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    color: ${defaultTheme.colors.white};
    margin-bottom: 120px;
  }
`;
const TrainersWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
`;

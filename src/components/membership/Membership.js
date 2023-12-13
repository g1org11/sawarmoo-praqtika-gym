import React from "react";
import marks from "../../assets/marks.svg";
import styled from "styled-components";
import Member from "./Member";
import { defaultTheme } from "../defaultTheme";

const Membership = () => {
  return (
    <MembershipContainer id="membership">
      <MemberWrapper>
        <MemberTitle>Gym membership</MemberTitle>

        <MemberSlider>
          <Member
            title={"Pass ‘Trial’"}
            price={"$ 0"}
            icon={marks}
            textone={"Access to the gym from 8:00 to 14:00"}
            texttwo={"The trainer on duty will introduce you to the gym"}
            button={"buy"}
          />
          <Member
            title={"Pass ‘Easy Start’ "}
            price={"$ 119"}
            icon={marks}
            textone={"Visit without restrictions 24/7"}
            texttwo={"Individual training program"}
            textthree={"Access to the VTRAINER application"}
            textfour={"Trainer support"}
          />
          <Member
            title={"Pass ‘Free Time’  "}
            price={"$ 49"}
            icon={marks}
            textone={"The entrance time to the gym is from 14:00 to 16:00"}
            texttwo={"Without suspension of gym membership"}
            textthree={"The trainer on duty will introduce you to the gym"}
          />
          <Member
            title={"Pass ‘1 Month 24/7’ "}
            price={"$ 85"}
            icon={marks}
            textone={"Visit without restrictions 24/7"}
            texttwo={"The trainer on duty will introduce you to the gym"}
          />
          <Member
            title={"Pass ‘In Shape (AM)’  "}
            price={"$ 165"}
            icon={marks}
            textone={"Training in mini-groups until 14:00"}
            texttwo={"Without suspension of gym membership"}
            textthree={"Classes with a trainer in a mini-group 3 times a week"}
            textfour={"Trainer support"}
          />
          <Member
            title={"Pass ‘In Shape (PM)’  "}
            price={"$ 195 "}
            icon={marks}
            textone={"Training in mini-groups until 17:00"}
            texttwo={"Without suspension of gym membership"}
            textthree={"Classes with a trainer in a mini-group 3 times a week"}
            textfour={"Trainer support"}
          />
        </MemberSlider>
      </MemberWrapper>
    </MembershipContainer>
  );
};

export default Membership;

const MembershipContainer = styled.div`
  position: relative;
  z-index: 20;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 200px;
  font-family: ${defaultTheme.fonts.primary};
`;

const MemberWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const MemberTitle = styled.h1`
  font-size: 48px;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
  color: ${defaultTheme.colors.white};
  margin-bottom: 120px;
  font-family: ${defaultTheme.fonts.primary};

  @media (max-width: 630px) {
    font-size: 28px;
  }
`;

const MemberSlider = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;

  gap: 68px;
  padding: 10px;

  @media (max-width: 1100px) {
    gap: 56px;
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 744px) {
    gap: 34px;
  }
  @media (max-width: 620px) {
    grid-template-columns: 1fr;
  }
`;

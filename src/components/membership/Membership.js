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
            title={"გაიარეთ 'საცდელი'"}
            price={"$ 0"}
            icon={marks}
            textone={"დარბაზში შესვლა 8:00 საათიდან 14:00 საათამდე"}
            texttwo={"მორიგე ტრენერი გაგაცნობთ დარბაზს"}
            button={"buy"}
          />
          <Member
            title={"გაიარეთ 'მარტივი დაწყება'"}
            price={"$ 119"}
            icon={marks}
            textone={"ეწვიეთ შეზღუდვების გარეშე 24/7"}
            texttwo={"ინდივიდუალური სასწავლო პროგრამა"}
            textthree={"წვდომა VTRAINER აპლიკაციაზე"}
            textfour={"ტრენერის მხარდაჭერა"}
          />
          <Member
            title={"გაიარეთ 'თავისუფალი დრო' "}
            price={"$ 49"}
            icon={marks}
            textone={"სპორტდარბაზში შესვლის დროა 14:00-დან 16:00 საათამდე"}
            texttwo={"სპორტული დარბაზის წევრობის შეჩერების გარეშე"}
            textthree={"მორიგე ტრენერი გაგაცნობთ დარბაზს"}
          />
          <Member
            title={"გაიაროს '1 თვე 24/7'"}
            price={"$ 85"}
            icon={marks}
            textone={"ეწვიეთ შეზღუდვების გარეშე 24/7"}
            texttwo={"მორიგე ტრენერი გაგაცნობთ დარბაზს"}
          />
          <Member
            title={"გაიარეთ „ფორმაში (AM)“ "}
            price={"$ 165"}
            icon={marks}
            textone={"ტრენინგი მინი-ჯგუფებში 14:00 საათამდე"}
            texttwo={"სპორტული დარბაზის წევრობის შეჩერების გარეშე"}
            textthree={"გაკვეთილები ტრენერთან ერთად მინი-ჯგუფში კვირაში 3-ჯერ"}
            textfour={"ტრენერის მხარდაჭერა"}
          />
          <Member
            title={"გაიარეთ 'ფორმის ფორმაში (PM)'"}
            price={"$ 195 "}
            icon={marks}
            textone={"ტრენინგი მინი-ჯგუფებში 17:00 საათამდე"}
            texttwo={"სპორტული დარბაზის წევრობის შეჩერების გარეშე"}
            textthree={"გაკვეთილები ტრენერთან ერთად მინი-ჯგუფში კვირაში 3-ჯერ"}
            textfour={"ტრენერის მხარდაჭერა"}
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

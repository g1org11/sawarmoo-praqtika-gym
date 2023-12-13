import React from "react";
import about1 from "../../assets/about-1.png";
import about2 from "../../assets/about-2.png";
import about3 from "../../assets/about-3.png";
import about4 from "../../assets/about-4.png";
import { defaultTheme } from "../defaultTheme";
import { Swiper, SwiperSlide } from "swiper/react";
import { useState, useEffect } from "react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper/modules";
import styled from "styled-components";

const AboutUs = () => {
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 393);
    };

    // Initial check
    handleResize();

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <Container id="aboutUs">
      <AboutWrapper>
        <h1>About us</h1>
        <Info>
          <p>
            Gym24 is a leading fitness center located near Grushevka metro station, offering over
            1500 sq. m of space dedicated to top-of-the-line workout equipment from leading brands
            such as Hammer Strength, Life Fitness, and TechnoGym.
          </p>
          <p>
            With affordable membership options, Gym24 is accessible to everyone who wants to reach
            their fitness goals, whether it's building strength, increasing endurance, or losing
            weight.
          </p>
          <p>
            Certified trainers at Gym24 provide expert guidance and support to develop personalized
            workout plans tailored to each individual's needs and goals.
          </p>
        </Info>
      </AboutWrapper>
      {isMobile ? (
        <SliderDiv>
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            loop={true}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="swiper-slide"
            style={{
              width: "280px",
              overflow: "hidden",
            }}
          >
            <div>
              <SwiperSlide>
                <img src={about1} alt="img" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={about2} alt="img" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={about3} alt="img" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={about4} alt="img" />
              </SwiperSlide>
            </div>
          </Swiper>
        </SliderDiv>
      ) : (
        <SliderDiv>
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            loop={true}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="swiper-slide"
            style={{
              width: "570px",
              overflow: "hidden",
            }}
          >
            <div>
              <SwiperSlide>
                <img src={about1} alt="img" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={about2} alt="img" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={about3} alt="img" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={about4} alt="img" />
              </SwiperSlide>
            </div>
          </Swiper>
        </SliderDiv>
      )}
    </Container>
  );
};

export default AboutUs;
const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: center;
  margin-top: 250px;
  @media (max-width: 1000px) {
    grid-template-columns: auto;
  }
`;

const AboutWrapper = styled.div`
  h1 {
    font-size: 48px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    color: ${defaultTheme.colors.white};
    margin-bottom: 65px;
    @media (max-width: 1000px) {
      text-align: center;
    }
    @media (max-width: 393px) {
      font-size: 28px;
    }
  }
`;
const Info = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 472px;
  height: 330px;
  flex-shrink: 0;
  @media (max-width: 1000px) {
    width: 600px;
  }
  @media (max-width: 744px) {
    text-align: center;
  }
  @media (max-width: 393px) {
    width: 280px;
    flex-shrink: 0;
    margin-bottom: 150px;
  }

  p {
    font-size: 14px;
    font-style: normal;
    font-weight: 300;
    line-height: 161.7%;
    color: ${defaultTheme.colors.white};
    margin-bottom: 20px;
  }
`;
const SliderDiv = styled.div`
  margin-left: 50px;
  width: 570px;
  @media (max-width: 1000px) {
    .swiper-slide {
      width: 300px;
    }

    margin-left: 0;
  }
  @media (max-width: 393px) {
    width: 280px;
  }
`;

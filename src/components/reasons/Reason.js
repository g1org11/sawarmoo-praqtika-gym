import React from "react";
import styled from "styled-components";

const Reason = ({ img, title, text }) => {
  return (
    <Container>
      <img src={img} alt="lineIcon"></img>
      <div>
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
    </Container>
  );
};

export default Reason;
const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  max-width: 550px;
  @media (max-width: 1000px) {
    max-width: 400px;
  }
  @media (max-width: 744px) {
    max-width: 600px;
  }
  @media (max-width: 670px) {
    max-width: 500px;
  }
`;

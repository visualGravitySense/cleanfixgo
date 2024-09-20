import React from "react";
import styled from "styled-components";

const HeroWrapper = styled.section`
  height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;

  position: relative;
`;

const HeroText = styled.div`
  font-size: 4rem;
  font-weight: bold;
  text-align: center;
  text-transform: uppercase;
  z-index: 2;
`;

const BackgroundImage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  opacity: 0.3;
`;

const HeroSection = () => {
  return (
    <HeroWrapper>
      <BackgroundImage />
      <HeroText>Find Your Home Service Today</HeroText>
    </HeroWrapper>
  );
};

export default HeroSection;

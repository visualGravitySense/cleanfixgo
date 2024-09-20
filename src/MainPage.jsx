import React from "react";
import { Container } from "react-bootstrap";
import styled from "styled-components";
// import { HeroSection, CategoriesSection, FeaturedServices } from "./";

import { FaSun, FaMoon } from "react-icons/fa";
import { useState } from "react";

import HeroSection from './HeroSection'; 
import CategoriesSection from './CategoriesSection'; 
import FeaturedServices from './FeaturedServices'; 


const AppWrapper = styled.div`
  background-color: ${(props) => (props.darkMode ? "" : "")};
  color: ${(props) => (props.darkMode ? "#fff" : "#000")};
  transition: background-color 0.3s, color 0.3s;
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  background: ${(props) => (props.darkMode ? "" : "")};
`;

const ThemeToggleButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  font-size: 24px;
`;

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <AppWrapper darkMode={darkMode}>
      <Header darkMode={darkMode}>
        <div>ServiceFinder</div>
        <ThemeToggleButton onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? <FaSun /> : <FaMoon />}
        </ThemeToggleButton>
      </Header>
      <Container>
        <HeroSection />
        <CategoriesSection />
        <FeaturedServices />
      </Container>
    </AppWrapper>
  );
}

export default App;

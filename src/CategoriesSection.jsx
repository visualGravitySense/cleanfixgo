import React from "react";
import styled from "styled-components";
import { FaBroom, FaTools, FaChalkboardTeacher } from "react-icons/fa";

const CategoriesWrapper = styled.section`
  padding: 50px 0;
  background: none;
  display: flex;
  justify-content: space-around;
`;

const CategoryCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background: ${(props) => props.bgColor};
  border-radius: 10px;
  width: 150px;
  color: #fff;
  font-weight: bold;
  text-transform: uppercase;
  font-size: 1.2rem;
  transition: transform 0.3s;
  &:hover {
    transform: scale(1.1);
  }
`;

const CategoriesSection = () => {
  return (
    <CategoriesWrapper>
      <CategoryCard bgColor="#ff8c42">
        <FaBroom size={40} />
        <p>Cleaning</p>
      </CategoryCard>
      <CategoryCard bgColor="#4a90e2">
        <FaTools size={40} />
        <p>Repairs</p>
      </CategoryCard>
      <CategoryCard bgColor="#50e3c2">
        <FaChalkboardTeacher size={40} />
        <p>Courses</p>
      </CategoryCard>
    </CategoriesWrapper>
  );
};

export default CategoriesSection;

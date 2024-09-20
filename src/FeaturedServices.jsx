import React from "react";
import styled from "styled-components";

const ServicesWrapper = styled.section`
  padding: 50px 0;
  background: none;
`;

const ServiceCard = styled.div`
  display: inline-block;
  margin: 15px;
  padding: 20px;
  background: #00ff00;
  border-radius: 10px;
  text-align: center;
  width: 250px;
  box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.1);
  transform: rotate(${(props) => props.rotation}deg);
`;

const FeaturedServices = () => {
  const services = [
    { title: "House Cleaning", rotation: 5 },
    { title: "Plumbing", rotation: -3 },
    { title: "Math Tutor", rotation: 2 },
  ];

  return (
    <ServicesWrapper>
      {services.map((service, index) => (
        <ServiceCard key={index} rotation={service.rotation}>
          {service.title}
        </ServiceCard>
      ))}
    </ServicesWrapper>
  );
};

export default FeaturedServices;

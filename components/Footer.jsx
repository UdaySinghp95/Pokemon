import React from "react";
import styled from "styled-components";

function Footer({ folder = "" }) {
  return (
    <Container>
      <Icon src={folder + "./favicon.ico"} />
      <p>Copyright 2021 by Uday Singh</p>
    </Container>
  );
}

export default Footer;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 3rem;
  background-color: white;
  margin-bottom: 0;
  box-shadow: 0 0px 5px 5px #f3f2f2;
  p {
    font-size: 1.5rem;
  }
`;

const Icon = styled.img`
  width: 3.1rem;
  margin: 1.1rem 1rem;
`;

import { useRouter } from "next/router";
import React from "react";
import styled from "styled-components";

function Theme(props) {
  const router = useRouter();
  return (
    <Container>
      <Image src="./pokemon.png" data-aos="fade-left" data-aos-duration="500" />
      <h2 data-aos="fade-right" data-aos-duration="500">
        Play exlusive game
      </h2>
      <ButtonContainer data-aos="fade-right" data-aos-duration="500">
        <Button onClick={() => router.push("/pokedex")}>Explore</Button>
        <Button onClick={() => router.push("/game")}>Play</Button>
      </ButtonContainer>
    </Container>
  );
}

export default Theme;

const Container = styled.div`
  display: flex;

  background-image: linear-gradient(
    to right,
    #e149f5,
    #ff25ac,
    #ff705c,
    #effe00,
    #effe00
  );
  position: relative;
  flex-direction: column;
  align-items: flex-start;
  /* justify-content: center; */
  padding: 8rem 10rem 9rem;
  clip-path: polygon(0 0, 100% 0%, 100% 96%, 0% 100%);
  h2 {
    font-size: 8rem;
    color: #ffffff;
    word-spacing: 9999rem;
    text-transform: uppercase;
    margin: 0;
    @media screen and (max-width: 570px) {
      word-spacing: 1rem;
      font-size: 4rem;
      text-align: center;
    }
  }
  @media screen and (max-width: 570px) {
    padding: 8rem 2rem;
  }
`;

const Image = styled.img`
  position: absolute;
  height: 40rem;
  top: 13%;
  right: 10rem;
  z-index: 0;
  @media screen and (max-width: 942px) {
    display: none;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 4rem;
  align-items: center;

  @media screen and (max-width: 570px) {
    width: 100%;
    flex: 1;
    flex-direction: column;
  }
`;

const Button = styled.button`
  background-image: linear-gradient(
    to right,
    #ec02de,
    #e300e6,
    #d900ee,
    #cd00f6,
    #bf00ff
  );
  color: white;
  font-size: 2.6rem;
  border: none;
  border-radius: 9rem;
  padding: 0.3rem 1.5rem;
  border: 2.5px solid white;
  margin: 1rem;
  padding: 1rem;
  font-weight: 500;
  padding: 0.5rem 4.3rem;
  transition: all ease-in 0.25s;
  cursor: pointer;
  :hover {
    font-size: 3.2rem;
    border: 4px solid white;
  }
  @media screen and (max-width: 570px) {
    width: 80%;
  }
`;

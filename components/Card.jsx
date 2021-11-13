import React from "react";
import styled from "styled-components";

function Card({ profileUrl, color }) {
  return (
    <Container className="card">
      <Description>
        <h3 style={{ color }}>Lorem ipsum dolor sit amet.</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia
          consequuntur suscipit in iusto fuga reprehenderit minima, rem quaerat
          possimus culpa provident quis. Officia nostrum non doloribus
          repudiandae voluptate ipsa. Et error hic fuga consectetur adipisicing
          elit uga reprehenderit of maniputlate the thing which is formed.
        </p>
        <Button>Learn More</Button>
      </Description>
      <Profile className="card__profile" src={profileUrl} />
    </Container>
  );
}

export default Card;

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  place-items: center;
  place-content: center;
  margin: 10rem 0;
  grid-gap: 8rem;
  overflow: visible;

  h3 {
    font-size: 2.7rem;
    margin-bottom: 1rem;
  }
  p {
    font-size: 1.65rem;
    color: #70758a;
  }
  @media screen and (max-width: 1000px) {
    grid-template-columns: repeat(1, 1fr);
    h3 {
      font-size: 2.7rem;
      margin-bottom: 1rem;
      text-align: center;
    }
    p {
      padding: 0 2rem;
    }
  }
`;

const Description = styled.div``;
export const Profile = styled.img`
  object-fit: contain;
  height: 30rem;
  border-radius: 2rem;
  box-shadow: 0 0 5px 5px #eeebeb;
  transition: all 0.2s ease-out;
  :hover {
    transform: scale(1.05);
    object-fit: cover;
  }
  @media screen and (max-width: 1000px) {
    height: 35rem;
  }
  @media screen and (max-width: 580px) {
    height: 20rem;
  }
`;

const Button = styled.a`
  font-size: 1.8rem;
  font-weight: bolder;
  color: #bc3e3e;
  text-transform: uppercase;
  cursor: pointer;
  display: block;
  :after {
    content: " →";
    font-size: 4rem;
    text-align: center;
    transition: margin 0.15s;
    position: relative;
    top: 3px;
  }
  :hover::after {
    margin-left: 1.2rem;
  }

  @media screen and (max-width: 1000px) {
    align-self: center;
    margin-left: 30vw;
  }
`;

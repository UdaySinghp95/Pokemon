import React from "react";
import styled from "styled-components";
import Card, { Profile } from "./Card";

function Review(props) {
  return (
    <Container>
      <h2> Our Exciting Features</h2>
      <Card
        color="#2577b1"
        profileUrl="https://preview.redd.it/2e10gz1do9n41.jpg?auto=webp&s=13d2479efec4a8899b3de824cce0bbc0d8e394e2"
      />
      <Card
        color="#00b13f"
        profileUrl="https://wallpapercave.com/wp/wp2495318.jpg"
      />
      <Card
        color="#e54252"
        profileUrl="https://www.teahub.io/photos/full/26-265795_pokemon-wallpapers-charizard-data-src-full-860423-pokemon.jpg"
      />
      <Card
        color="#d217a1"
        profileUrl="https://wallpaperaccess.com/full/504234.png"
      />
    </Container>
  );
}

export default Review;

const Container = styled.div`
  width: 103rem;
  margin: auto;
  margin-top: 12rem;

  h2 {
    text-transform: uppercase;
    color: #c21283;
    font-size: 3.5rem;
    text-align: center;
    margin-bottom: 3rem;
  }
  @media screen and (min-width: 1001px) {
    .card:nth-of-type(2n) > .card__profile {
      order: -1;
    }
  }

  @media screen and (max-width: 1000px) {
    width: 100vw;
  }
`;

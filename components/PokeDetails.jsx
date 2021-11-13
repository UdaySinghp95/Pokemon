import React from "react";
import styled, { css } from "styled-components";
import { getPokemon } from "../backend/dataFetch";
import { pokeColor, capitlaize, pokeBadgeColor } from "../utils/utility";
import Header from "./Header";
import Footer from "./Footer";
import Badge from "./Badge";

function PokeDetails({ poke, heading, children }) {
  return (
    <Content>
      <Header folder="../" />
      <Container type={poke?.type[0]}>
        <Image
          type={poke?.type[0]}
          src={`https://cdn.traction.one/pokedex/pokemon/${poke?.id + 1}.png`}
        />
        <SubContainer>
          <h2>{heading}</h2>
          <p>{poke?.description}</p>
          <RowContainer>
            <h4>Type</h4>

            {poke?.type.map((type, index) => (
              <Badge type={type} key={index}>
                {capitlaize(type)}
              </Badge>
            ))}
          </RowContainer>
          <GridContainer>
            <RowContainer>
              <h4>Ability</h4>
              {poke?.ability.map((a) => (
                <p key={a}>{a}</p>
              ))}
            </RowContainer>
            <RowContainer>
              <h4>Growth</h4>
              <p>{poke?.growth}</p>
            </RowContainer>
            <RowContainer>
              <h4>Height</h4>
              <p>{poke?.height}</p>
            </RowContainer>
            <RowContainer>
              <h4>Weight</h4>
              <p>{poke?.weight}</p>
            </RowContainer>

            <RowContainer>
              <h4>Capture Rate</h4>
              <p>{poke?.capture_rate}</p>
            </RowContainer>
            <RowContainer>
              <h4>Experience</h4>
              <p>{poke?.experience}</p>
            </RowContainer>

            <RowContainer>
              <h4>Happiness</h4>
              <p>{poke?.happiness}</p>
            </RowContainer>
            <RowContainer>
              <h4>Moves</h4>
              <p>{poke?.moves}</p>
            </RowContainer>
          </GridContainer>

          <RowContainer btn={true}>{children}</RowContainer>
        </SubContainer>
      </Container>
      <Footer folder="../" />
    </Content>
  );
}

export default PokeDetails;

const Content = styled.div`
  display: flex;
  height: 100vh;
  flex-direction: column;
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 7rem auto 5rem;
  width: 90rem;
  background-color: white;
  border-radius: 1rem;
  padding: 2rem;
  padding-right: 0;
  box-shadow: 0 0 5px 5px #f5f3f3;

  ${(props) =>
    props.type &&
    css`
      box-shadow: 0 0 5px 5px ${pokeColor[props.type]};
    `}

  @media screen and (max-width: 1000px) {
    flex-direction: column;
    width: 50rem;
    padding: 3rem 0;
  }
  @media screen and (max-width: 500px) {
    flex-direction: column;
    width: 100vw;
  }
`;

const Image = styled.img`
  object-fit: contain;
  padding: 3rem;
  border-radius: 1.2rem;
  ${(props) =>
    props.type &&
    css`
      background-color: ${pokeColor[props.type]};
    `}
  width: 40rem;
  @media screen and (max-width: 500px) {
    flex-direction: column;
    width: 30rem;
  }
`;

const SubContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex: 1;

  padding: 0rem 1rem 0 2.5rem;
  h2 {
    font-size: 2.7rem;
    margin: 0 3rem 1rem 0;
    align-self: center;
    text-transform: capitalize;
  }

  p {
    margin-top: 0.5rem;
    font-size: 1.7rem;
    color: #4d4b4b;
    margin-right: 3rem;
    text-align: center;
  }
  @media screen and (max-width: 500px) {
    padding: 1rem 2rem;
    h2 {
      margin: 4rem 0 1rem;
    }
  }
`;

const RowContainer = styled.div`
  display: flex;
  flex: 1;
  width: 100%;
  margin: 1rem;
  margin-left: 0;
  align-self: flex-start;
  h4 {
    font-size: 1.6rem;
    color: #383232;
    margin: 0;
    margin-right: 1rem;
    padding: 0;
  }
  p {
    text-transform: capitalize;
    font-size: 1.55rem;
    margin: 0;
    padding: 0;
    margin-right: 0.5rem;
    color: #4d4b4b;
  }
  ${(props) =>
    props.btn &&
    css`
      @media screen and (max-width: 1000px) {
        flex-direction: column;
      }
    `}
`;

const GridContainer = styled.div`
  display: grid;
  grid-gap: 0 3rem;
  grid-template-columns: repeat(2, 1fr);
  @media screen and (max-width: 450px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

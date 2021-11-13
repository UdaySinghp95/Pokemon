import React, { useContext, useEffect } from "react";
import styled from "styled-components";
import { getPokemonList } from "../backend/dataFetch";
import Header from "../components/Header";
import PokeCard from "./../components/PokeCard";
import PokeStore from "./../context/PokeStore";
import Footer from "./../components/Footer";
import Head from "next/head";

function Pokemon(props) {
  const { poke_list, setPokeList } = useContext(PokeStore);

  useEffect(() => {
    loadPokemon();
    return () => {};
  }, []);

  const loadPokemon = async () => {
    const res = await getPokemonList(poke_list.length);
    setPokeList([...poke_list, ...res]);
  };

  console.log(poke_list);
  return (
    <Container>
      <Head>
        <title>Pokedex</title>
      </Head>
      <Header />
      <Heading>Pokedex with Evolution</Heading>
      <SubContainer>
        {poke_list.map((data, index) => (
          <PokeCard id={index} key={index} />
        ))}
      </SubContainer>
      <Button onClick={loadPokemon}>more</Button>
      <Footer />
    </Container>
  );
}

export default Pokemon;

const Container = styled.div`
  display: flex;
  flex: 1;
  width: 100vw;
  flex-direction: column;
`;

const SubContainer = styled.div`
  display: grid;
  place-content: center;
  grid-template-columns: repeat(3, auto);
  grid-gap: 3.7rem;
  @media screen and (max-width: 1000px) {
    grid-template-columns: repeat(1, auto);
    justify-content: center;
  }
`;

const Heading = styled.h1`
  margin: 6.5rem auto 5rem;
  font-size: 4rem;
  color: #081b62;
  text-align: center;
`;

const Button = styled.button`
  background-color: #e72000;
  color: white;
  border-radius: 10rem;
  margin: auto;
  border: none;
  font-size: 2.5rem;
  padding: 0.55rem 2rem;
  text-transform: capitalize;
  transition: all 0.15s ease-out;
  margin-top: 4rem;
  :hover {
    transform: scale(1.07);
  }
  cursor: pointer;
`;

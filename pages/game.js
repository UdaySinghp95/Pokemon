import React, { useEffect, useState } from "react";
import styled, { css, keyframes } from "styled-components";
import { getPokemon } from "../backend/dataFetch";
import { pokeBadgeColor } from "../utils/utility";
import PokeDetails from "./../components/PokeDetails";
import Head from "next/head";

function Game() {
  const [text, setText] = useState("");
  const [btnText, setBtnText] = useState("Catch");
  const [poke, setPoke] = useState(undefined);

  useEffect(() => {
    getPoke();
    setBtnText("Catch");
    return () => {};
  }, []);

  const getPoke = async () => {
    const pkm = await getPokemon(Math.floor(Math.random() * 51));
    setPoke(pkm);
  };

  const checkPokemon = async () => {
    if (btnText == "Next") return nextPokemon();

    text.toLowerCase().trim() != poke.name
      ? setBtnText("Again")
      : setBtnText("Next");
  };
  const nextPokemon = async () => {
    await getPoke();

    setBtnText("Catch");
  };

  console.log(poke?.name);

  return (
    <>
      <Head>
        <title>Pokemon Gane</title>
      </Head>
      {poke && (
        <PokeDetails poke={poke} heading="Guess the Pokemon">
          <Input
            type={poke?.type[0]}
            value={text}
            onChange={({ currentTarget }) => setText(currentTarget.value)}
          />
          <Button
            type={poke?.type[0]}
            onClick={checkPokemon}
            normal={btnText != "Again"}
          >
            {btnText}
          </Button>
        </PokeDetails>
      )}
    </>
  );
}

export default Game;

const Input = styled.input`
  outline: none;
  font-size: 1.4rem;
  width: auto;
  border: 1px solid blue;
  border-radius: 3rem;
  padding: 0.5rem 4rem;
  margin: 0;
  box-shadow: 0 0 5px 5px #f5f3f3;
  text-transform: capitalize;
  border: none;
  ${(props) =>
    props.type &&
    css`
      outline: 1px solid ${pokeBadgeColor[props.type]};
    `}
`;

const scale = keyframes`
  from {
    transform: scale(0.95);
  }

  to {
    transform: scale(1);
  }
`;

const vibrate = keyframes`
from{
transform: translate(4px);

}
to{
transform: translate(-4px);

}
`;

const Button = styled.button`
  ${(props) =>
    props.type &&
    css`
      background-color: ${pokeBadgeColor[props.type]};
    `}
  border: none;
  color: white;
  border-radius: 10rem;
  margin: auto;
  min-width: 15rem;
  max-width: 17rem;
  font-size: 2rem;
  padding: 0.8rem 1rem;
  font-weight: 600;
  text-transform: capitalize;

  :focus {
    animation: ${scale} 0.2s ease-out;
  }
  @media screen and (max-width: 1000px) {
    margin-top: 2rem;
    width: auto;
    width: 100%;
    max-width: 40rem;
  }
`;

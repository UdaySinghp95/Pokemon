import { useRouter } from "next/router";
import React from "react";
import styled, { keyframes } from "styled-components";
import { getPokemon } from "../../backend/dataFetch";
import { capitlaize, pokeBadgeColor } from "../../utils/utility";
import PokeDetails from "./../../components/PokeDetails";
import Head from "next/head";

function Pokemon({ poke }) {
  const router = useRouter();
  poke = JSON.parse(poke);

  return (
    <PokeDetails heading={poke.name} poke={poke}>
      <Head>
        <title>{capitlaize(poke.name)}</title>
      </Head>
      <Button
        onClick={() =>
          router.push(`/pokemon/${Math.floor(Math.random() * 101)}`)
        }
        zzz
      >
        Random
      </Button>
      <Button
        onClick={() => router.push(`/pokemon/${poke?.id ? poke.id + 2 : 1}`)}
        style={{ backgroundColor: pokeBadgeColor[poke?.type[0]] }}
      >
        Next
      </Button>
    </PokeDetails>
  );
}

export default Pokemon;

const scale = keyframes`
  from {
    transform: scale(0.95);
  }

  to {
    transform: scale(1);
  }
`;

const Button = styled.button`
  background-color: #0b61f0;
  border: none;
  color: white;
  border-radius: 10rem;
  margin: auto;
  min-width: 18rem;
  width: 100%;
  max-width: 20rem;
  font-size: 2rem;
  padding: 0.8rem 2rem;
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

export async function getServerSideProps(context) {
  const poke = await getPokemon(parseInt(context.params.id) - 1);

  return { props: { poke: JSON.stringify(poke) } };
}

import React, { useContext } from "react";
import styled, { css } from "styled-components";
import { capitlaize, pokeColor } from "../utils/utility";
import Badge from "./Badge";
import PokeStore from "./../context/PokeStore";
import { useRouter } from "next/router";

function PokeCard({ id }) {
  const { poke_list } = useContext(PokeStore);
  const router = useRouter();

  return (
    <Container
      type={poke_list[id]["type"][0]}
      onClick={() => router.push(`/pokemon/${id + 1}`)}
      data-aos="fade-up"
      key={id}
    >
      <Image src={`https://cdn.traction.one/pokedex/pokemon/${id + 1}.png`} />
      <BoldText>{poke_list[id].name}</BoldText>
      <div>
        {poke_list[id]["type"].map((type, index) => (
          <Badge type={type} key={index}>
            {capitlaize(type)}
          </Badge>
        ))}
      </div>
    </Container>
  );
}

export default PokeCard;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 3rem;
  border-radius: 1.2rem;
  ${(props) =>
    props.type &&
    css`
      background-color: ${pokeColor[props.type]};
    `}
  transition: all 0.15s ease-out;

  :hover {
    transform: scale(1.07);
  }
  cursor: pointer;
`;
const Image = styled.img`
  object-fit: contain;
  width: 25rem;
`;

const BoldText = styled.h3`
  font-size: 2.2rem;
  color: #514c4c;
  text-transform: capitalize;
`;

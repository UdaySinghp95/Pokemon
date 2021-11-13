import { useRouter } from "next/router";
import React from "react";
import styled from "styled-components";

function Header({ folder = "" }) {
  const router = useRouter();
  return (
    <Container>
      <Icon onClick={() => router.push("/")} src={folder + "./icon.png"} />
      <SubContainer>
        <Link href="/game">Play</Link>
        <Link
          onClick={() =>
            router.push(`/pokemon/${1 + Math.floor(Math.random() * 200)}`)
          }
        >
          Random
        </Link>
        <Link href="/pokedex">Explore</Link>
        <Login>Login</Login>
        <SignUp>Join</SignUp>
      </SubContainer>
    </Container>
  );
}

export default Header;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1rem 1.8rem;
  flex: 1;
  background-color: #fdfdfd;
  box-shadow: 0 0 5px 5px #f3f2f2;
  margin: 0 0 0.5rem;
`;

const SubContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(5, auto);
  justify-items: end;
  align-items: center;

  grid-gap: 3rem;
  @media screen and (max-width: 470px) {
    margin-top: 2rem;
    grid-template-columns: repeat(2, auto);
    grid-gap: 1rem;
  }
`;

const Login = styled.button`
  color: #e63b3b;
  border: 2px solid #e63b3b;
  font-size: 2.1rem;
  border-radius: 0.4rem;
  padding: 0.2rem 1rem;
  background-color: white;
`;

const SignUp = styled.button`
  background-color: #f04040;
  color: white;
  font-size: 2.1rem;
  border: 2px solid white;
  border-radius: 0.4rem;
  padding: 0.3rem 1.5rem;
`;

const Icon = styled.img`
  width: 20rem;
  height: 7rem;
  object-fit: contain;
  cursor: pointer;
  @media screen and (max-width: 480px) {
    width: 15rem;
  }
`;

const Link = styled.a`
  font-size: 1.8rem;
  font-weight: 500;
  cursor: pointer;
  @media screen and (max-width: 730px) {
    display: none;
  }
`;

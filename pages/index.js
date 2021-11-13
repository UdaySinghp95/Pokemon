import styled from "styled-components";
import Header from "./../components/Header";
import Theme from "./../components/Theme";
import Review from "./../components/Review";
import Footer from "../components/Footer";
import Head from "next/head";

export default function Home() {
  return (
    <Container>
      <Head>
        <title>Pokemon</title>
      </Head>
      <Header />
      <Theme />
      <Review />
      <Footer />
    </Container>
  );
}

const Container = styled.div`
  margin: 0;
  display: flex;
  width: 100vw;
  height: 100vh;
  flex-direction: column;
  overflow-x: hidden;
`;

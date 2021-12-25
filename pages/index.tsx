import type { NextPage } from "next";
import Head from "next/head";
import styled from "styled-components";

const Home: NextPage = () => {
  return (
    <Container>
      <Head>
        <title>Wellerson</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="shortcut icon" href="/avatar.jpg" />
      </Head>
      <Header></Header>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  display: flex;
  flex: 1;
  flex-direction: column;
`;

const Header = styled.header``;

export default Home;

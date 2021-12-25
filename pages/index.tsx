import type { NextPage } from "next";
import Head from "next/head";
import styled from "styled-components";

const Home: NextPage = () => {
  return (
    <Container>
      <Head>
        <title>Wellerson</title>
      </Head>
      <Header>
        hello
      </Header>
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

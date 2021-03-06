import { NextPage } from "next";
import React from "react";
import styled from "styled-components";
import { FaGhost } from "react-icons/fa";

const Page404: NextPage = () => {
  return (
    <Container>
      <FaGhost size={150} color={"#fff"} />
      <Info>404</Info>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background: #32978e;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Info = styled.h1`
  color: #fff;
  font-size: 2.5rem;
  font-weight: bold;
  text-align: center;
`;
export default Page404;

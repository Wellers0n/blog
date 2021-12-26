import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styled from "styled-components";
import { FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa";
import Button from "../components/Button";

const Home: NextPage = () => {
  return (
    <Container>
      <Head>
        <title>Wellerson</title>
      </Head>
      <Header>
        <div>
          <Name>Wellerson</Name>
          <Position>Fullstack developer</Position>
        </div>
        <Avatar>
          <Image src={"/avatar.jpg"} height={200} width={200} alt="avatar" />
        </Avatar>
      </Header>
      <Footer>
        <Icons>
          <a
            href="https://twitter.com/wellers0n_"
            target={"_blank"}
            rel="noreferrer"
          >
            <FaTwitter color="#161416" size={35} />
          </a>
          <a
            href="https://github.com/wellers0n"
            target={"_blank"}
            rel="noreferrer"
          >
            <FaGithub color="#161416" size={35} />
          </a>
          <a
            href="https://www.linkedin.com/in/wellers0n/"
            target={"_blank"}
            rel="noreferrer"
          >
            <FaLinkedin color="#161416" size={35} />
          </a>
        </Icons>
        <About>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae,
          nihil ad ipsa molestiae ex cumque! Sequi eius neque, quod voluptatum
        </About>
        <Button
          link="/blog"
          color="#32978e"
          textColor={"#32978E"}
          outline
          title={"Blog"}
        />
      </Footer>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  display: flex;
  flex: 1;
  flex-direction: column;
`;

const Header = styled.header`
  height: 40vh;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background-color: #32978e;
`;

const Avatar = styled.div`
  margin-bottom: -130px;
  background-clip: content-box;
  img {
    border-radius: 50%;
  }
`;

const Name = styled.div`
  color: #f0f2f5;
  font-size: 2.5rem;
  font-weight: bold;
`;

const Position = styled.div`
  color: #cdced0;
  font-size: 1.3rem;
`;

const Footer = styled.footer`
  width: 100%;
  padding-top: 130px;
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 40px;
`;

const Icons = styled.div`
  display: flex;
  justify-content: space-around;
  width: 25%;
  @media(max-width: 1100px) {
    width: 50%;
  }

  @media(max-width: 700px) {
    width: 70%;
  }

  @media(max-width: 500px) {
    width: 100%;
  }
`;

const About = styled.div`
  font-size: 1.3rem;
  width: 40%;
  font-weight: 400;
  text-align: center;
  color: #161416;
  margin-top: 35px;
  margin-bottom: 50px;
  @media(max-width: 1100px) {
    width: 50%;
  }

  @media(max-width: 700px) {
    width: 70%;
  }

  @media(max-width: 500px) {
    width: 90%;
  }
`;

export default Home;

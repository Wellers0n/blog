import { NextPage } from "next";
import React from "react";
import styled from "styled-components";
import Card from "../../components/Card";
import { getAllPosts } from "../../lib/api";
import Head from "next/head";
import { FaArrowCircleLeft } from "react-icons/fa";
import Link from "next/link";

export async function getStaticProps() {
  const allPosts = getAllPosts([
    "title",
    "date",
    "slug",
    "author",
    "coverImage",
    "excerpt",
  ]);

  return {
    props: { allPosts },
  };
}

type Data = {
  title: string;
  coverImage: string;
  date: string;
  excerpt: string;
  author: string;
  slug: string;
};

interface Props {
  allPosts: Array<Data>;
}

const Blog: NextPage<Props> = ({ allPosts }) => {
  console.log(allPosts);
  return (
    <Container>
      <Head>
        <title>Blog</title>
      </Head>
      <Header>
        <BackButton>
          <Link as={"/"} href="/" passHref>
            <FaArrowCircleLeft color="#fff" size={35} />
          </Link>
        </BackButton>
        <Title>Posts</Title>
      </Header>
      <Card posts={allPosts} />
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background: #fff;
`;

const Header = styled.div`
  display: flex;
  position: relative;

  align-items: center;
  justify-content: center;
  width: 100%;
  height: 120px;
  background: #32978e;
`;

const Title = styled.h1`
  text-align: center;
  color: #fff;
  font-weight: bold;
`;

const BackButton = styled.div`
  position: absolute;
  left: 0;
  margin-left: 40px;
  cursor: pointer;
`;

export default Blog;

import { useRouter } from "next/router";
import ErrorPage from "next/error";
import Head from "next/head";
import styled from "styled-components";
import { getPostBySlug, getAllPosts } from "../../lib/api";

// Components
import PostHeader from "../../components/PostHeader";
import PostBody from "../../components/PostBody";
import Link from "next/link";
import { FaArrowCircleLeft } from "react-icons/fa";

export async function getStaticProps({ params }: any) {
  const post = getPostBySlug(params.slug, [
    "title",
    "date",
    "slug",
    "excerpt",
    "author",
    "content",
    "ogImage",
    "coverImage",
  ]);

  return {
    props: {
      post: {
        ...post,
        content: post.content,
      },
    },
  };
}

export async function getStaticPaths() {
  const posts = getAllPosts(["slug"]);

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      };
    }),
    fallback: false,
  };
}

export default function Post({ post, morePosts, preview }: any) {
  const router = useRouter();
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <Container>
      {router.isFallback ? (
        <div>Loading…</div>
      ) : (
        <>
          <Head>
            {/* Open Graph */}
            <meta charSet="utf-8" />
            <meta
              name="viewport"
              content="width=device-width,minimum-scale=1,initial-scale=1,maximum-scale=1"
            />
            <meta
              property="og:url"
              content={`https://wellerson.dev${router.asPath}`}
            />
            <meta name="author" content="Wellerson" />
            <meta
              name="robots"
              content="index,follow,max-image-preview:large"
            />
            <meta property="og:type" content="article" />
            <meta data-rh="true" name="referrer" content="unsafe-url" />
            <meta property="article:published_time" content={post.date} />
            <meta
              property="og:image"
              content={`https://wellerson.dev${post.coverImage}`}
            />
            <meta property="og:site_name" content={"wellerson.dev"} />
            <meta property="og:title" content={post.title} />
            <meta property="og:description" content={post.excerpt} />

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={post.title} />
            <meta name="twitter:description" content={post.excerpt} />
            <meta name="twitter:creator" content={"@wellers0n"} />
          </Head>
          <Header>
            <BackButton>
              <Link as={"/posts"} href="/posts" passHref>
                <FaArrowCircleLeft color="#fff" size={35} />
              </Link>
            </BackButton>
          </Header>
          <Article>
            <Head>
              <title>{post.title}</title>
            </Head>

            <PostHeader
              title={post.title}
              coverImage={post.coverImage}
              date={post.date}
              author={post.author}
            />
            <PostBody content={post.content} />
          </Article>
        </>
      )}
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: auto;
`;

const Article = styled.article`
  margin: auto;
  padding: 20px 500px;

  @media (max-width: 2000px) {
    padding: 20px 250px;
  }

  @media (max-width: 1700px) {
    padding: 20px 200px;
  }

  @media (max-width: 1400px) {
    padding: 20px 100px;
  }

  @media (max-width: 1200px) {
    margin: auto;
    padding: 20px 50px;
  }

  @media (max-width: 800px) {
    margin: none;
    padding: 20px 50px;
  }

  @media (max-width: 540px) {
    margin: none;
    padding: 20px 30px;
  }

  @media (max-width: 360px) {
    margin: none;
    padding: 20px 20px;
  }
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

const BackButton = styled.div`
  position: absolute;
  left: 0;
  margin-left: 40px;
  cursor: pointer;
`;

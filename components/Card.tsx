import styled from "styled-components";
import PostPreview from "./PostPreview";

type Data = {
  title: string;
  coverImage: string;
  date: string;
  excerpt: string;
  author: string;
  slug: string;
};

interface Props {
  posts: Array<Data>;
}

export default function MoreStories({ posts }: Props) {
  return (
    <Container>
      {posts.map((post) => (
        <PostPreview
          key={post.slug}
          title={post.title}
          coverImage={post.coverImage}
          date={post.date}
          slug={post.slug}
          excerpt={post.excerpt}
        />
      ))}
    </Container>
  );
}

const Container = styled.section`
  padding: 20px;
  display: grid;

  @media (max-width: 2600px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }

  @media (max-width: 1600px) {
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media (max-width: 1100px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 700px) {
    grid-template-columns: 1fr;
  }
`;

import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";

interface Props {
  title: string;
  src: string;
  slug: string;
  height: number;
  width: number;
}

export default function CoverImage({ title, src, slug, height, width }: Props) {
  const image = (
    <Image
      src={src}
      alt={`Cover Image for ${title}`}
      layout="responsive"
      width={width}
      height={height}
    />
  );
  return (
    <Container>
      {slug ? (
        <Link as={`/posts/${slug}`} href="/posts/[slug]" passHref>
          <Title aria-label={title}>{image}</Title>
        </Link>
      ) : (
        image
      )}
    </Container>
  );
}

const Container = styled.div`
  img {
    cursor: pointer;
    border-radius: 10px;
  }
`;

const Title = styled.h1`
  color: #161416;
`;

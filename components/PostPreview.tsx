// import Avatar from "../components/avatar";
import DateFormatter from "./DateFormatter";
import CoverImage from "./CoverImage";
import Link from "next/link";
import styled from "styled-components";

interface Props {
  title: string;
  coverImage: string;
  date: string;
  excerpt: string;
  slug: string;
}

export default function PostPreview({
  title,
  coverImage,
  date,
  excerpt,
  slug,
}: Props) {
  return (
    <Container>
      <div>
        <CoverImage
          slug={slug}
          title={title}
          src={coverImage}
          height={278}
          width={556}
        />
      </div>
      <Title>
        <Link as={`/posts/${slug}`} href="/posts/[slug]">
          <a>{title}</a>
        </Link>
      </Title>
      <Date>
        <DateFormatter dateString={date} />
      </Date>
      <Excerpt>{excerpt}</Excerpt>
    </Container>
  );
}

const Container = styled.div`
  margin: 20px;
`;

const Title = styled.h1`
  font-weight: bold;
`;

const Excerpt = styled.p`
  color: #4e4e4e;
`;

const Date = styled.div`
  color: #4e4e4e;
`;

import Avatar from "../components/Avatar";
import DateFormatter from "../components/DateFormatter";
import CoverImage from "../components/CoverImage";
import styled from "styled-components";

interface Props {
  title: string;
  coverImage: string;
  date: string;
  author: {
    name: string;
    picture: string;
  };
}

export default function PostHeader({ title, coverImage, date, author }: Props) {
  return (
    <>
      <PostTitle>{title}</PostTitle>
      <ContainerAvatar>
        <Avatar name={author.name} picture={author.picture} />
      </ContainerAvatar>
      <CoverImage title={title} src={coverImage} height={620} width={1240} />
      <ContainerDate>
        <DateFormatter dateString={date} />
      </ContainerDate>
    </>
  );
}

const PostTitle = styled.h1`
  font-size: 3rem;
  font-weight: bold;
`;

const ContainerDate = styled.div`
  margin-top: 30px;

  @media (min-width: 1400px) {
    padding-left: 150px;
  }
`;

const ContainerAvatar = styled.div`
  margin: 50px 0;
`;

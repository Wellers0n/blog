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
      <div className="hidden md:block md:mb-12">
        <Avatar name={author.name} picture={author.picture} />
      </div>
      <div className="mb-8 md:mb-16 sm:mx-0">
        <CoverImage title={title} src={coverImage} height={620} width={1240} />
      </div>
      <div className="max-w-2xl mx-auto">
        <div className="mb-6 text-lg">
          <DateFormatter dateString={date} />
        </div>
      </div>
    </>
  );
}

const PostTitle = styled.h1``;

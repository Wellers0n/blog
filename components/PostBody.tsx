import styled from "styled-components";
import Markdown from "./Markdowm";

interface Props {
  content: string;
}

export default function PostBody({ content }: Props) {
  return (
    <Container>
      <Markdown value={content} />
    </Container>
  );
}

const Container = styled.div`
font-size: 1.15rem;
  @media (min-width: 1200px) {
    padding: 20px 200px;
  }
`;

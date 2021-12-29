import styled from "styled-components";
import CodeBlock from "./CodeBlock";
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
  @media (min-width: 1400px) {
    padding: 20px 150px;
  }
`;

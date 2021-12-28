import CodeBlock from "./CodeBlock";
import Markdown from "./Markdowm";

interface Props {
  content: string;
}

export default function PostBody({ content }: Props) {
  return <Markdown value={content} />;
}

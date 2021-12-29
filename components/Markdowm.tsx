import ReactMarkdown from "react-markdown";
import CodeBlock from "./CodeBlock";

interface Props {
  value: string;
}

export default function Markdown({ value }: Props) {
  return <ReactMarkdown components={CodeBlock}>{value}</ReactMarkdown>;
}

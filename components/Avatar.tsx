import Image from "next/image";
import styled from "styled-components";

interface Props {
  name: string;
  picture: string;
}

export default function Avatar({ name, picture }: Props) {
  return (
    <Container>
      <Image src={picture} alt={name} height={62} width={62} />
      <Name>{name}</Name>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  img {
    border-radius: 50%;
  }
`;

const Name = styled.div`
  margin-left: 10px;
  font-weight: bold;
  font-size: 1.5rem;
`;

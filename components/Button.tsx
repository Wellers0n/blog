import { NextPage } from "next";
import React, { ButtonHTMLAttributes } from "react";
import styled from "styled-components";
import Link from "next/link";

interface Props {
  title: string;
  color: string;
  textColor: string;
  link: string;
  outline?: boolean;
}

const Button: NextPage<Props> = ({
  title,
  outline,
  color,
  link,
  textColor,
  ...rest
}) => {
  return (
    <Link href={link} passHref>
      <Container
        {...rest}
        outline={outline}
        textColor={textColor}
        color={color}
      >
        {title}
      </Container>
    </Link>
  );
};

type ContainerStyledProps = {
  outline?: boolean;
  textColor: string;
  color: string;
};
const Container = styled.button<ContainerStyledProps>`
  background-color: ${({ outline, color }) =>
    outline ? "transparent" : color};
  border: ${({ color }) => `1px solid ${color}`};
  border-radius: 5px;
  color: ${({ textColor }) => `${textColor}`};
  padding: 15px 5rem;
  font-size: 1rem;
  margin-bottom: 30px;
`;

export default Button;

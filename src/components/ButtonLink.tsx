import { Link, LinkProps } from '@chakra-ui/react';

interface ButtonLinkProps extends LinkProps {
  text: string;
}

export default function ButtonLink({ text }: ButtonLinkProps) {
  return (
    <Link
      maxW="50%"
      bg="#D12128"
      color="#FFF"
      fontSize="1rem"
      p="0.5rem 1rem"
      textAlign="center"
      borderRadius={4}
    >
      {text}
    </Link>
  );
}


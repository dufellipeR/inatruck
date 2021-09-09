import { useRouter } from 'next/router';
import { Link, LinkProps } from '@chakra-ui/react';

interface ActiveLinkProps extends LinkProps {
  label: string;
}

export function ActiveLink({ label, ...rest }: ActiveLinkProps) {
  const { asPath } = useRouter();

  const selected = asPath === rest.href 
    ? true 
    : false;

  return (
    <Link
      fontWeight="400"
      fontSize={14}
      p="0 0.5rem"
      h="5rem"
      lineHeight="5rem"
      color={selected ? 'red' : '#FFF'}
      ml="2rem"
      {...rest}
    >
      {label}
    </Link>
  )
}
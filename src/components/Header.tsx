import { 
  Box,
  Flex, 
  Image, 
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
  Link,
  useBreakpointValue,
} from '@chakra-ui/react';
import { FiMenu } from 'react-icons/fi';

import { ActiveLink } from './ActiveLink';

export default function Header() {
  const isHamburgerMenu = useBreakpointValue({
    null: true,
    "2sm": true,
    sm: true,
    lg: false,
  });

  return (
    <Box as="header" h="5rem" bg="#010001">
      {isHamburgerMenu ? (
        <Flex justify="space-between">
          <Link
            href="/"
            m="auto 1rem"
            maxWidth="4rem"
          >
            <Image 
              src="/ik-logo.png" 
              alt="logo-escrito" 
              borderRadius="0.5rem"
              boxShadow="1px 1px 1px 1px #fff"
            />
          </Link>
          <Menu>
            <MenuButton
              as={IconButton}
              aria-label="Options"
              icon={<FiMenu />}
              m="1rem"
            />
            <MenuList>
              <MenuItem>
                <Link href="/company">A EMPRESA</Link>
              </MenuItem>
              <MenuItem>
                <Link href="/services">SERVIÇOS</Link>
              </MenuItem>
              <MenuItem>
                <Link href="/products">LINHA DE PRODUTOS</Link>
              </MenuItem>
              <MenuItem>
                <Link href="/contact">CONTATO</Link>
              </MenuItem>
            </MenuList>
          </Menu>
        </Flex>
      ) : (
        <Flex
          maxW={1120}
          h="5rem"
          m="0 auto"
          p="0 2rem"
          align="center"
        >
           <Link
            href="/"
            m="auto 1rem"
            maxWidth="15rem"
          >
            <Image 
              src="/images/inatruck-logo.png" 
              alt="logo-escrito" 
              borderRadius="0.5rem"
              boxShadow="1px 1px 1px 1px #fff"
            />
          </Link>

          <Flex
            as="nav"
            w="100%"
            ml="5rem"
            h="5rem"
            justify="space-between"
          >
            <ActiveLink href="/company" label="A EMPRESA" />
            <ActiveLink href="/services" label="SERVIÇOS" />
            <ActiveLink href="/products" label="LINHA DE PRODUTOS" />
            <ActiveLink href="/contact" label="CONTATO" />
          </Flex>
          <hr/>
        </Flex>
      )}
    </Box>
  );
}
import { useState, useEffect } from 'react';

import { Box, Flex, List, ListItem, Text, Link } from '@chakra-ui/react';

import Image from 'next/image';

interface FooterData {
  phone: string;
  email: string;
  address: string;
  linkCatalog: string;
}

export default function Footer() {
  const [footerData, setFooterData] = useState<FooterData>({} as FooterData);

  useEffect(() => {
    const inatruckData = localStorage.getItem('paramInatruck');
    
    if (inatruckData) {
      setFooterData(JSON.parse(inatruckData));
    }
  }, []);

  return (
    <Box 
      bg="#D02129"
      color="#FFF"
      p="0 2rem"
    >
      <Box 
        maxW={1120} 
        m="0 auto" 
        pt="2rem"
      >
        <Flex 
          justify="space-between" 
          align="center" 
          direction={{ sm: 'column', lg: 'row' }}
        >
          
          <Flex direction="column" gridGap="0.5rem" >
            <Flex direction="column" display="block" > 
              <Image src="/images/logo-escrito.png" alt="logo-escrito" width={200} height={50} />
            </Flex>
            <Text>INATRUCK IND. COM. DE AUTOPEÇAS EIRELI EPP</Text>
            <Text>{footerData.address}</Text>
          </Flex>
          <Flex gridGap="3rem" display={{ sm: 'none', lg: 'flex' }}>
            <Box>
              <Text>Inatruck</Text>
              <List spacing="0.5rem" mt="2rem">
                <ListItem>
                  <Link href="/">
                    Home
                  </Link>
                </ListItem>
                <ListItem>
                  <Link href="/contact">
                    Fale Conosco
                  </Link>
                </ListItem>
              </List>
            </Box>
            <Box>
              <Text>Serviços</Text>
              <List spacing="0.5rem" mt="2rem">
                <ListItem>
                  <Link href="/services">
                    Projetos Customizados
                  </Link>
                </ListItem>
                <ListItem>
                  <Link href="/services">
                    Rede Logística
                  </Link>
                </ListItem>
                <ListItem>
                  <Link href="/services">
                    Compra e Venda
                  </Link>
                </ListItem>
              </List>
            </Box>
            <Box>
              <Text>Produtos</Text>
              <List spacing="0.5rem" mt="2rem">
                <ListItem>
                  <Link href="/products">
                    Linha de Produto
                  </Link>
                </ListItem>
                <ListItem>
                  <Link href={`${footerData.linkCatalog}`} target="_blank">
                    Catálogo Virtual
                  </Link>
                </ListItem>
              </List>
            </Box>
          </Flex>
        </Flex>
        <Flex borderTop="1px solid #FFF" mt="3rem" justify="space-between" align="center">
          <Box m="2rem 0">
            <Image src="/images/dudu-logo.png" alt="Dudu Logo" width={30} height={30} />
            <Image src="/images/rocket-logo.png" alt="Rocket Logo" width={100} height={40} />
          </Box>
          <Box m="1rem 0" textAlign="center" lineHeight="1.5">

            { /* Numero e email do CMS  */}
            <Text fontSize="24px">{footerData.phone}</Text>
            <Text>{footerData.email}</Text>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
}
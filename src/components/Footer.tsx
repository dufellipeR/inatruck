import { Box, Flex, List, ListItem, Text } from '@chakra-ui/react';

import Image from 'next/image';

export default function Footer() {
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
            <Text>Rua Blumenau, Número 4920, Bairro Araponguinhas - Timbó - Santa Catarina </Text>
          </Flex>
          <Flex gridGap="3rem" display={{ sm: 'none', lg: 'flex' }}>
            <Box>
              <Text>Inatruck</Text>
              <List spacing="0.5rem" mt="2rem">
                <ListItem>Home</ListItem>
                <ListItem>Fale Conosco</ListItem>
              </List>
            </Box>
            <Box>
              <Text>Serviços</Text>
              <List spacing="0.5rem" mt="2rem">
                <ListItem>Projetos Customizados</ListItem>
                <ListItem>Rede Logística</ListItem>
                <ListItem>Compra e Venda</ListItem>
              </List>
            </Box>
            <Box>
              <Text>Produtos</Text>
              <List spacing="0.5rem" mt="2rem">
                <ListItem>Linha de Produto</ListItem>
                <ListItem>Catálogo Virtual</ListItem>
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
            <Text fontSize="24px" >(47) 3382-4161</Text>
            <Text>inatruck@hotmail.com</Text>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
}
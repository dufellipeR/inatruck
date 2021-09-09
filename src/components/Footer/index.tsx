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
          <Flex direction="column" gridGap="1rem" align="center" textAlign="center">

            <Image src="/images/logo-escrito.png" alt="logo-escrito" width={200} height={50} />
            <Text>INATRUCK IND. COM. DE AUTOPEÇAS EIRELI EPP</Text>
            <Text>Rua Blumenau, Número 4920, Bairro Araponguinhas - Timbó - Santa Catarina </Text>

          </Flex>
          <Flex gridGap="3rem" display={{ sm: 'none', lg: 'flex' }}>
            <Box>
              <Text>Inatruck</Text>
              <List spacing="1rem" mt="2rem">
                <ListItem>Home</ListItem>
                <ListItem>Fale Conosco</ListItem>
              </List>
            </Box>
            <Box>
              <Text>Serviços</Text>
              <List spacing="1rem" mt="2rem">
                <ListItem>Projetos Customizados</ListItem>
                <ListItem>Rede Logística</ListItem>
                <ListItem>Compra e Venda</ListItem>
              </List>
            </Box>
            <Box>
              <Text>Produtos</Text>
              <List spacing="1rem" mt="2rem">
                <ListItem>Linha de Produto</ListItem>
                <ListItem>Catálogo Virtual</ListItem>
              </List>
            </Box>
          </Flex>
        </Flex>
        <Flex borderTop="1px solid #FFF" mt="3rem" justify="space-between" align="center">
          <Box m="3rem 0">
            <Image src="/images/dudu-logo.png" alt="Dudu Logo" width={40} height={40} />
            <Image src="/images/rocket-logo.png" alt="Rocket Logo" width={170} height={50} />
          </Box>
          <Box m="3rem 0" textAlign="center" lineHeight="2">
            <Text>(47) 3382-4161</Text>
            <Text>inatruck@hotmail.com</Text>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
}
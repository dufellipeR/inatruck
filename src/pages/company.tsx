import { Flex, Box, Text, Divider, Grid, Image, Link } from '@chakra-ui/react';
import Head from 'next/head';

export default function Company() {
  return (
    <>
      <Head>
        <title>Inatruck | Empresa</title>
      </Head>

      <Box
        w="100%" 
        p="3rem 0"
        bg="#D02129" 
        mb="2rem"
      >
        <Grid 
          maxW={1120}
          h="100%"
          m="0 auto"
          p={{ sm: '2rem', lg: '0 2rem' }}
          templateColumns="1fr 1fr"
          justify={{ sm: 'center', lg: 'space-between' }}
          alignItems="center"
        > 
          <Flex direction="column" align="flex-end" gridGap="0.5rem">
            <Text fontSize="2rem" color="#FFF">Sobre a Inatruck</Text>
            <Divider 
              w="80%" 
              border="none"
              h="4px"
              bg="#FFF"
              borderRadius={4}
              opacity={1}
            />
            <Text fontSize="1rem" color="#FFF">A empresa</Text>
          </Flex>

          <Box 
            borderBottomWidth={4}
            borderBottomColor="#000"
            borderBottomStyle="solid"
            borderRadius={4}
            pt="6rem"
            w="80%"
            ml="auto"
          />

        </Grid>
      </Box>
    
      <Box     
        w="100%" 
        p="3rem 0"
        mb="2rem"
      >
        <Flex
          maxW={1120}
          h="100%"
          m="0 auto"
          justify={{ sm: 'center', lg: 'space-between' }}
          align="center"
          textAlign={{ sm: 'center', lg: 'start' }}
          p={{ sm: '0 2rem', lg: '0' }}
        >
          <Box w={{ sm: '100%', lg: '60%' }}>
            <Text fontSize="2rem">Ônibus e Caminhões</Text>
            <Text fontSize="1rem">
              Desde a fundação da empresa em 2006, 
              a Inatruck aposta no desenvolvimento 
              constante do seu sortimento de peças 
              de reposição para ônibus e caminhões 
              grandes, médios e pequenos. Com 
              aproximadamente 600 itens de reposição, 
              oferecem hoje ao amigo cliente uma variedade
              muito ampla para a linha de suspensão 
              de ônibus e caminhões de cargas dos 
              fabricantes líderes de mercado no Brasil.
            </Text>
          </Box>

          <Image 
            src="/images/a-empresa.png" 
            alt="materiais" 
            display={{ sm: 'none', lg: 'block' }}
          />
        </Flex>
      
        <Grid templateColumns="0.3fr 1fr 1fr" mt="10rem">
          <Box />

          <Flex direction="column" justify="space-between" maxW="80%">
            <Box>
              <Text fontSize="2rem">Linhas Premium</Text>
              <Text fontSize="1rem">
                As peças de reposição da Inatruck convencem
                devido à sua excelente relação custo-benefício
                e disponibilidade constante assegurada pela 
                logística eficiente. Apostando todo seu esforço
                específico na Linha Pino de Mola e na Linha 3º Eixo
                , trabalham para satisfazer as verdadeiras necessidades
                dos clientes. 
              </Text>
            </Box>
            <Link
              fontSize="1rem"
              bg="#D12128"
              color="#FFF"
              p="0.5rem 1rem"
              textAlign="center"
              maxW="50%"
            >
              Conheça
            </Link>
            <Text>
              Em se tratando de peças de reposição para caminhões e ônibus, 
              não tenha dúvida, temos um ótimo custo/benefício. Confira!
            </Text>
          </Flex>

          <Flex 
            bg="#D02129" 
            borderRadius={4} 
            direction="column" 
            p="2rem" 
            color="#FFF" 
            gridGap="2rem"
          >
            <Box>
              <Text fontSize="2rem">Missão</Text>
              <Text fontSize="1rem">
                Fabricar toda linha de suspenção e implementos rodoviários
                das marcas presentes no Brasil e garantir  o constante aprimoramento
                dos produtos e serviços.
              </Text>
            </Box>

            <Box>
              <Text fontSize="2rem">Visão</Text>
              <Text fontSize="1rem">
                Sempre se manter atualizado nas mudanças de necessidade do consumidor
                e acompanhar as novidades do mercado no ramo de atuação.
              </Text>
            </Box>

            <Box>
              <Text fontSize="2rem">Valores</Text>
              <Text fontSize="1rem">Segurança</Text>
              <Text fontSize="1rem">Agilidade</Text>
              <Text fontSize="1rem">Qualidade</Text>
            </Box>
          </Flex>
        </Grid>
      </Box>
    </>
  )
}
import Head from 'next/head';
import { Flex, Box, Text, Divider, Grid, Image, Link, useBreakpointValue } from '@chakra-ui/react';
import HeaderContent from '../components/HeaderContent';
import { useState } from 'react';
import Lottie from 'react-lottie';

import logisticaAnimation from '../../public/logistica.json'
import exchangeAm from '../../public/exchange.json'
import customizedAm from '../../public/customized.json'

export default function Services() {
  const [animationState, setAnimationState] = useState({
    isStopped: false, isPaused: false
  })

  return (
    <>
      <Head>
        <title>Inatruck | Empresa</title>
      </Head>

      <HeaderContent
        title="Serviços"
      />

      <Box
        w="100%"
        p={{ sm: '0', lg: '1rem 0 5rem 0' }}
      >
        { /* Service Box */}
        <Box w="100%"
          p={{ sm: '0', lg: '3rem 0 5rem 0' }}
        >
          <Flex
            maxW={1120}
            direction="column"
            h="100%"
            m="0 auto"
            textAlign="center"
            p={{ sm: '2rem', lg: '0' }}
          >
            <Text fontSize="2rem" marginBottom="4rem">Rede Logística</Text>
            <Flex
              maxW={1120}
              h="100%"
              m="0 auto"
              justify={{ sm: 'center', lg: 'space-between' }}
              align="center"
              textAlign={{ sm: 'center', lg: 'start' }}
              p={{ sm: '0 2rem', lg: '0' }}
            >
              <Box display={{ sm: 'none', lg: 'block' }}>
                <Lottie 
                  options={{
                    loop: true,
                    autoplay: true,
                    animationData: logisticaAnimation,
                    rendererSettings: {
                      preserveAspectRatio: 'xMidYMid slice'
                    }
                  }}
                  height={300}
                  width={400}
                  isStopped={animationState.isStopped}
                  isPaused={animationState.isPaused}
                />
              </Box>

              <Box w={{ sm: '100%', lg: '60%' }}>
                <Text fontSize="1rem">
                  A entrega do material adquirido (acima de R$ 1.500,00)
                  é realizada por uma transportadora contratada pela Inatruck
                  com toda segurança e agilidade.
                  Atualmente, os estados que possuem distribuição direta,
                  paga pela Inatruck, são: Rio Grande do Sul, Santa Catarina,
                  Paraná e São Paulo. Para os demais estados é necessário fazer o
                  redespacho da carga. Assim é imprescindível que o comprador
                  providencie o transporte para o trajeto restante.
                  O prazo médio de entrega fica em 15 dias para
                  a Região Sul e São Paulo e para as demais regiões de acordo com o
                  prazo de entrega da transportadora de redespacho a ser contratada pelo cliente.
                </Text>
              </Box>
            </Flex>
          </Flex>
        </Box>

        { /* Service Box */}
        <Box w="100%"
          p={{ sm: '0', lg: '3rem 0 5rem 0' }}
          bgColor="#d02129"
          textColor="#fff"
        >
          <Flex
            maxW={1120}
            direction="column"
            h="100%"
            m="0 auto"
            textAlign="center"
            p={{ sm: '2rem', lg: '0' }}
          >
            <Text fontSize="2rem" marginBottom="4rem">Compra e Venda</Text>
            <Flex
              maxW={1120}
              h="100%"
              m="0 auto"
              justify={{ sm: 'center', lg: 'space-between' }}
              align="center"
              textAlign={{ sm: 'center', lg: 'start' }}
              p={{ sm: '0 2rem', lg: '0' }}
            >
              <Box display={{ sm: 'none', lg: 'block' }}>
                <Lottie 
                  options={{
                    loop: true,
                    autoplay: true,
                    animationData: exchangeAm,
                    rendererSettings: {
                      preserveAspectRatio: 'xMidYMid slice'
                    }
                  }}
                  height={300}
                  width={300}
                  isStopped={animationState.isStopped}
                  isPaused={animationState.isPaused}
                />
              </Box>

              <Box w={{ sm: '100%', lg: '60%' }}>
                <Text fontSize="1rem">
                  Além dos representantes, a venda direto de fábrica é um meio
                  eficiente de adquirir o produto com preço mais em conta, portanto
                  é também a forma mais aconselhada. Para efetuar o pagamento das peças
                  adquiridas solicite o número da conta e agência via e-mail ou
                  telefone (para clientes cadastrados).
                  Faça o depósito e envie o comprovante para o e-mail inatruck@hotmail.com.
                  Ou então solicite o envio do boleto de cobrança pelo e-mail inatruck@hotmail.com.
                </Text>
              </Box>
            </Flex>
          </Flex>
        </Box>

        { /* Service Box */}
        <Box w="100%"
          p={{ sm: '0', lg: '3rem 0 5rem 0' }}
        >
          <Flex
            maxW={1120}
            direction="column"
            h="100%"
            m="0 auto"
            textAlign="center"
            p={{ sm: '2rem', lg: '0' }}
          >
            <Text fontSize="2rem" marginBottom="4rem">Projetos Customizados</Text>
            <Flex
              maxW={1120}
              h="100%"
              m="0 auto"
              justify={{ sm: 'center', lg: 'space-between' }}
              align="center"
              textAlign={{ sm: 'center', lg: 'start' }}
              p={{ sm: '0 2rem', lg: '0' }}
            >
              <Flex 
                align="center"
                justify="center"
                display={{ sm: 'none', lg: 'flex' }}
              >
                <Image 
                  src="/images/ISU.png" 
                  alt="ISU" 
                  display={{ sm: 'none', lg: 'block' }}
                  w="15rem"
                />
                <Image 
                  src="/images/ISA.1017.png" 
                  alt="ISA.1017" 
                  display={{ sm: 'none', lg: 'block' }}
                  w="15rem"
                />
              </Flex>

              <Box w={{ sm: '100%', lg: '60%' }}>
                <Text fontSize="1rem">
                  A Inatruck produz peças de acordo com as necessidades individuais dos clientes.
                  Com base nisso, elaboramos projetos que atendam as necessidades específicas de cada um,
                  desde adaptações em peças já existentes ou o desenvolvimento de novos modelos.
                  Sejam peças únicas ou em grande escala, contamos com todo aparato para cumprir sua meta.
                  Traga seu projeto ou idéia que faremos saí-la do papel.
                  A Inatruck está apta a colocar em produção qualquer tipo de peça de aço.
                  Temos atualmente capacidade para produção de qualquer tipo de adaptação para a linha de suspensão pesada.
                  Utilizando matéria prima de procedência, cuja qualidade pode ser atestada pela longevidade de
                  seus produtos, garante a segurança que o caminhoneiro precisa em suas jornadas.
                </Text>
              </Box>
            </Flex>
          </Flex>
        </Box>
      </Box>
    </>
  )
}
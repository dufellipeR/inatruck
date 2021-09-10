import { Box, Image, Flex, Text, Divider, Link } from '@chakra-ui/react';

import { GetStaticProps } from 'next';
import Head from 'next/head';
import Prismic from '@prismicio/client';

import { getPrismicClient } from '../services/prismic';

import ButtonLink from '../components/ButtonLink';
import Carousel from '../components/Carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

type Image = {
  uid: string;
  url: string;
}

interface ImagesProps {
  images: Image[];
}

export default function Home({ images }: ImagesProps) {
  return (
    <>
      <Head>
        <title>Inatruck</title>
      </Head>
        
      <Carousel images={images} />

      <Box as="main">
        <Box boxShadow="2px 2px 2px 1px rgba(0, 0, 0, 0.2)">
          <Flex 
            maxW={1120}
            m="5rem auto"
            p={{ sm: '2rem', lg: '0 2rem' }}
            justify={{ sm: 'center', lg: 'space-between' }}
            align="center"
          >
            <Flex
              w={{ sm: '60%', lg: '35%' }}
              direction="column"
              align="left"
              gridGap="1rem"
            >
              <Text fontSize="2rem"> CATÁLOGO VIRTUAL</Text>
              <Divider w="70%" ml="-5rem" />
              <Text fontSize="1rem"> Acesse nosso catalogo virtual e fique por dentro dos lançamentos anuais</Text>
              <ButtonLink text="Acesse" />
            </Flex>

            <Image 
              src='/images/banner-catalog.png' 
              alt="banner-catalog" 
              w={400}
              height={600}
              mb="-2rem"
              display={{ sm: 'none', lg: 'block' }}
            />
          </Flex>
        </Box>

        <Flex
         maxW={1120}
         m="5rem auto"
         p="0 2rem"
         justify={{ sm: 'center', lg: 'space-between' }}
         align="center"
        > 
          <Flex
            w={{ sm: '60%', lg: '35%' }}
            direction="column"
            align="left"
            gridGap="1rem"
          >
            <Text fontSize="2rem"> Quem somos</Text>
            <Divider w="70%" ml="-5rem" />
            <Text fontSize="1rem"> Desde a fundação da empresa em 2006, a Inatruck aposta no desenvolvimento constante do seu sortimento de peças de reposição para ônibus e caminhões grandes, médios e pequenos. Com aproximadamente 600 itens de reposição, oferecem hoje ao amigo cliente uma variedade muito ampla para a linha de suspensão de ônibus e caminhões de cargas dos fabricantes líderes de mercado no Brasil.</Text>
            <Flex 
              justify="left"
              align="center"
              gridGap="1rem"
            >
              <ButtonLink text="Saiba Mais" />
              <ButtonLink text="Fale Conosco" />
            </Flex>
          </Flex>
          
          <Image 
            src='/images/ik-logo.png' 
            alt="ik-logo"
            w={200}
            h={200} 
            display={{ sm: 'none', lg: 'block' }}
          />
        </Flex>
      </Box>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient();

  const response = await prismic.query([
    Prismic.predicates.at('document.type', 'ban')
  ], {
    fetch: ['ban.title', 'ban.image'],
    pageSize: 100,
  })

  const images = response.results.map(image => {
    return {
      uid: image.uid,
      url: image.data.image.url,
    }
  })

  return {
    props: {
      images
    }
  }
}
import { Box, Image, Flex, Text, Divider, Link } from '@chakra-ui/react';

// import { useEffect } from 'react';
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

type ParamFooter = {
  phone: string;
  email: string;
  address: string;
}

type Catalog = {
  image: string;
  link: string;
}

interface HomeProps {
  images: Image[];
  footer: ParamFooter;
  catalog: Catalog;
}

export default function Home({ images, footer, catalog }: HomeProps) {

  // useEffect(() => {
  //   localStorage.setItem('paramInatruck', JSON.stringify(footer));
  // }, [footer]);

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
              <ButtonLink text="Acesse" href={`${catalog.link}`} target="_blank" />
            </Flex>

            <Link href={`${catalog.link}`} target="_blank">
              <Image 
                src={catalog.image}
                alt="banner-catalog" 
                w={400}
                height={600}
                mb="-2rem"
                display={{ sm: 'none', lg: 'block' }}
              />
            </Link>
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
              <ButtonLink text="Saiba Mais" href="/company" />
              <ButtonLink text="Fale Conosco" href="/contact" />
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

  const responseBanner = await prismic.query([
    Prismic.predicates.at('document.type', 'ban')
  ], {
    fetch: ['ban.title', 'ban.image'],
    pageSize: 100,
  })

  const responseFooter = await prismic.query([
    Prismic.predicates.at('document.type', 'parametros_gerais')
  ], {
    fetch: ['parametros_gerais.telefone', 'parametros_gerais.email', 'parametros_gerais.endereco'],
    pageSize: 100,
  });

  const responseCatalog = await prismic.query([
    Prismic.predicates.at('document.type', 'ca')
  ], {
    fetch: ['ca.imagem', 'ca.link'],
    pageSize: 100,
  });

  const images = responseBanner.results.map(image => {
    return {
      uid: image.uid,
      url: image.data.image.url,
    }
  })

  const footer = {
    phone: responseFooter.results[0].data.telefone[0].text,
    email: responseFooter.results[0].data.email[0].text,
    address: responseFooter.results[0].data.endereco[0].text,
  };

  const catalog = {
    image: responseCatalog.results[0].data.imagem.url,
    link: responseCatalog.results[0].data.link.url
  }

  return {
    props: {
      images,
      footer,
      catalog
    },
  }
}
import { GetStaticProps } from 'next';
import Head from 'next/head';

import { getPrismicClient } from '../services/prismic';
import Prismic from '@prismicio/client';

import styles from './home.module.scss';

type Image = {
  uid: string;
  url: string;
}

interface ImagesProps {
  images: Image[];
}

export default function Home({ images }: ImagesProps) {
  console.log('front-images: ', images);

  return (
    <>
      <Head>
        <title>Inatruck</title>
      </Head>

      <div className={styles.containerBanner}>
        {images.map(image => {
          return (
            <img key={image.uid} src={`${image.url}`} alt={`${image.uid}`} />
          )
        })}
      </div>

      <div className={styles.containerCatalogo}> 
        <h3> CATÁLOGO VIRTUAL</h3>
        <hr/>
        <p> Acesse nosso catalogo virtual e fique por dentro dos lançamentos anuais</p>

        {/* imagem catalogo inatruck. Figma Model , pego pelo CMS */}
        {/* <img src="" alt=""/> */}

        <a> Acesse </a>
      </div>

      <div className={styles.containerQuemsomos}> 
        <h3> Quem somos</h3>
        <hr/>
        <p> Desde a fundação da empresa em 2006, a Inatruck aposta no desenvolvimento constante do seu sortimento de peças de reposição para ônibus e caminhões grandes, médios e pequenos. Com aproximadamente 600 itens de reposição, oferecem hoje ao amigo cliente uma variedade muito ampla para a linha de suspensão de ônibus e caminhões de cargas dos fabricantes líderes de mercado no Brasil.</p>
        
        {/* logo  inatruck IK  grande. Figma Model */}
        {/* <img src="" alt=""/> */}
        
        <a> SAIBA MAIS </a>
        <a> FALE CONOSCO </a>
      </div>

      <div className={styles.footer}>
        {/* imagem preta inatruck escrito. Figma Model */}
        {/* <img src="" alt=""/> */}

        <span>(47) 3382-4161</span>
        <span>Rua Blumenau, Número 4920, Bairro Araponguinhas - Timbó - Santa Catarina </span>
        <hr/>
        <ul>
          <li>Home</li>
          <li>Fale Conosco</li>
          <li>Catálogo Virtual</li>
        </ul>

        <ul>
          <li>Projetos Customizados</li>
          <li>Rede Logística</li>
          <li>Catálogo Virtual</li>
        </ul>

      </div>



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
import { GetStaticProps } from 'next';
import Head from 'next/head';

import { getPrismicClient } from '../services/prismic';
import Prismic from '@prismicio/client';

import BannerCatalog from '../../public/images/banner-catalog.png';

import styles from './home.module.scss';

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

      <div className={styles.containerBanner}>
        {images.map(image => {
          return (
            <img key={image.uid} src={`${image.url}`} alt={`${image.uid}`} />
          )
        })}
      </div>

      <main>
        <div className={styles.containerCatalog}>
          <div className={styles.contentCatalog}>
            <section>
              <h3> CATÁLOGO VIRTUAL</h3>
              <hr/>
              <p> Acesse nosso catalogo virtual e fique por dentro dos lançamentos anuais</p>
              <a> Acesse </a>
            </section>

            <img 
              src='/images/banner-catalog.png' 
              alt="banner-catalog" 
              style={{
                width: 400,
                height: 600,
              }} 
            />
          </div>
        </div>

        <div className={styles.containerAbout}> 
          <section>
            <h3> Quem somos</h3>
            <hr/>
            <p> Desde a fundação da empresa em 2006, a Inatruck aposta no desenvolvimento constante do seu sortimento de peças de reposição para ônibus e caminhões grandes, médios e pequenos. Com aproximadamente 600 itens de reposição, oferecem hoje ao amigo cliente uma variedade muito ampla para a linha de suspensão de ônibus e caminhões de cargas dos fabricantes líderes de mercado no Brasil.</p>
            <div id="container-buttons">
              <a> SAIBA MAIS </a>
              <a> FALE CONOSCO </a>
            </div>
          </section>
          
          <img 
            src='/images/ik-logo.png' 
            alt="ik-logo" 
            style={{
              width: 200,
              height: 200,
            }} 
          />


        </div>

        <div className={styles.containerFooter}>
          <div className={styles.contentFooter}>
            <img 
                src='/images/logo-escrito.png' 
                alt="logo-escrito" 
                style={{
                  width: 200,
                  height: 50,
                }} 
              />

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
        </div>
      </main>

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
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
        <title>Home | Inatruck</title>
      </Head>

      <div className={styles.containerBanner}>
        {images.map(image => {
          return (
            <img key={image.uid} src={`${image.url}`} alt={`${image.uid}`} />
          )
        })}
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
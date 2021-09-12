import { Box, Text, Link } from '@chakra-ui/react';

import { GetServerSideProps } from "next"
import Head from "next/head";
import { RichText } from "prismic-dom";

import { getPrismicClient } from "../../services/prismic";

import styles from './post.module.css';

interface PostProps {
  post: {
    slug: string;
    title: string;
    content: string;
  }
}

export default function Post({ post }: PostProps) {
  return (
    <>
      <Head>
        <title>{post.title} | Ignews</title>
      </Head>

      <Box 
        maxW={1120}
        m="5rem auto"
        p="0 2rem"
      >
        <Box 
          maxW={720}
          m="0 auto"
        >
          <Text fontSize="3.5rem" fontWeight="bold">{post.title}</Text>
          <Box
            className={styles.content}
            mt="2rem"
            lineHeight="2rem"
            fontSize="1.125rem"
            color="gray.600"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </Box>
      </Box>
    </>
  )

}

export const getServerSideProps: GetServerSideProps = async ({ req, params }) => {
  const { slug } = params;

  const prismic = getPrismicClient(req);

  const response = await prismic.getByUID('linha_produtos', String(slug), {});

  const post = {
    slug,
    title: RichText.asText(response.data.title),
    content: RichText.asHtml(response.data.content),
  }

  return {
    props: {
      post,
    }
  }
}
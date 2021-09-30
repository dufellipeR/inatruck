import { Box, Text, Link } from '@chakra-ui/react';
import { GetStaticProps } from 'next';
import Head from 'next/head';

import { getPrismicClient } from '../../services/prismic';
import Prismic from '@prismicio/client';
import { RichText } from 'prismic-dom';

type Post = {
  slug: string;
  title: string;
  excerpt: string;
}

interface PostsProps {
  posts: Post[];
}

export default function Products({ posts }: PostsProps) {
  return (
    <>
      <Head>
        <title>Inatruck | Produtos</title>
      </Head>
      
      <Box
        bg="#010001"
        w="100%"
        minH="60vh"
      >
        <Box
          maxW={1120}
          m="0 auto"
          p="0 2rem"
        >
          <Box
            maxW={720}
            m="0 auto"
          >
            {posts.map(post => (
              <Link
                key={post.slug}
                display="block"
                borderBottomWidth="1px"
                borderBottomStyle="solid"
                borderBottomColor="gray.700"
                p="2rem 0"
                role="group"
                href={`/products/${post.slug}`}
              >
                <Text
                  fontSize="1.5rem"
                  display="block"
                  mt="1rem"
                  lineHeight="2rem"
                  color="gray.100"
                  _groupHover={{ color: '#D02129' }}
                >
                  {post.title}
                </Text>
                <Text
                  color="gray.300"
                  mt="0.5rem"
                  lineHeight="1.625rem"
                >
                  {post.excerpt}
                </Text>
              </Link>
            ))}
          </Box>
        </Box>
      </Box>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient();

  const response = await prismic.query([
    Prismic.predicates.at('document.type', 'linha_produtos')
  ], {
    fetch: ['publication.title', 'publication.content'],
    pageSize: 100,
  });

  const posts = response.results.map(post => {
    return {
      slug: post.uid,
      title: RichText.asText(post.data.title),
      excerpt: post.data.content.find(content => content.type === 'paragraph')?.text ?? '',
    }
  })

  return {
    props: {
      posts
    },
    revalidate: 300,
  }
}
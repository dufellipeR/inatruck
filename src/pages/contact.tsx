import { Flex, Box, Text, Stack, Image, Textarea } from '@chakra-ui/react';
import Head from 'next/head';

import Input from '../components/Input';
import ButtonLink from '../components/ButtonLink';
import HeaderContent from '../components/HeaderContent';

export default function Contact() {
  return (
    <>
      <Head>
        <title>Inatruck | Contato</title>
      </Head>
    
      <HeaderContent 
        title="Contato"
        description="Fale com a Inatruck"
      />

      <Box
        w="100%" 
        p={{ sm: '0', lg: '3rem 0 5rem 0' }}
      >
        <Flex
          direction="column"
          maxW={1120}
          h="100%"
          m="0 auto"
          textAlign="center"
        > 
          <Text>Entre em contato! Retornaremos sua mensagem o mais breve possível.</Text>

          <Flex
            mt={{ sm: '2rem', lg: '5rem' }}
            justify="space-between"
            align="center"
          >
            <Box w={{ sm: '100%', lg: '50%' }} p={{ sm: '2rem', lg: '0' }}>
              <Stack spacing="4">
                <Input name="name" type="text" placeholder="Nome*" />
                <Input name="company" type="text" placeholder="Empresa" />
                <Input name="tel" type="text" placeholder="Telefone*" />
                <Input name="email" type="email" placeholder="Email*" />
                <Input name="city" type="text" placeholder="Município" />
                <Input name="uf" type="text" placeholder="Estado" />
                <Input name="subject" type="text" placeholder="Assunto*" />
                <Textarea name="message" placeholder="Mensagem" focusBorderColor="red.500" bgColor="gray.200"/>
                <ButtonLink text="Enviar" />
              </Stack>
            </Box>
            <Box>
              <Image 
                src="/images/form-contact.svg" 
                alt="materiais" 
                w="500px"
                display={{ sm: 'none', lg: 'block' }}
              />
            </Box>
          </Flex>

        </Flex>
      </Box>
    </>
  )
}
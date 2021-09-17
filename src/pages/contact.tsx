import { Flex, Box, Text, Stack, Image, Textarea, Button } from '@chakra-ui/react';
import Head from 'next/head';

import Input from '../components/Input';
import ButtonLink from '../components/ButtonLink';
import HeaderContent from '../components/HeaderContent';
import { useState } from 'react';

export default function Contact() {

  const [name, setName] = useState('')
  const [company, setCompany] = useState('')
  const [number, setNumber] = useState('')
  const [email, setEmail] = useState('')
  const [city, setCity] = useState('')
  const [state, setState] = useState('')
  const [title, setTitle] = useState('')
  const [message, setMessage] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [hasErrorForm, setHasErrorForm] = useState(false);

  const handleSubmit = async () => { 
    let data = {
      name,
      email,
      company,
      number,
      city,
      state, 
      title,
      message
    }

    if (name && email && number && title) {
      setHasErrorForm(false);

      fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Accept': 'application/json, text/plain, */*',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })

      setSubmitted(true)
      setName('')
      setEmail('')
      setCompany('')
      setNumber('')
      setCity('')
      setState('')
      setTitle('')
      setMessage('')
    } else {
      setHasErrorForm(true);
    }
  }

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
        p={{ null: '0', lg: '3rem 0 5rem 0' }}
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
            mt={{ null: '2rem', lg: '5rem' }}
            justify="space-between"
            align="center"
          >
            <Box w={{ null: '100%', lg: '50%' }} p={{ null: '2rem', lg: '0' }}>
              <Stack spacing="4">
                <Input onChange={(e) =>  { setName(e.target.value)}} value={name} name="name" type="text" placeholder="Nome*" />
                <Input onChange={(e) =>  { setCompany(e.target.value)}} value={company} name="company" type="text" placeholder="Empresa" />
                <Input onChange={(e) =>  { setNumber(e.target.value)}} value={number} name="tel" type="text" placeholder="Telefone*" />
                <Input onChange={(e) =>  { setEmail(e.target.value)}} value={email} name="email" type="email" placeholder="Email*" />
                <Input onChange={(e) =>  { setCity(e.target.value)}} value={city} name="city" type="text" placeholder="Município" />
                <Input onChange={(e) =>  { setState(e.target.value)}} value={state} name="uf" type="text" placeholder="Estado" />
                <Input onChange={(e) =>  { setTitle(e.target.value)}} value={title} name="subject" type="text" placeholder="Assunto*" />
                <Textarea onChange={(e) => { setMessage(e.target.value)}} value={message} name="message" placeholder="Mensagem" focusBorderColor="red.500" bgColor="gray.200"/>
                
                {
                  hasErrorForm && <Text
                    fontSize="md"
                    color="red.300"
                  >
                    Preencha os campos obrigatórios
                  </Text>
                }
                

                <Button 
                  onClick={() => handleSubmit()}
                  bg="#DD0022"
                  color="#FFF"
                  _hover={{
                    bg: 'red.600'
                  }}
                >
                  Enviar
                </Button>
              </Stack>
            </Box>
            <Box>
              <Image 
                src="/images/form-contact.svg" 
                alt="materiais" 
                w="500px"
                display={{ null: 'none', lg: 'block' }}
              />
            </Box>
          </Flex>

        </Flex>
      </Box>
    </>
  )
}
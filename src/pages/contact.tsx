import { Flex, Box, Text, Stack, Image, Textarea } from '@chakra-ui/react';
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

  const handleSubmit = () => { 
    
    console.log('Sending')
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

    fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }).then((res) => {
      console.log('Response received')
      if (res.status === 200) {
        console.log('Response succeeded!')
        setSubmitted(true)
        setName('')
        setEmail('')
        setCompany('')
        setNumber('')
        setCity('')
        setState('')
        setTitle('')
        setMessage('')
      }
    })}



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
                <Input onChange={(e) =>  { setName(e.target.value)}} name="name" type="text" placeholder="Nome*" />
                <Input onChange={(e) =>  { setCompany(e.target.value)}} name="company" type="text" placeholder="Empresa" />
                <Input onChange={(e) =>  { setNumber(e.target.value)}} name="tel" type="text" placeholder="Telefone*" />
                <Input onChange={(e) =>  { setEmail(e.target.value)}} name="email" type="email" placeholder="Email*" />
                <Input onChange={(e) =>  { setCity(e.target.value)}} name="city" type="text" placeholder="Município" />
                <Input onChange={(e) =>  { setState(e.target.value)}} name="uf" type="text" placeholder="Estado" />
                <Input onChange={(e) =>  { setTitle(e.target.value)}} name="subject" type="text" placeholder="Assunto*" />
                <Textarea onChange={(e) => { setMessage(e.target.value)}} name="message" placeholder="Mensagem" focusBorderColor="red.500" bgColor="gray.200"/>
                
                <button type="button" onClick={ () => handleSubmit()}> Enviar </button>
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
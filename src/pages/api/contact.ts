import { NextApiRequest, NextApiResponse } from 'next'

import { getPrismicClient } from '../../services/prismic';
import Prismic from '@prismicio/client';

import nodemailer from 'nodemailer';

export default async function contact(req: NextApiRequest, res: NextApiResponse) {
  const prismic = getPrismicClient();

  const responseFooter = await prismic.query([
    Prismic.predicates.at('document.type', 'parametros_gerais')
  ], {
    fetch: ['parametros_gerais.email'],
  });

  const transporter = nodemailer.createTransport({
    port: 465,
    host: "smtp.gmail.com",
    auth: {
      user: 'noreply.websiteform@gmail.com',
      pass: process.env.EMAILBOT_PASSWORD,
    },
    secure: true,
  })

  const mailData = {
    from: 'noreply.websiteform@gmail.com',
    to: responseFooter.results[0].data.email[0].text,
    subject: `Assunto: ${req.body.title}`,
    text: req.body.message,
    html: ` 
    Sr(a). ${req.body.name} entrou em contato, pela empresa ${req.body.company}

    Número: 
    ${req.body.number}

    Email: 
    ${req.body.email}

    Mensagem: 
    ${req.body.message}
    `
  }

  transporter.sendMail(mailData, function (err, info) {
    if(err)
      console.log(err)
    else
      console.log(info);
  })
}


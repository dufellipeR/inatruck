

export default function contact (req, res) {
  let nodemailer = require('nodemailer')
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
    to: 'client email',
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
      console.log(info)
  })



  res.status(200)

  
}
import nodemailer from 'nodemailer'
import { NextApiRequest, NextApiResponse } from 'next'

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    type: 'OAuth2',
    user: process.env.GMAIL_USER,
    clientId: process.env.GMAIL_CLIENTID,
    clientSecret: process.env.GMAIL_CLIENT_SECRET,
    refreshToken: process.env.GMAIL_REFRESH_TOKEN,
    accessToken: process.env.GMAIL_ACCESS_TOKEN,
  },
})

const sendEmail = async (req: NextApiRequest, res: NextApiResponse) => {
  const { name, email, message } = JSON.parse(req.body)

  const mailData = {
    from: email,
    to: process.env.MY_EMAIL,
    subject: `${name} sent message from rystam.com`,
    text: `Contact form submission @ rystam.com from: ${name}, email: ${email}, message: ${message}`,
    html: `
      <p>Contact form submission @ rystam.com</p>
      <p><strong>Name: </strong> ${name} </p>
      <p><strong>Email: </strong> ${email} </p>
      <p><strong>Message: </strong> ${message} </p>

    `,
  }

  try {
    const emailRes = await transporter.sendMail(mailData)
    console.log('Message Sent', emailRes.response)
    transporter.close()
    res.status(200).json(req.body)
  } catch (err) {
    console.log(err)
    transporter.close()
    res.status(455).json(err)
  }
}

export default sendEmail

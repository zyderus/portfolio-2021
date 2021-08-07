import nodemailer from 'nodemailer'
import { NextApiRequest, NextApiResponse } from 'next'

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_PASSWORD,
    clientId: process.env.OAUTH_CLIENTID,
    clientSecret: process.env.OAUTH_CLIENT_SECRET,
    refreshToken: process.env.OAUTH_REFRESH_TOKEN,
  },
})

const sendEmail = async (req: NextApiRequest, res: NextApiResponse) => {
  const { name, email, message } = JSON.parse(req.body)

  const mailData = {
    from: email,
    to: process.env.MY_EMAIL,
    subject: `${name} sent message from rystam.com`,
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
    res.status(200).json(req.body)
  } catch (err) {
    console.log(err)
    res.status(455).json(err)
  }
}

export default sendEmail

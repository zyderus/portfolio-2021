import nodemailer from 'nodemailer'
import { NextApiRequest, NextApiResponse } from 'next'


const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    type: 'OAuth2',
    user: process.env.GOOGLE_USER,
    clientId: process.env.GOOGLE_ID,
    clientSecret: process.env.GOOGLE_SECRET,
    refreshToken: process.env.GOOGLE_REFRESH_TOKEN,
  }
})

const sendEmail = async (req: NextApiRequest, res: NextApiResponse) => {
  const { name, email, message } = JSON.parse(req.body)

  const mailData = {
    from: `Zyderus.Mailer 🚀 <${email}>`,
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
    const result = await transporter.sendMail(mailData)
    // console.log('Message Sent', emailRes.response)
    // transporter.close()
    res.status(200).json(req.body)
    // return result
  } catch (err) {
    // console.log('ERRor::', err)
    // transporter.close()
    res.status(455).json(err)
    // return err
  }

  // res.status(200).json(req.body)
}

export default sendEmail


// const transporter = nodemailer.createTransport({
//   host: 'smtp.gmail.com',
//   port: 465,
//   secure: true,
//   auth: {
//       type: 'OAuth2',
//       user: process.env.GOOGLE_USER,
//       clientId: process.env.GOOGLE_ID,
//       clientSecret: process.env.GOOGLE_SECRET,
//       refreshToken: process.env.GOOGLE_REFRESH_TOKEN,
//   }
// })
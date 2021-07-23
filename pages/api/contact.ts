import { NextApiRequest, NextApiResponse } from 'next'
import nodemailer from 'nodemailer'

const transporter = nodemailer.createTransport({
  port: 465,
  host: 'smtp.gmail.com',
  auth: {
    user: 'taersk@gmail.com',
    pass: process.env.GMAIL_PASSWORD,
  },
  secure: true,
})

const sendEmail = (req: NextApiRequest, res: NextApiResponse) => {
  const mailData = {
    from: 'taersk@gmail.com',
    to: 'zyderus@gmail.com',
    subject: `Message From ${req.body.name}`,
    text: req.body.message + ' | Sent from: ' + req.body.email,
    html: `<div>${req.body.message}</div><p>Sent from: ${req.body.email}</p>`,
  }

  transporter.sendMail(mailData, function (err, info) {
    if (err) console.log(err)
    else console.log(info)
  })

  res.status(200)
}

export default sendEmail

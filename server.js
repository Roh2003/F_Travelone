import express from 'express'
import nodemailer from 'nodemailer'
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express();
app.use(bodyParser.json());
app.use(cors());

const transporter = nodemailer.createTransport({
  service: 'gmail', // You can use other services like SendGrid
  auth: {
    user: 'rohit.saundalkar@universal.edu.in',
    pass: 'Rohit#2003'
  }
});

app.post('/send-email', (req, res) => {
  const { email, name, tourDetails } = req.body;

  const mailOptions = {
    from: 'rohit.saundalkar@universal.edu.in',
    to: email,
    subject: 'Tour Booking Confirmation',
    text: `Hi ${name},\n\nThank you for booking your tour with us! Here are your tour details:\n${tourDetails}\n\nBest regards,\nYour Travel Company`
  };

  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
      res.status(500).send('Error sending email');
    } else {
      console.log('Email sent: ' + info.response);
      res.status(200).send('Email sent');
    }
  });
});

app.listen(5000, () => {
  console.log('Server is running on port 5000');
});

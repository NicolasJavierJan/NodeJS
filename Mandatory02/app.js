import express from "express";
import nodemailer from "nodemailer";

const app = express();

app.use(express.json());






// Contact E-Mail:
app.post('/contact', async (req, res) => {
    try {
      console.log(req.body);
      // Create a test account using createTestAccount
      let testAccount = await nodemailer.createTestAccount();
  
      // Create a transport object using the test account's SMTP details
      let transporter = nodemailer.createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        secure: false,
        auth: {
          user: testAccount.user,
          pass: testAccount.pass,
        },
      });
  
      // Send a test email
      let info = await transporter.sendMail({
        from: `${req.body.name} <${req.body.email}>`,
        to: 'Support Team <node-ledge@mandatory2.com>',
        subject: `${req.body.subject}`,
        text: `${req.body.text}`,
      });
  
      // Log the message URL to the console so you can view it in your browser
      console.log('Message sent: %s', info.messageId);
      console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
  
      // Send a response to the client
      res.send('Email sent successfully');
    } catch (error) {
      console.error(error);
      res.status(500).send('Error sending email');
    }
  });

const PORT = 8080;
app.listen(PORT);
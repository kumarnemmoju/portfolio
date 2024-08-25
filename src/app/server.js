const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const twilio = require('twilio');

// Create an instance of Express
const app = express();

// Middleware
app.use(bodyParser.json());

// Twilio configuration
const accountSid = 'your_twilio_account_sid';
const authToken = 'your_twilio_auth_token';
const client = new twilio(accountSid, authToken);

// Nodemailer configuration
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'your-email@gmail.com',
    pass: 'your-email-password'
  }
});

// Handle form submission
app.post('/api/contact', (req, res) => {
  const { name, email, message } = req.body;

  // Send email
  const mailOptions = {
    from: email,
    to: 'your-email@gmail.com',
    subject: `Contact Form Submission from ${name}`,
    text: message
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).json({ error: 'Failed to send email' });
    }

    // Send SMS
    client.messages
      .create({
        body: `New contact form submission from ${name}. Check your email for details.`,
        from: '+your_twilio_number',
        to: '+your_mobile_number'
      })
      .then((message) => {
        res.status(200).json({ message: 'Message sent successfully' });
      })
      .catch((err) => {
        res.status(500).json({ error: 'Failed to send SMS' });
      });
  });
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

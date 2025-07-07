// This is a simple Express.js serverless function for sending emails using nodemailer
const nodemailer = require('nodemailer');

module.exports = async function (req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, company, email, phone, subject, message } = req.body;
  if (!name || !company || !email || !phone || !subject || !message) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  // Configure your SMTP transporter (use environment variables in production)
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'devbisht1103@gmail.com', // sender email
      pass: 'YOUR_APP_PASSWORD' // use an app password, not your real password
    }
  });

  const mailOptions = {
    from: 'devbisht1103@gmail.com',
    to: 'devbisht1103@gmail.com',
    subject: `Inquiry from ${name} - ${subject}`,
    text: `Name: ${name}\nCompany: ${company}\nEmail: ${email}\nPhone: ${phone}\nSubject: ${subject}\nMessage: ${message}`
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ success: true });
  } catch (error) {
    res.status(500).json({ error: 'Failed to send email', details: error.message });
  }
};

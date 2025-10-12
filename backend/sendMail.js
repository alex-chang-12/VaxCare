// import nodemailer from "nodemailer";

// const transporter = nodemailer.createTransport({
//   service: 'Gmail',
//   auth: {
//     user: '2022.pratik.patil@ves.ac.in',
//     pass: `${process.env.gmailPassword}`
//   }
// });

// const SendmailTransport = async (to, subject, text, deadline) => {
//     try {
//         const info = await transporter.sendMail({
//             from: '2022.pratik.patil@ves.ac.in',
//             to,
//             subject: `Task Reminder: ${subject}`,
//             text: `This is a reminder that your task "${subject}" is due at ${deadline}. Description: ${text}`
//         });

//         console.log('Email sent:', info.messageId);
//     } catch (error) {
//         console.error('Error sending email:', error);
//     }
// };

// export { SendmailTransport };

import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

// Create reusable transporter
const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: process.env.gmailUser,
    pass: process.env.gmailPassword
  }
});

// Utility function to format the email content
const formatEmailContent = (subject, text, deadline) => ({
  text: `This is a reminder that your task "${subject}" is due at ${deadline}. Description: ${text}`,
  html: `
    <p>This is a reminder that your task "<strong>${subject}</strong>" is due at <strong>${deadline}</strong>.</p>
    <p>Description: ${text}</p>
  `
});

// Send email function
const SendmailTransport = async (to, subject, text, deadline = 'No deadline set') => {
  try {
    const { text: plainText, html } = formatEmailContent(subject, text, deadline);

    const info = await transporter.sendMail({
      from: process.env.gmailUser,
      to,
      subject: `Task Reminder: ${subject}`,
      text: plainText,
      html
    });

    console.log('Email sent successfully:', info.messageId);
    return info;
  } catch (error) {
    console.error(`Failed to send email to ${to} for task "${subject}":`, error);
    throw error;
  }
};

export { SendmailTransport };

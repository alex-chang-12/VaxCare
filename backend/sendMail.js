import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: '2022.pratik.patil@ves.ac.in',
    pass: `${process.env.gmailPassword}`
  }
});

const SendmailTransport = async (to, subject, text, deadline) => {
    try {
        const info = await transporter.sendMail({
            from: '2022.pratik.patil@ves.ac.in',
            to,
            subject: `Task Reminder: ${subject}`,
            text: `This is a reminder that your task "${subject}" is due at ${deadline}. Description: ${text}`
        });

        console.log('Email sent:', info.messageId);
    } catch (error) {
        console.error('Error sending email:', error);
    }
};

export { SendmailTransport };

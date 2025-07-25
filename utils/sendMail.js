import nodemailer from 'nodemailer';
export const sendEmail = async (to, subject, html) => {
   try {
   const transporter = nodemailer.createTransport({
     service: 'Gmail', // here smpt if needed
     auth: {
       user: process.env.SMTP_USER,
       pass: process.env.SMTP_PASS
     }
   });
 
   const mailOptions = {
     from: process.env.SMTP_USER,
     to,
     subject,
     html
   };
 
   await transporter.sendMail(mailOptions);
   } catch (error) {
    
   }
};

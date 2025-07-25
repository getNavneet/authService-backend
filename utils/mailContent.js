const getVerificationMailContent = (otp) => {
  const subject = "Please verify your mail to register";
  const html = `<html>
    <head>
        <style>
            h1 {
                color: #333;
            }
            p {
                font-size: 16px;
                line-height: 1.5;
            }
        </style>
    </head>
    <body>
        <h1>Welcome !</h1>
        <p>Please verify you email account to continue.</p>
        <b>${otp}</b>
    </body>
 </html>`;
  return { subject, html };
};

export { getVerificationMailContent };

const sgMail = require('@sendgrid/mail');
const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY;

sgMail.setApiKey(SENDGRID_API_KEY);

const sendWelcomeEmail = (email, firstName) => {
  sgMail.send({
    to: email,
    from: `${process.env.FROM_EMAIL}`,
    subject: 'Hooray from Wyncast.',
    text: `Hi ${firstName}! Welcome Wyncast, are you ready to listen?.`
    // html: exampleHTMLEmail
  });
};

const sendCancellationEmail = (email, firstName) => {
  sgMail.send({
    to: email,
    from: `${process.env.FROM_EMAIL}`,
    subject: 'Until the next time!.',
    text: `Bye ${firstName}. we're sure we'll meet again.`
  });
};

const forgotPasswordEmail = (email, token) => {
  const exampleHTMLEmail = `
  <a target="_blank" rel="noopener noreferrer" href="${process.env.APP_URL}/api/password/${token}">Reset Password</a>
  `;

  sgMail.send({
    to: email,
    from: `${process.env.FROM_EMAIL}`,
    subject: `Don't worry, it happens to the best of us!`,
    text: `Hi ${firstName}! Please click the link below to reset your password.`,
    html: exampleHTMLEmail
  });
};

module.exports = {
  sendWelcomeEmail,
  sendCancellationEmail,
  forgotPasswordEmail
};

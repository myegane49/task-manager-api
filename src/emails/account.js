const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'admin@taskmanager.com',
        subject: 'Thanks for joining in',
        text: `welcome to the app ${name}. let me know how you get along with the app`
    });
};

const sendCancelationEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'admin@taskmanager.com',
        subject: 'Farewell email',
        text: `Farewell dear ${name}. you leaving truly made us sad.would you take a moment saying why your leaving?`
    })
};

module.exports = {
    sendWelcomeEmail,
    sendCancelationEmail
};
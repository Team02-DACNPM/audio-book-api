const nodeMailer = require('nodemailer');
const { GMAIL } = require('../config/env');

const adminEmail = GMAIL.email;
const adminPassword = GMAIL.password;
const mailHost = GMAIL.host;
const mailPort =  GMAIL.port;

const sendMail = (to, subject, htmlContent) => {
    const transporter = nodeMailer.createTransport({
        host: mailHost,
        port: mailPort,
        secure: false,
        auth: {
            user: adminEmail,
            pass: adminPassword,
        },
    });

    const options = {
        from: adminEmail,
        to: to,
        subject: subject,
        text: 'Audio Book Team',
        html: htmlContent,
    };

    return transporter.sendMail(options);
};

module.exports = {
    sendMail: sendMail,
};

const { EMAIL_ID, EMAIL_PASS } = require('./server-config');
const nodemailer = require('nodemailer');

/*
    creating a transport using nodemailer;
    this transporter will send the mails for us; 
*/
const sender = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: EMAIL_ID,
        pass: EMAIL_PASS
    }
});

module.exports = sender;
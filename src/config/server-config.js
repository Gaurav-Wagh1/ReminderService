const dotenv = require('dotenv');
dotenv.config();

module.exports = {
    PORT: process.env.PORT,
    EMAIL_ID: process.env.EMAIL_ID,
    QUEUE_NAME:process.env.QUEUE_NAME,
    EMAIL_PASS: process.env.EMAIL_PASS,
    EXCHANGE_NAME: process.env.EXCHANGE_NAME,
    MESSAGE_BROKER_URL:process.env.MESSAGE_BROKER_URL,
    REMINDER_BINDING_KEY: process.env.REMINDER_BINDING_KEY
}
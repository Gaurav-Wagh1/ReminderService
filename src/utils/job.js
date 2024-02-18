const { EmailService } = require('../services/email-service');
const sender = require('../config/email-config');
const cron = require('node-cron');
const { createChannel, subscribeMessage } = require('../utils/message-queue');
const emailService = new EmailService();

const setupJobs = () => {

    // setting up the cron for repeatatively sending mails after every 2 minutes;
    cron.schedule('*/2 * * * *', async () => {
        const response = await emailService.fetchPendingEmails();
        response.forEach((email) => {
            sender.sendMail({
                to: email.recepientEmail,
                subject: email.subject,
                text: email.content
            }, async (err, data) => {
                if (err) {
                    console.log(err);
                } else {
                    console.log(data);
                    await emailService.updateTicket(email.id, { status: "SUCCESS" });
                }
            }
            );
        });
    });
}


const queueOperations = async() => {
    const channel = await createChannel();

    // setting up the cron job for repeatatively fetching the content after each 5 seconds;
    cron.schedule('*/5 * * * * *', async () => {
        subscribeMessage(channel);
    })
}


module.exports = {
    setupJobs,
    queueOperations
};
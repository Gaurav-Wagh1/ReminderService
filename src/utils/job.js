const { EmailService } = require('../services/email-service');
const sender = require('../config/email-config');
const cron = require('node-cron');

const emailService = new EmailService();

const setupJobs = () => {

    // setting up the cron for repeatatively sending mails after every 2 minutes;
    cron.schedule('* * * * * *', async () => {
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

module.exports = { setupJobs };
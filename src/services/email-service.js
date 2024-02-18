const { NotificationTicketRepository } = require('../repository/ticket-repository');
const sender = require('../config/email-config');

class EmailService {
    constructor() {
        this.notificationTicketRepository =
            new NotificationTicketRepository();
        this.channel;
    }


    async createNotification(data) {
        try {
            const response = await this.notificationTicketRepository.createNotification(data);
            return response;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }


    async fetchPendingEmails() {
        try {
            const response = await this.notificationTicketRepository.get({ status: "PENDING" });
            return response;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }


    async updateTicket(ticketId, data) {
        try {
            const response = await this.notificationTicketRepository.updateTicket(ticketId, data);
            return response;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }


    async sendBasicMail(data) {
        try {
            sender.sendMail({
                to: data.recepientEmail,
                subject: data.subject,
                text: data.content
            }, async (err, data) => {
                if (err) {
                    throw err;
                }
                else {
                    console.log("Successfully sent immediate basic mail :- ", data);
                }
            })
        } catch (error) {
            console.log("Not able to send basic mail", error);
        }
    }

}

module.exports = { EmailService };
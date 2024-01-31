const { NotificationTicketRepository } = require('../repository/ticket-repository');

class EmailService {
    constructor() {
        this.notificationTicketRepository =
            new NotificationTicketRepository();
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

}

module.exports = { EmailService };
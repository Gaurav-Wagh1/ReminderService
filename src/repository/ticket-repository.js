const { NotificationTicket } = require('../models/index');
const { Op } = require('sequelize');

class NotificationTicketRepository {

    async createNotification(data) {
        try {
            const response = await NotificationTicket.create(data);
            return response;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }


    async getAll() {
        try {
            const response = await NotificationTicket.findAll();
            return response;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    async get(filter) {
        try {
            const tickets = await NotificationTicket.findAll({
                where: {
                    status: filter.status,
                    notificationTime: {
                        [Op.lte]: new Date()
                    }
                }
            });
            return tickets;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    async updateTicket(ticketId, data) {
        try {
            const ticket = await NotificationTicket.findByPk(ticketId);
            if(data.status){
                ticket.status = data.status
            }
            await ticket.save();
            return ticket;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
}

module.exports = {
    NotificationTicketRepository
};
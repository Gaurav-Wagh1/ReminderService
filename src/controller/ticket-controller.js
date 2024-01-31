const { EmailService } = require('../services/email-service');
const emailService = new EmailService();

const create = async (req, res) => {
    try {
        const response = await emailService.createNotification(req.body);
        return res.status(201).json({
            data: response,
            success: true,
            err: {},
            message: "Successfully created the notification ticket"
        });
    } catch (error) {
        return res.status(500).json({
            data: {},
            success: false,
            error: error,
            message: "Not able to create the notification ticket!"
        });
    }
}

module.exports = {
    create
}
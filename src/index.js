const express = require('express');
const bodyParser = require('body-parser');
const { PORT } = require('./config/server-config');
const { setupJobs, queueOperations } = require('./utils/job');
const TicketController = require('./controller/ticket-controller');

const startServer = async () => {
    const app = express();

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));

    // Routes
    app.post('/api/v1/tickets', TicketController.create);

    app.listen(PORT, async () => {
        console.log(`Server started on port ${PORT}`);
        setupJobs();
        queueOperations();
        // db.sequelize.sync({ alter: true });
    });
}

startServer();
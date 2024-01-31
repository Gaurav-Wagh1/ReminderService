const express = require('express');
const bodyParser = require('body-parser');
const { PORT } = require('./config/server-config');
const { setupJobs } = require('./utils/job');
const TicketController = require('./controller/ticket-controller');
const db = require('./models/index');

const startServer = () => {
    const app = express();

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));

    // Routes
    app.post('/api/v1/tickets', TicketController.create);

    app.listen(PORT, () => {
        console.log(`Server started on port ${PORT}`);
        setupJobs();
        // db.sequelize.sync({ alter: true });
    });
}

startServer();
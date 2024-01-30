const express = require('express');
const bodyParser = require('body-parser');
const { PORT } = require('./config/server-config');
const { sendBasicEmail } = require('./services/email-service');
const cron = require('node-cron');

const startServer = () => {
    const app = express();

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));

    app.listen(PORT, () => {
        console.log(`Server started on port ${PORT}`);

        // sendBasicEmail(
        //     'support@admin.com',
        //     // 'reminder.service.gw@gmail.com',
        //     'terahastachehra@gmail.com',
        //     'This is a testing email',
        //     'Hey, this is a new topic in our syllabus'
        // );
    });
}

startServer();
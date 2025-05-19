const express = require('express');
const bodyParser = require('body-parser');
const connectionRabbitMQ = require('./shared/rabbitmq/rabbitmq.shared');
const apolloServer = require('./apollo');
const catchingError = require('./middlewares/handler-error.middleware');
const router = require('./apis/routes');
const externalResponse = require('./middlewares/handler-response.middleware');


const initialApp = async () => {
    const app = express();

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));

    // app.use(externalResponse);

    await apolloServer.start();
    await connectionRabbitMQ();
    apolloServer.applyMiddleware({ app });

    // router
    app.use('/apis', router)

    app.use(catchingError)
    return app;
}

module.exports = initialApp;

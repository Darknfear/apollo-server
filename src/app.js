const express = require('express');
const connectionRabbitMQ = require('./shared/rabbitmq/rabbitmq.shared');
const apolloServer = require('./apollo');
const catchingError = require('./middlewares/handler-error.middleware');
const router = require('./apis/routes');


const initialApp = async () => {
    const app = express();
    await apolloServer.start();
    await connectionRabbitMQ();
    apolloServer.applyMiddleware({ app });

    // router
    app.use('/apis', router)

    app.use(catchingError)
    return app;
}

module.exports = initialApp;

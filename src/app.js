const express = require('express');
const connectionRabbitMQ = require('./shared/rabbitmq/rabbitmq.shared');
const apolloServer = require('./apollo');


const initialApp = async () => {
    const app = express();
    await apolloServer.start();
    await connectionRabbitMQ();
    apolloServer.applyMiddleware({ app });
    return app;
}

module.exports = initialApp;

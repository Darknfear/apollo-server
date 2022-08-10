const express = require('express');
const apolloServer = require('./apollo');


const initialApp = async () => {
    const app = express();
    await apolloServer.start();
    apolloServer.applyMiddleware({ app });

    console.log(apolloServer.graphqlPath);

    return app;
}

module.exports = initialApp;

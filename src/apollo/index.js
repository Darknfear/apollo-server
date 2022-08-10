const { readFileSync } = require('fs');
const { ApolloServer } = require('apollo-server-express');
const {
    ApolloServerPluginDrainHttpServer,
    ApolloServerPluginLandingPageLocalDefault,
    ApolloServerPluginLandingPageGraphQLPlayground
    
} = require('apollo-server-core');

const schema = require('./schema');
const resolvers = require('./resolvers');

const apolloServer = new ApolloServer({
    typeDefs: schema,
    resolvers,
    // cache: 'bounded',
    // plugins: [
    //     // ApolloServerPluginDrainHttpServer({ httpServer }),
    //     // ApolloServerPluginLandingPageLocalDefault({ embed: true }),
    // ],
});

module.exports = apolloServer;

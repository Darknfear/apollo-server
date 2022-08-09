const { ApolloServer } = require('apollo-server-express');
const {
    ApolloServerPluginDrainHttpServer,
    ApolloServerPluginLandingPageLocalDefault,
} = require('apollo-server-core');

const schema = require('./schema.graphql');
const resolvers = require('./resolvers');

const apolloServer = new ApolloServer({
    typeDefs: readFileSync(resolve(__dirname, 'schema.graphql')).toString('utf8'),
    resolvers: resolvers,
    cache: 'bounded',
    plugins: [
        ApolloServerPluginDrainHttpServer({ httpServer }),
        ApolloServerPluginLandingPageLocalDefault({ embed: true }),
    ],
});

module.exports = apolloServer;

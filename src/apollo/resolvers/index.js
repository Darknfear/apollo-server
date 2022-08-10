const mutation = require('./mutation');
const resolvers = {
    Query: {
        books: (parent, args) => {
            console.log(parent, args);
            return [{
                id: 1,
                name: 'String',
                genre: 'String',

            }, {
                id: 2,
                name: 'String',
                genre: 'String',

            }, {
                id: 2,
                name: 'String',
                genre: 'String',

            }]
        }
    },

    Mutation: mutation
};

module.exports = resolvers;

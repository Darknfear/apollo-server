const { gql } = require('apollo-server-express');

const schema = gql`
    type Book {
        id: ID
        name: String
        genre: String
    }

    type Query {
        books: [Book]
    }

    type Mutation {
        createBook(name: String, genre: String): Book
    }
`;

module.exports = schema;

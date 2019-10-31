const { ApolloServer, gql } = require('apollo-server-lambda');
// The required file is `gitignored` because the soure of truth is in
// `src/tokens`. This is a workaround for:
// https://github.com/netlify/zip-it-and-ship-it/issues/38
const tokens = require('./tokens');

const typeDefs = gql`
    type TokenValue {
        web: String
        ios: String
        android: String
    }

    type TokenDescription {
        web: String
        ios: String
        android: String
    }

    enum TokenTypes {
        color
        size
    }

    type Token {
        id: String!
        description: TokenDescription
        type: TokenTypes
        value: TokenValue!
        group: String
        deprecated: Boolean
    }

    type Category {
        name: String!
        description: String
        tokens: [Token]
    }

    type Query {
        categories: [Category]!
    }
`;

const resolvers = {
    Query: {
        categories: () => tokens,
    },
};

const server = new ApolloServer({
    typeDefs,
    resolvers,
});

exports.handler = server.createHandler();

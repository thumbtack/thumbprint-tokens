const { ApolloServer, gql } = require('apollo-server-lambda');
// The required file is `gitignored` because the soure of truth is in
// `src/tokens`. This is a workaround for:
// https://github.com/netlify/zip-it-and-ship-it/issues/38
const tokens = require('./tokens');

const typeDefs = gql`
    enum TokenType {
        string
        number
    }

    type TokenValue {
        name: String!
        value: String!
        description: String
    }

    type TokenPlatforms {
        javascript: TokenValue
        scss: TokenValue
        ios: TokenValue
        android: TokenValue
    }

    type TokenDescription {
        web: String
        ios: String
        android: String
    }

    enum TokenFormats {
        color
        size
    }

    type Token {
        id: String!
        platforms: TokenPlatforms!
        format: TokenFormats
        type: TokenType!
        group: String
        deprecated: Boolean
    }

    type Category {
        name: String!
        description: String
        tokens: [Token]
    }

    type Query {
        categories(platform: String): [Category!]!
    }
`;

const resolvers = {
    Query: {
        categories: (parent, args) => {
            const { platform } = args;

            if (!platform) {
                return tokens;
            }

            // Only return the tokens that have a value in the desired
            // platform. Categories that don't have any tokens in that
            // platform are omitted entirely.
            return tokens
                .map(category => ({
                    ...category,
                    ...{ tokens: category.tokens.filter(token => token.platforms[platform]) },
                }))
                .filter(category => category.tokens.length > 0);
        },
    },
};

const server = new ApolloServer({
    typeDefs,
    resolvers,
});

exports.handler = server.createHandler();

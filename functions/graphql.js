const { ApolloServer, gql } = require('apollo-server-lambda');
const path = require('path');
const fs = require('fs');
const glob = require('glob');

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
        categories: () => {
            // Combine all the files and tokens into a big array.
            const files = glob.sync(path.resolve(__dirname, '../src/tokens/*.json'));
            const allFiles = files.map(file => fs.readFileSync(file).toString());
            const allTokens = allFiles.map(fileText => JSON.parse(fileText));

            return allTokens;
        },
    },
};

const server = new ApolloServer({
    typeDefs,
    resolvers,
});

exports.handler = server.createHandler();

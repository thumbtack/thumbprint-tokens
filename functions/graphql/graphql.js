const { ApolloServer, gql } = require('apollo-server-lambda');

// These imports are of copied files to work around this bug:
// https://github.com/netlify/zip-it-and-ship-it/issues/38
// Once the bug is fixed, these two files should also be removed from
// `.gitignore` file.
const tokens = require('./tokens-copy');
const { version } = require('./package-copy.json');

const typeDefs = gql`
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
        time
        fontWeight
    }

    type Token {
        id: String!
        platforms: TokenPlatforms!
        format: TokenFormats
        group: String
        deprecated: Boolean
    }

    type Category {
        name: String!
        description: String
        tokens: [Token!]
        subcategories: [Category!]
    }

    type Query {
        version: String!
        categories(platform: String): [Category!]!
    }
`;

const resolvers = {
    Query: {
        version: () => version,
        categories: (parent, args) => {
            const { platform } = args;

            if (!platform) {
                return tokens;
            }

            // Only return the tokens that have a value in the desired
            // platform. Categories that don't have any tokens in that
            // platform are omitted entirely.
            const mapCategory = category => ({
                ...category,
                ...{
                    tokens: category.tokens.filter(token => token.platforms[platform]),
                    subcategories: category.subcategories.map(mapCategory),
                },
            });
            const categoryFilter = s =>
                (s.tokens && s.tokens.some(t => t.platforms[platform])) ||
                (s.subcategories && s.subcategories.some(categoryFilter));
            return tokens.map(category => mapCategory(category)).filter(categoryFilter);
        },
    },
};

const server = new ApolloServer({
    typeDefs,
    resolvers,
});

exports.handler = server.createHandler();

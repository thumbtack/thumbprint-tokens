import { ApolloServer, gql } from 'apollo-server-lambda';
import { Handler } from '@netlify/functions';

import tokens from '../../src/tokens';
import { version } from '../../package.json';
import { PlatformSlug, TokenGroup } from '../../src/token-types';

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
        tokens: [Token]
    }

    type Query {
        version: String!
        categories(platform: String): [Category!]!
    }
`;

const resolvers = {
    Query: {
        version: (): string => version,
        categories: (_parent: unknown, args: { platform: PlatformSlug }): TokenGroup[] => {
            const { platform } = args;

            if (!platform) {
                return tokens;
            }

            // Only return the tokens that have a value in the desired
            // platform. Categories that don't have any tokens in that
            // platform are omitted entirely.
            return tokens
                .map((category) => ({
                    ...category,
                    ...{ tokens: category.tokens.filter((token) => token.platforms[platform]) },
                }))
                .filter((category) => category.tokens.length > 0);
        },
    },
};

const server = new ApolloServer({
    typeDefs,
    resolvers,
});

const handler: Handler = server.createHandler() as unknown as Handler;

// eslint-disable-next-line import/prefer-default-export
export { handler };

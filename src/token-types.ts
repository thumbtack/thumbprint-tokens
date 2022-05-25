export type PlatformSlug = 'javascript' | 'scss' | 'android' | 'ios';

export type TokenFormat = 'color' | 'time' | 'fontWeight' | 'size';

export interface PlatformToken {
    name: string;
    value: string | number;
    description?: string;
}

export interface Token {
    id: string;
    platforms: {
        scss?: PlatformToken;
        javascript?: PlatformToken;
        ios?: PlatformToken;
        android?: PlatformToken;
    };
    deprecated?: boolean;
    format?: TokenFormat;
    group?: string;
}

export interface TokenGroup {
    name: string;
    description?: string;
    tokens: Token[];
}

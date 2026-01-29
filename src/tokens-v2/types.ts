export type TokenValue = string | number;

// Core Token Types
export interface CoreTokens {
    color?: Record<string, Record<string, string>>;
    dimension?: Record<string, Record<string, TokenValue>>;
    duration?: Record<string, number>;
}

// Semantic Token Types
// References are strings starting with 'core.' or 'semantic.'
export interface ThemedValue {
    light: string;
    dark: string;
}

export interface SemanticToken {
    value: ThemedValue;
    emphasis?: string;
    interaction?: string;
}

export interface SemanticTokenGroup {
    [key: string]: SemanticToken | SemanticTokenGroup;
}

export interface SemanticTokens {
    [category: string]: SemanticTokenGroup | undefined;
}

export type PlatformSlug = 'javascript' | 'scss' | 'ios' | 'android';

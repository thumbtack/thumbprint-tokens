import { PlatformSlug } from './types';

const capitalize = (str: string): string => {
    if (!str) return '';
    return str.charAt(0).toUpperCase() + str.slice(1);
};

const toKebabCase = (str: string): string =>
    str.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();

const toSnakeCase = (str: string): string =>
    str.replace(/([a-z])([A-Z])/g, '$1_$2').toLowerCase();

/**
 * Generates platform-specific token names from a token path.
 *
 * @param category - Top-level category (e.g., 'color', 'space', 'duration')
 * @param family - Token family (e.g., 'blue', 'grey', 'system')
 * @param level - Token level/variant (e.g., '50', '100', 'xsmall')
 * @param platform - Target platform
 */
export const generateTokenName = (
    category: string,
    family: string,
    level: string,
    platform: PlatformSlug,
): string => {
    switch (platform) {
        case 'scss':
            return `$tp-${category}__${family}-${level}`;
        case 'javascript':
            return `tp${capitalize(category)}${capitalize(family)}${capitalize(level)}`;
        case 'ios':
            return `${capitalize(category)}.${family}${level}`;
        case 'android':
            return `tp_${family}_${level}`;
    }
};

/**
 * Generates names for tokens without a level (e.g., system.white)
 */
export const generateSystemTokenName = (
    category: string,
    family: string,
    variant: string,
    platform: PlatformSlug,
): string => {
    switch (platform) {
        case 'scss':
            return `$tp-${category}__${family}-${variant}`;
        case 'javascript':
            return `tp${capitalize(category)}${capitalize(family)}${capitalize(variant)}`;
        case 'ios':
            return `${capitalize(category)}.${family}${variant}`;
        case 'android':
            return `tp_${family}_${variant}`;
    }
};

/**
 * Generates dimension token names (space, cornerRadius, breakpoint)
 */
export const generateDimensionTokenName = (
    type: string,
    level: string,
    platform: PlatformSlug,
): string => {
    const typeKebab = toKebabCase(type);

    switch (platform) {
        case 'scss':
            return `$tp-${typeKebab}__${level}`;
        case 'javascript':
            return `tp${capitalize(type)}${capitalize(level)}`;
        case 'ios':
            return `${capitalize(type)}.${level}`;
        case 'android':
            return `tp_${toSnakeCase(type)}_${level}`;
    }
};

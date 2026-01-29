import { SemanticTokens } from './types';

/**
 * Semantic Design Tokens
 *
 * References use dot notation: 'core.color.blue.500' or 'semantic.text.neutral.default'
 */
const semanticTokens: SemanticTokens = {
    background: {
        neutral: {
            default: {
                value: {
                    light: 'core.color.system.white',
                    dark: 'core.color.grey.950',
                },
                emphasis: 'default',
            },
            low: {
                value: {
                    light: 'core.color.grey.50',
                    dark: 'core.color.grey.950',
                },
                emphasis: 'low',
            },
            medium: {
                value: {
                    light: 'core.color.grey.100',
                    dark: 'core.color.grey.100',
                },
                emphasis: 'medium',
            },
            strong: {
                value: {
                    light: 'core.color.grey.300',
                    dark: 'core.color.grey.700',
                },
                emphasis: 'strong',
            },
            heavy: {
                value: {
                    light: 'core.color.grey.500',
                    dark: 'core.color.grey.300',
                },
                emphasis: 'heavy',
            },
            defaultHover: {
                value: {
                    light: 'core.color.blue.50',
                    dark: 'core.color.blue.950',
                },
                emphasis: 'default',
                interaction: 'hover',
            },
            defaultActive: {
                value: {
                    light: 'core.color.blue.50',
                    dark: 'core.color.blue.950',
                },
                emphasis: 'default',
                interaction: 'active',
            },
            strongActive: {
                value: {
                    light: 'core.color.grey.950',
                    dark: 'core.color.grey.50',
                },
                emphasis: 'strong',
                interaction: 'active',
            },
            defaultPressed: {
                value: {
                    light: 'core.color.blue.100',
                    dark: 'core.color.blue.900',
                },
                emphasis: 'default',
                interaction: 'pressed',
            },
            inverse: {
                value: {
                    light: 'core.color.grey.950',
                    dark: 'core.color.system.white',
                },
                emphasis: 'inverse',
            },
            inverseHover: {
                value: {
                    light: 'core.color.grey.800',
                    dark: 'core.color.grey.100',
                },
                emphasis: 'inverse',
                interaction: 'hover',
            },
        },
        brand: {
            low: {
                value: {
                    light: 'core.color.blue.100',
                    dark: 'core.color.blue.950',
                },
                emphasis: 'low',
            },
            lowHover: {
                value: {
                    light: 'core.color.blue.200',
                    dark: 'core.color.blue.900',
                },
                emphasis: 'low',
                interaction: 'hover',
            },
            medium: {
                value: {
                    light: 'core.color.blue.700',
                    dark: 'core.color.blue.300',
                },
                emphasis: 'medium',
            },
            mediumActive: {
                value: {
                    light: 'core.color.blue.600',
                    dark: 'core.color.blue.600',
                },
                emphasis: 'medium',
                interaction: 'active',
            },
            strong: {
                value: {
                    light: 'core.color.blue.950',
                    dark: 'core.color.blue.400',
                },
                emphasis: 'strong',
            },
            strongHover: {
                value: {
                    light: 'core.color.grey.950',
                    dark: 'core.color.blue.500',
                },
                emphasis: 'strong',
                interaction: 'hover',
            },
            strongPressed: {
                value: {
                    light: 'core.color.blue.950',
                    dark: 'core.color.blue.600',
                },
                emphasis: 'strong',
                interaction: 'pressed',
            },
        },
        info: {
            low: {
                value: {
                    light: 'core.color.indigo.100',
                    dark: 'core.color.indigo.950',
                },
                emphasis: 'low',
            },
            medium: {
                value: {
                    light: 'core.color.indigo.700',
                    dark: 'core.color.indigo.300',
                },
                emphasis: 'medium',
            },
            strong: {
                value: {
                    light: 'core.color.indigo.950',
                    dark: 'core.color.indigo.100',
                },
                emphasis: 'strong',
            },
        },
        success: {
            low: {
                value: {
                    light: 'core.color.green.100',
                    dark: 'core.color.green.950',
                },
                emphasis: 'low',
            },
            medium: {
                value: {
                    light: 'core.color.green.700',
                    dark: 'core.color.green.300',
                },
                emphasis: 'medium',
            },
            strong: {
                value: {
                    light: 'core.color.green.950',
                    dark: 'core.color.green.100',
                },
                emphasis: 'strong',
            },
        },
        warning: {
            low: {
                value: {
                    light: 'core.color.yellow.50',
                    dark: 'core.color.yellow.950',
                },
                emphasis: 'low',
            },
            medium: {
                value: {
                    light: 'core.color.yellow.600',
                    dark: 'core.color.yellow.300',
                },
                emphasis: 'medium',
            },
            strong: {
                value: {
                    light: 'core.color.yellow.950',
                    dark: 'core.color.yellow.100',
                },
                emphasis: 'strong',
            },
        },
        alert: {
            low: {
                value: {
                    light: 'core.color.red.50',
                    dark: 'core.color.red.950',
                },
                emphasis: 'low',
            },
            medium: {
                value: {
                    light: 'core.color.red.600',
                    dark: 'core.color.red.400',
                },
                emphasis: 'medium',
            },
            mediumHover: {
                value: {
                    light: 'core.color.red.700',
                    dark: 'core.color.red.300',
                },
                emphasis: 'medium',
                interaction: 'hover',
            },
            mediumPressed: {
                value: {
                    light: 'core.color.red.800',
                    dark: 'core.color.red.200',
                },
                emphasis: 'medium',
                interaction: 'pressed',
            },
            strong: {
                value: {
                    light: 'core.color.red.950',
                    dark: 'core.color.red.100',
                },
                emphasis: 'strong',
            },
        },
        ratings: {
            default: {
                value: {
                    light: 'semantic.background.neutral.default',
                    dark: 'semantic.background.neutral.default',
                },
                emphasis: 'default',
            },
            defaultActive: {
                value: {
                    light: 'core.color.yellow.400',
                    dark: 'core.color.yellow.500',
                },
                emphasis: 'default',
                interaction: 'active',
            },
        },
        disabled: {
            low: {
                value: {
                    light: 'semantic.background.neutral.low',
                    dark: 'semantic.background.neutral.low',
                },
                emphasis: 'low',
            },
            medium: {
                value: {
                    light: 'core.color.grey.200',
                    dark: 'core.color.grey.800',
                },
                emphasis: 'medium',
            },
        },
        caution: {
            default: {
                value: {
                    light: 'semantic.background.neutral.default',
                    dark: 'semantic.background.neutral.default',
                },
                emphasis: 'default',
            },
            defaultHover: {
                value: {
                    light: 'core.color.red.50',
                    dark: 'core.color.red.950',
                },
                emphasis: 'default',
                interaction: 'hover',
            },
            defaultPressed: {
                value: {
                    light: 'core.color.red.100',
                    dark: 'core.color.red.900',
                },
                emphasis: 'default',
                interaction: 'pressed',
            },
        },
    },
    border: {
        neutral: {
            default: {
                value: {
                    light: 'core.color.grey.200',
                    dark: 'core.color.grey.800',
                },
                emphasis: 'default',
            },
            defaultActive: {
                value: {
                    light: 'core.color.blue.600',
                    dark: 'core.color.blue.600',
                },
                emphasis: 'default',
                interaction: 'active',
            },
            defaultPressed: {
                value: {
                    light: 'core.color.grey.200',
                    dark: 'core.color.grey.700',
                },
                emphasis: 'default',
                interaction: 'pressed',
            },
            lowActive: {
                value: {
                    light: 'core.color.grey.950',
                    dark: 'core.color.grey.50',
                },
                emphasis: 'low',
                interaction: 'active',
            },
            medium: {
                value: {
                    light: 'core.color.grey.300',
                    dark: 'core.color.grey.700',
                },
                emphasis: 'medium',
            },
            strong: {
                value: {
                    light: 'core.color.grey.950',
                    dark: 'core.color.grey.50',
                },
                emphasis: 'strong',
            },
            inverse: {
                value: {
                    light: 'semantic.background.neutral.default',
                    dark: 'core.color.grey.800',
                },
                emphasis: 'inverse',
            },
            defaultDisabled: {
                value: {
                    light: 'semantic.background.neutral.low',
                    dark: 'semantic.background.neutral.low',
                },
                emphasis: 'default',
                interaction: 'disabled',
            },
            mediumDisabled: {
                value: {
                    light: 'core.color.grey.200',
                    dark: 'core.color.grey.800',
                },
                emphasis: 'medium',
                interaction: 'disabled',
            },
        },
        alert: {
            default: {
                value: {
                    light: 'core.color.red.600',
                    dark: 'core.color.red.400',
                },
                emphasis: 'default',
            },
            defaultPressed: {
                value: {
                    light: 'core.color.red.700',
                    dark: 'core.color.red.600',
                },
                emphasis: 'default',
                interaction: 'pressed',
            },
            strongPressed: {
                value: {
                    light: 'core.color.red.800',
                    dark: 'core.color.red.600',
                },
                emphasis: 'strong',
                interaction: 'pressed',
            },
        },
        ratings: {
            default: {
                value: {
                    light: 'core.color.yellow.700',
                    dark: 'core.color.yellow.600',
                },
                emphasis: 'default',
            },
        },
    },
    heading: {
        neutral: {
            default: {
                value: {
                    light: 'core.color.grey.950',
                    dark: 'core.color.grey.50',
                },
                emphasis: 'default',
            },
            medium: {
                value: {
                    light: 'core.color.grey.600',
                    dark: 'core.color.grey.300',
                },
                emphasis: 'medium',
            },
            low: {
                value: {
                    light: 'core.color.grey.500',
                    dark: 'core.color.grey.600',
                },
                emphasis: 'low',
            },
            inverse: {
                value: {
                    light: 'core.color.system.white',
                    dark: 'core.color.grey.950',
                },
                emphasis: 'inverse',
            },
        },
    },
    text: {
        neutral: {
            default: {
                value: {
                    light: 'core.color.grey.950',
                    dark: 'core.color.grey.50',
                },
                emphasis: 'default',
            },
            medium: {
                value: {
                    light: 'core.color.grey.600',
                    dark: 'core.color.grey.300',
                },
                emphasis: 'medium',
            },
            inverse: {
                value: {
                    light: 'core.color.system.white',
                    dark: 'core.color.grey.950',
                },
                emphasis: 'inverse',
            },
            defaultDisabled: {
                value: {
                    light: 'core.color.grey.300',
                    dark: 'core.color.grey.700',
                },
                emphasis: 'default',
                interaction: 'disabled',
            },
        },
        brand: {
            medium: {
                value: {
                    light: 'core.color.blue.600',
                    dark: 'core.color.blue.400',
                },
                emphasis: 'medium',
            },
            strong: {
                value: {
                    light: 'core.color.blue.950',
                    dark: 'core.color.blue.100',
                },
                emphasis: 'strong',
            },
        },
        info: {
            medium: {
                value: {
                    light: 'core.color.indigo.600',
                    dark: 'core.color.indigo.400',
                },
                emphasis: 'medium',
            },
            strong: {
                value: {
                    light: 'core.color.indigo.950',
                    dark: 'core.color.indigo.100',
                },
                emphasis: 'strong',
            },
        },
        success: {
            medium: {
                value: {
                    light: 'core.color.green.600',
                    dark: 'core.color.green.400',
                },
                emphasis: 'medium',
            },
            strong: {
                value: {
                    light: 'core.color.green.950',
                    dark: 'core.color.green.100',
                },
                emphasis: 'strong',
            },
        },
        warning: {
            medium: {
                value: {
                    light: 'core.color.yellow.600',
                    dark: 'core.color.yellow.400',
                },
                emphasis: 'medium',
            },
            strong: {
                value: {
                    light: 'core.color.yellow.950',
                    dark: 'core.color.yellow.100',
                },
                emphasis: 'strong',
            },
        },
        alert: {
            medium: {
                value: {
                    light: 'core.color.red.600',
                    dark: 'core.color.red.400',
                },
                emphasis: 'medium',
            },
            strong: {
                value: {
                    light: 'core.color.red.950',
                    dark: 'core.color.red.100',
                },
                emphasis: 'strong',
            },
        },
        onBrand: {
            strong: {
                value: {
                    light: 'core.color.blue.300',
                    dark: 'semantic.text.neutral.inverse',
                },
                emphasis: 'strong',
            },
            default: {
                value: {
                    light: 'semantic.link.brand.default',
                    dark: 'semantic.link.brand.default',
                },
                emphasis: 'default',
            },
        },
    },
    link: {
        neutral: {
            default: {
                value: {
                    light: 'semantic.text.neutral.default',
                    dark: 'semantic.text.neutral.default',
                },
                emphasis: 'default',
            },
            defaultHover: {
                value: {
                    light: 'core.color.blue.600',
                    dark: 'core.color.blue.400',
                },
                emphasis: 'default',
                interaction: 'hover',
            },
            low: {
                value: {
                    light: 'semantic.text.neutral.medium',
                    dark: 'semantic.text.neutral.medium',
                },
                emphasis: 'low',
            },
            inverse: {
                value: {
                    light: 'semantic.background.neutral.default',
                    dark: 'semantic.background.neutral.default',
                },
                emphasis: 'inverse',
            },
        },
        brand: {
            default: {
                value: {
                    light: 'core.color.blue.700',
                    dark: 'core.color.blue.400',
                },
                emphasis: 'default',
            },
        },
        alert: {
            default: {
                value: {
                    light: 'semantic.text.alert.medium',
                    dark: 'semantic.text.alert.medium',
                },
                emphasis: 'default',
            },
        },
        onBrand: {
            strong: {
                value: {
                    light: 'core.color.blue.300',
                    dark: 'core.color.blue.950',
                },
                emphasis: 'strong',
            },
        },
    },
    icon: {
        neutral: {
            default: {
                value: {
                    light: 'core.color.grey.950',
                    dark: 'core.color.grey.50',
                },
                emphasis: 'default',
            },
            medium: {
                value: {
                    light: 'core.color.grey.600',
                    dark: 'core.color.grey.300',
                },
                emphasis: 'medium',
            },
            low: {
                value: {
                    light: 'core.color.grey.400',
                    dark: 'core.color.grey.500',
                },
                emphasis: 'low',
            },
            inverse: {
                value: {
                    light: 'core.color.system.white',
                    dark: 'core.color.grey.950',
                },
                emphasis: 'inverse',
            },
            disabled: {
                value: {
                    light: 'core.color.grey.300',
                    dark: 'core.color.grey.600',
                },
                interaction: 'disabled',
            },
        },
        brand: {
            default: {
                value: {
                    light: 'core.color.blue.600',
                    dark: 'core.color.blue.400',
                },
                emphasis: 'default',
            },
            low: {
                value: {
                    light: 'core.color.blue.400',
                    dark: 'core.color.blue.600',
                },
                emphasis: 'low',
            },
            strong: {
                value: {
                    light: 'core.color.blue.950',
                    dark: 'core.color.blue.100',
                },
                emphasis: 'strong',
            },
        },
        info: {
            default: {
                value: {
                    light: 'core.color.indigo.600',
                    dark: 'core.color.indigo.400',
                },
                emphasis: 'default',
            },
            low: {
                value: {
                    light: 'core.color.indigo.400',
                    dark: 'core.color.indigo.600',
                },
                emphasis: 'low',
            },
            strong: {
                value: {
                    light: 'core.color.indigo.950',
                    dark: 'core.color.grey.100',
                },
                emphasis: 'strong',
            },
        },
        success: {
            default: {
                value: {
                    light: 'core.color.green.600',
                    dark: 'core.color.green.400',
                },
                emphasis: 'default',
            },
            low: {
                value: {
                    light: 'core.color.green.400',
                    dark: 'core.color.green.600',
                },
                emphasis: 'low',
            },
            strong: {
                value: {
                    light: 'core.color.green.950',
                    dark: 'core.color.green.100',
                },
                emphasis: 'strong',
            },
        },
        warning: {
            default: {
                value: {
                    light: 'core.color.yellow.600',
                    dark: 'core.color.yellow.400',
                },
                emphasis: 'default',
            },
            low: {
                value: {
                    light: 'core.color.yellow.400',
                    dark: 'core.color.yellow.600',
                },
                emphasis: 'low',
            },
            strong: {
                value: {
                    light: 'core.color.yellow.950',
                    dark: 'core.color.yellow.100',
                },
                emphasis: 'strong',
            },
        },
        alert: {
            default: {
                value: {
                    light: 'core.color.red.600',
                    dark: 'core.color.red.400',
                },
                emphasis: 'default',
            },
            low: {
                value: {
                    light: 'core.color.red.400',
                    dark: 'core.color.red.600',
                },
                emphasis: 'low',
            },
            strong: {
                value: {
                    light: 'core.color.red.950',
                    dark: 'core.color.red.100',
                },
                emphasis: 'strong',
            },
        },
        onBrand: {
            strong: {
                value: {
                    light: 'core.color.blue.300',
                    dark: 'core.color.grey.950',
                },
                emphasis: 'strong',
            },
        },
    },
    data: {
        info: {
            medium: {
                value: {
                    light: 'core.color.indigo.600',
                    dark: 'core.color.indigo.400',
                },
                emphasis: 'medium',
            },
            low: {
                value: {
                    light: 'core.color.indigo.200',
                    dark: 'core.color.indigo.800',
                },
                emphasis: 'low',
            },
            strong: {
                value: {
                    light: 'core.color.indigo.950',
                    dark: 'core.color.indigo.100',
                },
                emphasis: 'strong',
            },
        },
    },
};

export default semanticTokens;

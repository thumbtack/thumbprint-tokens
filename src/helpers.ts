import handlebars from 'handlebars';
import { PlatformSlug, TokenFormat, TokenGroup } from './token-types';

interface HelperOptions {
    inverse: (x: any) => any;
    fn: (section: TokenGroup, obj?: { data: any }) => any;
    data: any;
}

export default {
    /**
     * Changes 'Border Radius' to 'BorderRadius'.
     */
    removeSpaces: (name: string): string => name.replace(/\s/g, ''),

    /**
     * Filters the sections so that we only loop over ones that have tokens in
     * that platform.
     */
    eachSectionWithPlatformTokens: function eachSectionWithPlatformTokens(
        sections: TokenGroup[],
        platform: PlatformSlug,
        options: HelperOptions,
    ) {
        if (!sections || sections.length === 0) {
            return options.inverse(this);
        }

        const data = options.data ? handlebars.createFrame(options.data) : undefined;
        const result = [];

        const filteredSections = sections.filter(s => s.tokens.some(t => t.platforms[platform]));

        for (let i = 0; i < filteredSections.length; i += 1) {
            data.index = i;
            data.last = i === filteredSections.length - 1;
            result.push(options.fn(filteredSections[i], { data }));
        }

        return result.join('');
    },

    getAndroidTag: (format: TokenFormat): 'color' | 'dimen' | 'integer' | 'item' => {
        // This is a helper because it's hard to do complicated conditionals within
        // `.handlebars` files. This function is similar to:
        // https://github.com/amzn/style-dictionary/blob/master/examples/advanced/custom-formats-with-templates/templates/android-xml.template
        if (format === 'color') {
            return 'color';
        }

        if (format === 'size') {
            return 'dimen';
        }

        if (format === 'time') {
            return 'integer';
        }

        return 'item';
    },

    isString: (arg1: unknown, options: HelperOptions): void =>
        typeof arg1 === 'string' ? options.fn(this) : options.inverse(this),

    ifEquals: (arg1: unknown, arg2: unknown, options: HelperOptions): void =>
        arg1 === arg2 ? options.fn(this) : options.inverse(this),
};

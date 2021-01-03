const handlebars = require('handlebars');

module.exports = {
    /**
     * Changes 'Border Radius' to 'BorderRadius'.
     */
    removeSpaces: name => name.replace(/\s/g, ''),

    /**
     * Filters the sections so that we only loop over ones that have tokens in
     * that platform.
     */
    eachSectionWithPlatformTokens: function eachSectionWithPlatformTokens(
        sections,
        platform,
        options,
    ) {
        if (!sections || sections.length === 0) {
            return options.inverse(this);
        }

        const data = options.data ? handlebars.createFrame(options.data) : undefined;
        const result = [];

        const sectionFilter = s =>
            (s.tokens && s.tokens.some(t => t.platforms[platform])) ||
            (s.subcategories && s.subcategories.some(sectionFilter));
        const filteredSections = sections.filter(sectionFilter);

        for (let i = 0; i < filteredSections.length; i += 1) {
            data.index = i;
            data.last = i === filteredSections.length - 1;
            result.push(options.fn(filteredSections[i], { data }));
        }

        return result.join('');
    },

    getAndroidTag: format => {
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

    isString: (arg1, options) =>
        typeof arg1 === 'string' ? options.fn(this) : options.inverse(this),

    ifEquals: (arg1, arg2, options) => (arg1 === arg2 ? options.fn(this) : options.inverse(this)),
};

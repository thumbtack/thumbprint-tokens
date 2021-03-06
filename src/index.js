#!/usr/bin/env node
const path = require('path');
const fse = require('fs-extra');
const JSZip = require('jszip');
const handlebars = require('handlebars');
const allTokens = require('./tokens');
const helpers = require('./helpers');

const outputs = [
    { slug: 'typescript', distName: 'index.ts' },
    { slug: 'scss', distName: '_index.scss' },
    { slug: 'android', distName: 'index.xml' },
    {
        slug: 'ios',
        distName: 'ThumbprintTokens.swift',
        // Packages the iOS dist into a zip file.
        postWrite: async distPath => {
            // Prep the zip file.
            const zip = new JSZip();

            // Add files to the folder.
            zip.file('ThumbprintTokens.swift', fse.readFileSync(distPath, 'utf-8'));
            zip.file('LICENSE.txt', fse.readFileSync('./LICENSE', 'utf-8'));

            // Save the zip file.
            const encodedZip = await zip.generateAsync({ type: 'nodebuffer' });
            const dist = path.resolve(__dirname, `../dist/ios.zip`);
            await fse.outputFile(dist, encodedZip);

            // We delete the `dist/ios` folder because we only want to keep the `.zip`.
            await fse.remove('dist/ios');
        },
    },
];

const compile = (output, tokens) => {
    const template = fse.readFileSync(require.resolve(`./templates/${output}.handlebars`), 'utf-8');

    // Dynamically register the helpers for each `template`.
    const helperNames = Object.keys(helpers);

    helperNames.forEach(currentHelper => {
        handlebars.registerHelper(currentHelper, helpers[currentHelper]);
    });

    return handlebars.compile(template)(tokens);
};

(() => {
    outputs.forEach(async ({ slug, distName, postWrite }) => {
        const contents = compile(slug, allTokens);
        const dist = path.resolve(__dirname, `../dist/${slug}/${distName}`);

        await fse.outputFile(dist, contents);

        // Provide a hook for platform-specific processing at the end.
        if (postWrite) {
            await postWrite(dist);
        }
    });
})();

#!/usr/bin/env node

import path from 'path';
import fse from 'fs-extra';
import JSZip from 'jszip';
import handlebars from 'handlebars';
import allTokens from './tokens';
import helpers from './helpers';
import { TokenGroup } from './token-types';

type OutputSlug = 'typescript' | 'scss' | 'android' | 'ios';

interface Output {
    slug: OutputSlug;
    distName: string;
    postWrite?: (distPath: string) => Promise<void>;
}

const outputs: Output[] = [
    { slug: 'typescript', distName: 'index.ts' },
    { slug: 'scss', distName: '_index.scss' },
    { slug: 'android', distName: 'index.xml' },
    { slug: 'ios', distName: '../Sources/ThumbprintTokens/ThumbprintTokens.swift' },
];

function typedEntries<K extends string | number | symbol, V>(
    object: Partial<Record<K, V>>,
): [K, V][] {
    return Object.entries(object) as [K, V][];
}

function compile(output: string, tokens: TokenGroup[]): string {
    const template = fse.readFileSync(require.resolve(`./templates/${output}.handlebars`), 'utf-8');

    // Dynamically register the helpers for each `template`.
    typedEntries(helpers).forEach(([helperName, helper]) => {
        handlebars.registerHelper(helperName, helper);
    });

    return handlebars.compile(template)(tokens);
}

((): void => {
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

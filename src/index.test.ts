import JSZip from 'jszip';
import fs from 'fs';
import path from 'path';

const distPath = path.join(__dirname, '../dist');

it('outputted CommonJS matches snapshot', () => {
    const output = fs.readFileSync(path.join(distPath, '/javascript-cjs/index.js'), 'utf-8');
    expect(output).toMatchSnapshot();
});

it('outputted ES module matches snapshot', () => {
    const output = fs.readFileSync(path.join(distPath, 'javascript-es/index.js'), 'utf-8');
    expect(output).toMatchSnapshot();
});

it('outputted SCSS matches snapshot', () => {
    const output = fs.readFileSync(path.join(distPath, 'scss/_index.scss'), 'utf-8');
    expect(output).toMatchSnapshot();
});

it('outputted Android matches snapshot', () => {
    const output = fs.readFileSync(path.join(distPath, 'android/index.xml'), 'utf-8');
    expect(output).toMatchSnapshot();
});

it('outputted iOS matches snapshot', () => {
    const output = fs.readFileSync('./Sources/ThumbprintTokens/ThumbprintTokens.swift', 'utf-8');
    expect(output).toMatchSnapshot();
});

# Thumbprint Tokens

> Design variables that power Thumbtack’s UI.

Thumbprint Tokens are published as JavaScript, SCSS, Swift, and Kotlin.

| Platform | Languages | Package |
| --- | --- | --- |
| Web | React & SCSS | [![npm](https://img.shields.io/npm/v/@thumbtack/thumbprint-tokens)](https://www.npmjs.com/package/@thumbtack/thumbprint-tokens) |
| iOS | Swift | [![CocoaPods](https://img.shields.io/cocoapods/v/ThumbprintTokens)](https://cocoapods.org/pods/ThumbprintTokens) |
| Android | Kotlin | [![JitPack](https://img.shields.io/jitpack/v/github/thumbtack/thumbprint-tokens)](https://jitpack.io/#thumbtack/thumbprint-tokens) |

## API

You can use the [Thumbprint Tokens GraphQL server](https://thumbprint-tokens.netlify.com/) to query tokens and view the schema.

## Releasing

1. Run `git checkout master && git pull` to get the latest changes.
2. Add the new version number to the `CHANGELOG.md`.
3. Commit the changes on `master` with `git add CHANGELOG.md && git commit -m "Preparing for release."`
4. Run `yarn release`.

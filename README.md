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

1. **Pull latest changes:** Run `git checkout master && git pull` to grab the latest changes rom GitHub.
2. **Update the changelog:** Open the `CHANGELOG.md` file and look at the unreleased changes. Add the new version number ([following SemVer](https://semver.org/)) and date as a heading under the `## Unreleased` heading.
3. **Commit the changelog changes**: Commit the changes on `master` with `git add CHANGELOG.md && git commit -m "Preparing for release."`
4. **Release to NPM**: Run `yarn release`. It will prompt you for the new version number, run tests, and the publish to NPM.
5. **Publish to CocoaPods:** Run `pod trunk push` to publish this to CocoaPods.

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

Button, Theme, Title Color, Active, primary Tokens should follow this recommended hierarchy: `[<component-name>] <category-name> [<option-name> <state>] <token>`.

-   For example, a simple token category like Space would look like:
    ```
    Space (Category)
      |
      |--- one (Token)
      |--- two
      ...
    ```
-   A more complex, component-level token category such as button themes might have a structure like:
    ```
    Button (Component)
      |
      |--- Theme (Category)
             |
             |--- Title Color (Option)
                    |
                    |--- Default (State)
                      |
                      |--- primary (Token)
                      |--- secondary
                      |--- tertiary
                      |--- caution
                      |--- solid
                    |--- Active
                      |
                      |--- primary
                      |--- secondary
                      |--- ...
                    |--- Disabled
                      |
                      |--- primary
                      |--- secondary
                      |--- ...
             |--- Background Color
                    |
                    |--- Default
                      |
                      |--- ...
                    |--- Active
                      |
                      |--- ...
                    |--- Disabled
                      |
                      |--- ...
             |--- Border Color
                    |
                    |--- Default
                      |
                      |--- ...
                    |--- Active
                      |
                      |--- ...
                    |--- Disabled
                      |
                      |--- ...
      |--- Size
             |
             |--- ...
    ```

## Updating tokens

1. **Make changes to tokens:** Make the desired changes to `src/tokens.js`.
2. **Update tests:** Run `yarn test` to run the test suite. Assuming you made substantive changes to the tokens, the tests should fail, printing a diff of expected vs. actual output. If the diff looks correct based on the changes you made, run `yarn test:jest -u` to save these changes as the new expected baseline.
3. **Update the changeload:** In `CHANGELOG.md`, summarize your changes under the "Unreleased" heading.
4. **Submit pull request:** Commit all changes and submit a new pull request.

## Releasing

1. **Pull latest changes:** Run `git checkout master && git pull` to grab the latest changes rom GitHub.
2. **Update the changelog:** Open the `CHANGELOG.md` file and look at the unreleased changes. Add the new version number ([following SemVer](https://semver.org/)) and date as a heading under the `## Unreleased` heading.
3. **Commit the changelog changes**: Commit the changes on `master` with `git add CHANGELOG.md && git commit -m "Preparing for release."`
4. **Release to NPM**: Run `yarn release`. It will prompt you for the new version number, run tests, and the publish to NPM.
5. **Publish to CocoaPods:** Run `pod trunk push` to publish this to CocoaPods.
6. **Publish to JitPack:** Visit `https://jitpack.io/com/github/thumbtack/thumbprint-tokens/v12.1.1/build.log` but replace `12.1.1` with the new version number. This will kick off a build in JitPack which will be indicated [on the JitPack Thumbprint Tokens page](https://jitpack.io/#thumbtack/thumbprint-tokens/).

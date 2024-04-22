# How to make a release

1. From the commit you wish to publish as a new release (most often that’s from a freshly-pulled `main`), switch to a new branch.
1. Update the version number in `package.json`.
1. Update CHANGELOG.md. If there is an `UNRELEASED` section, change that to the following format: `## [[<version number>]](https://github.com/bitcrowd/bitstyles/releases/tag/<version-number>) - <date>`, replacing `<version-number>` with the new version number, and `<date>` with the current date.
1. Push the branch and create a PR from it.
1. Once your PR is merged, switch to the `main` branch and pull.
1. Create a git tag for the new version with `git tag -a v<version-number> -m "v<version-number>"`, where `<version-number>` is the new version number.
1. Push the new tag to github with `git push --tags`.
1. Run `yarn` then `yarn build` to create the built CSS file in `/build`. Do not check this in (it is in `.gitignore`).
1. If you are publishing the latest version, publish to NPM with `npm publish` (this will include the built CSS). If you are not publishing the latest version (perhaps you’re publishing a patch to an earlier version), you need to specify an npm tag. This is not the same thing as a git tag! To publish a newer version of an older major version number, use e.g. `npm publish --tag version-5`, using the correct major version number.

# Contributing

## Getting started

The project requires a recent version of [NodeJS](https://nodejs.org/en/) and uses [yarn](https://yarnpkg.com/en/docs/install) as its package manager. See the `.tool-versions` file for the specific NodeJS version and use your version manager of choice (e.g. [asdf](https://asdf-vm.com/) or [nvm](https://github.com/creationix/nvm)) to install it.

Next, clone this repository, and install packages:

```sh
git clone git@github.com:bitcrowd/bitstyles.git
cd bitstyles
yarn install
```

## Build

To build the whole library once, run

```sh
yarn build
```

To recompile the Sass on every change (while working on changes, for example):

```sh
yarn watch
```

## Linting

This project uses [stylelint](https://github.com/stylelint/stylelint) and [prettier](https://prettier.io) to ensure code consistency. All PRs should be checked before merging:

```sh
yarn lint
```

You can also run linting on js, scss, or mdx files separately using the respective commands:

```sh
yarn lint:js
yarn lint:scss
yarn prettier:docs
```

This is useful for automatically fixing linting errors by passing the `--fix` parameter (which will not work with the rolled-into-one `lint` command, only these individual commands) e.g.

```sh
yarn lint:scss --fix
```

## Testing

After adding or changing anything that affects the final output CSS, you’ll need to update the fixtures. These record the expected state of the CSS output by the entire library in its default state, and when some configuration is being overidden.

Run the build & comparison:

```sh
yarn test
```

The output in terminal will show which lines differ from the current CSS output. This may be because of a bug introduced on the current branch, in which case the fixture should stay the same but your changes to source need to be corrected. If the change is expected, update the fixture to match, and commit the changes.

## Component library

We use [Storybook](https://storybook.js.org) to provide a single navigable library of the classes in bitstyles, and the associated documentation.

When updating existing modules, be sure to update the necessary documentation in storybook, and provide meaningful stories that test the CSS, or illustrate its usage. When adding new modules, include a new `<module name>.stories.mdx` file, and follow the format of existing docs as best you can.

To view the storybook locally:

```sh
yarn storybook
```

Storybook will automatically open in a new tab in your default browser.

## Deploying storybook documentation

The storybook documentation is automatically deployed when a branch is merged to `main`.

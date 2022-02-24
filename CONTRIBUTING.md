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

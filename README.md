# Bitstyles

[![Linting & tests](https://github.com/bitcrowd/bitstyles/actions/workflows/run-checks.yml/badge.svg)](https://github.com/bitcrowd/bitstyles/actions/workflows/run-checks.yml)
![npm version](https://img.shields.io/npm/v/bitstyles)

Bitstyles is a collection of tiny Sass CSS objects and helpers, intended to be used by reasonably CSS- & HTML-aware frontend developers. This is no simple drop-in solution to skin a website, rather a collection of focused object-classes, each defining just a single visual aspect. By using these simple building blocks in your HTML, it’s possible to construct complex layouts without repeating CSS.

There is a layer of more complex components built using these low-level classes — see the `UI` layer in the documentation linked below — that provides examples of many common structures needed for admin interfaces. These are suitable for less UI-focused developers, and are copy- & pasteable into any project that uses bitstyles. For those using the [elixir phoenix framework](https://www.phoenixframework.org), there is also [BitstylesPhoenix](https://github.com/bitcrowd/bitstyles_phoenix), which provides helpers for generating the HTML structure for many of the UI components.

## Documentation

See how to get started, and read the full documentation for each module, with examples, at [https://bitcrowd.github.io/bitstyles/](https://bitcrowd.github.io/bitstyles/).

## Contributing

See [the contributing guide](./CONTRIBUTING.md) for an introduction to opening a PR on bitstyles.

## Font license

The Nunito webfont is included in Bitstyles, and is licensed under the [SIL Open Font License, 1.1](https://scripts.sil.org/ofl). Copyright 2014 The Nunito Project Authors (https://github.com/googlefonts/nunito).

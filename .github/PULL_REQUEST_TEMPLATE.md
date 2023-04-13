Fixes #

## Changes

- _Insert list of changes_

## 📸 Looks like

_Insert screenshots and/or videos here_

## How to QA

_Update these checklists as necessary_

### 👀 Visual changes

_Insert a detailed list explaining exactly how to QA your changes from a designer’s PoV_

- `git fetch`
- `git checkout <pr-branch-name>`
- `yarn`
- `yarn storybook`
- navigate to _enter component name_ component

Check:

- [ ] The appearance matches the design in Zeplin
- [ ] The Zeplin component is correctly linked in storybook
- [ ] The documentation for this component is correct, understandable, and up-to-date.

### 👾 Code changes

Check:

- [ ] The documentation for this component is correct, understandable, and up-to-date.
- [ ] The component makes good use of CSS custom properties to simplify creating variants (or doesn’t have variants).
- [ ] Everything that should be a variable, is.

## Preflight checks

_PR author to check, and delete if not applicable_

- [ ] Storybook documentation has been updated
- [ ] Fixtures in [`test/scss/`](../test/scss/) have been updated
- [ ] Your changes have been added to the `unreleased` section of [CHANGELOG.md](../CHANGELOG.md)

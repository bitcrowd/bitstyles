import Readme from './button.md';

export default {
  title: 'Objects/Button',
  parameters: {
    readme: {
      sidebar: Readme,
    },
  },
};

export const buttonElement = () => `
  <button class="o-button">
    <span class="o-button__label">Button Text</span>
  </button>
`;

export const buttonAnchorElement = () => `
  <a href="#" class="o-button">
    <span class="o-button__label">Button Text</span>
  </a>
`;

export const buttonDisabled = () => `
  <button class="o-button" disabled>
    <span class="o-button__label">Button Text</span>
  </button>
`;

export const buttonWithIcon = () => `
  <button class="o-button">
    <svg aria-hidden="true" class="o-button__icon o-icon" viewBox="0 0 100 100" width="20" height="20" xmlns="http://www.w3.org/2000/svg"><path d="m55.94 1.03v43h43v12h-43v43h-12v-43h-43v-12h43v-43z" fill-rule="evenodd"/></svg>
    <span class="o-button__label">Button Text</span>
  </button>
`;

export const buttonWithIconReversed = () => `
  <button class="o-button">
    <span class="o-button__label">Button Text</span>
    <svg aria-hidden="true" class="o-button__icon o-icon" viewBox="0 0 100 100" width="20" height="20" xmlns="http://www.w3.org/2000/svg"><path d="m55.94 1.03v43h43v12h-43v43h-12v-43h-43v-12h43v-43z" fill-rule="evenodd"/></svg>
  </button>
`;

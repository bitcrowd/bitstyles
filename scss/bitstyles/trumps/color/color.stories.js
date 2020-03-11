import Readme from './color.md';

export default {
  title: 'Trumps/Color',
  parameters: {
    readme: {
      sidebar: Readme,
    },
  },
};

export const colorPrimary = () => `
  <p class="t-color--primary">Some content here</p>
`;

export const colorSecondary = () => `
  <p class="t-color--secondary">Some content here</p>
`;

export const colorError = () => `
  <p class="t-color--error">Some content here</p>
`;

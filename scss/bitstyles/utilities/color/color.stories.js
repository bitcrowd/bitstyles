import Readme from './color.md';

export default {
  title: 'Utilities/Color',
  parameters: {
    readme: {
      sidebar: Readme,
    },
  },
};

export const colorPrimary = () => `
  <p class="u-color--primary">Some content here</p>
`;

export const colorSecondary = () => `
  <p class="u-color--secondary">Some content here</p>
`;

export const colorError = () => `
  <p class="u-color--error">Some content here</p>
`;

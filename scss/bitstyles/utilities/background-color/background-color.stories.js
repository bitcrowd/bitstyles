import Readme from './background-color.md';

export default {
  title: 'Utilities/Background color',
  parameters: {
    readme: {
      sidebar: Readme,
    },
  },
};

export const backgroundColorBackground = () => `
  <p class="u-background-color--background">Some content here</p>
`;

export const backgroundColorSecondary = () => `
  <p class="u-background-color--secondary">Some content here</p>
`;

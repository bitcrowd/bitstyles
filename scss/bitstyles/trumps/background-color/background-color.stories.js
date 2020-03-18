import Readme from './background-color.md';

export default {
  title: 'Trumps/Background color',
  parameters: {
    readme: {
      sidebar: Readme,
    },
  },
};

export const backgroundColorBackground = () => `
  <p class="t-background-color--background">Some content here</p>
`;

export const backgroundColorSecondary = () => `
  <p class="t-background-color--secondary">Some content here</p>
`;

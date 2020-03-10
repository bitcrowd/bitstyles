import Readme from './link.md';

export default {
  title: 'Objects/Link',
  parameters: {
    readme: {
      sidebar: Readme,
    },
  },
};

export const link = () => `
  <button class="o-link">Privacy Policy</button>
`;

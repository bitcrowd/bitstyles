import Readme from './visuallyhidden.md';

export default {
  title: 'Objects/Visuallyhidden',
  parameters: {
    readme: {
      sidebar: Readme,
    },
  },
};

export const visuallyhidden = () => `
  <button class="o-button">
    <span class="o-button__label">Next</span>
    <span class="o-visuallyhidden">articles</span>
  </button>
`;

import Readme from './text-style.md';

export default {
  title: 'Utilities/Text style',
  parameters: {
    readme: {
      sidebar: Readme,
    },
  },
};

export const textStyleItalic = () => `
  <p class="u-text-style--italic">Some content here</p>
`;

export const textStyleNomal = () => `
  <p class="u-text-style--normal">Some content here</p>
`;

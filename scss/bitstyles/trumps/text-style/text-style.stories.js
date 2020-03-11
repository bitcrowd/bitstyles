import Readme from './text-style.md';

export default {
  title: 'Trumps/Text style',
  parameters: {
    readme: {
      sidebar: Readme,
    },
  },
};

export const textStyleItalic = () => `
  <p class="t-text-style--italic">Some content here</p>
`;

export const textStyleNomal = () => `
  <p class="t-text-style--normal">Some content here</p>
`;

import Readme from './text-align.md';

export default {
  title: 'Utilities/Text align',
  parameters: {
    readme: {
      sidebar: Readme,
    },
  },
};

export const textAlignLeft = () => `
  <p class="u-text-align--left">Some content here</p>
`;

export const textAlignRight = () => `
  <p class="u-text-align--right">Some content here</p>
`;

export const textAlignCenter = () => `
  <p class="u-text-align--center">Some content here</p>
`;

export const textAlignJustify = () => `
  <p class="u-text-align--justify">Some content here</p>
`;

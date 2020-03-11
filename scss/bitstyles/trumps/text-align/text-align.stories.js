import Readme from './text-align.md';

export default {
  title: 'Trumps/Text align',
  parameters: {
    readme: {
      sidebar: Readme,
    },
  },
};

export const textAlignLeft = () => `
  <p class="t-text-align--left">Some content here</p>
`;

export const textAlignRight = () => `
  <p class="t-text-align--right">Some content here</p>
`;

export const textAlignCenter = () => `
  <p class="t-text-align--center">Some content here</p>
`;

export const textAlignJustify = () => `
  <p class="t-text-align--justify">Some content here</p>
`;

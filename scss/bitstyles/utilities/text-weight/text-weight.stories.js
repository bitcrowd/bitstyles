import Readme from './text-weight.md';

export default {
  title: 'Utilities/Text weight',
  parameters: {
    readme: {
      sidebar: Readme,
    },
  },
};

export const textWeightLight = () => `
  <p class="u-text-weight--light">Some content here</p>
`;

export const textWeightNormal = () => `
  <p class="u-text-weight--normal">Some content here</p>
`;

export const textWeightBold = () => `
  <p class="u-text-weight--bold">Some content here</p>
`;

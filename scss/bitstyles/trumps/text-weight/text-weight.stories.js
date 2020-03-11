import Readme from './text-weight.md';

export default {
  title: 'Trumps/Text weight',
  parameters: {
    readme: {
      sidebar: Readme,
    },
  },
};

export const textWeightLight = () => `
  <p class="t-text-weight--light">Some content here</p>
`;

export const textWeightNormal = () => `
  <p class="t-text-weight--normal">Some content here</p>
`;

export const textWeightBold = () => `
  <p class="t-text-weight--bold">Some content here</p>
`;

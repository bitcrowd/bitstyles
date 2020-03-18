import Readme from './no-padding.md';

export default {
  title: 'Utilities/No padding',
  parameters: {
    readme: {
      sidebar: Readme,
    },
  },
};

export const noPaddingTop = () => `
  <div class="u-no-padding--top">
    <div class="u-background-color--secondary">Some content here</div>
  </div>
`;

export const noPaddingRight = () => `
  <div class="u-no-padding--right">
    <div class="u-background-color--secondary">Some content here</div>
  </div>
`;

export const noPaddingBottom = () => `
  <div class="u-no-padding--bottom">
    <div class="u-background-color--secondary">Some content here</div>
  </div>
`;

export const noPaddingLeft = () => `
  <div class="u-no-padding--left">
    <div class="u-background-color--secondary">Some content here</div>
  </div>
`;

export const noPadding = () => `
  <div class="u-no-padding">
    <div class="u-background-color--secondary">Some content here</div>
  </div>
`;

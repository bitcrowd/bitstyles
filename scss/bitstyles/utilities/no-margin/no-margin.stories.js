import Readme from './no-margin.md';

export default {
  title: 'Utilities/No margin',
  parameters: {
    readme: {
      sidebar: Readme,
    },
  },
};

export const noMarginTop = () => `
  <div class="u-no-margin--top">
    <div class="u-background-color--secondary">Some content here</div>
  </div>
`;

export const noMarginRight = () => `
  <div class="u-no-margin--right">
    <div class="u-background-color--secondary">Some content here</div>
  </div>
`;

export const noMarginBottom = () => `
  <div class="u-no-margin--bottom">
    <div class="u-background-color--secondary">Some content here</div>
  </div>
`;

export const noMarginLeft = () => `
  <div class="u-no-margin--left">
    <div class="u-background-color--secondary">Some content here</div>
  </div>
`;

export const noMargin = () => `
  <div class="u-no-margin">
    <div class="u-background-color--secondary">Some content here</div>
  </div>
`;

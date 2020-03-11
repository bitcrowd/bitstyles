import Readme from './no-margin.md';

export default {
  title: 'Trumps/No margin',
  parameters: {
    readme: {
      sidebar: Readme,
    },
  },
};

export const noMarginTop = () => `
  <div class="t-no-margin--top">
    <div class="t-background-color--secondary">Some content here</div>
  </div>
`;

export const noMarginRight = () => `
  <div class="t-no-margin--right">
    <div class="t-background-color--secondary">Some content here</div>
  </div>
`;

export const noMarginBottom = () => `
  <div class="t-no-margin--bottom">
    <div class="t-background-color--secondary">Some content here</div>
  </div>
`;

export const noMarginLeft = () => `
  <div class="t-no-margin--left">
    <div class="t-background-color--secondary">Some content here</div>
  </div>
`;

export const noMargin = () => `
  <div class="t-no-margin">
    <div class="t-background-color--secondary">Some content here</div>
  </div>
`;

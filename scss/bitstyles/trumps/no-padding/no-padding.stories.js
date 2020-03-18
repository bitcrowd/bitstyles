import Readme from './no-padding.md';

export default {
  title: 'Trumps/No padding',
  parameters: {
    readme: {
      sidebar: Readme,
    },
  },
};

export const noPaddingTop = () => `
  <div class="t-no-padding--top">
    <div class="t-background-color--secondary">Some content here</div>
  </div>
`;

export const noPaddingRight = () => `
  <div class="t-no-padding--right">
    <div class="t-background-color--secondary">Some content here</div>
  </div>
`;

export const noPaddingBottom = () => `
  <div class="t-no-padding--bottom">
    <div class="t-background-color--secondary">Some content here</div>
  </div>
`;

export const noPaddingLeft = () => `
  <div class="t-no-padding--left">
    <div class="t-background-color--secondary">Some content here</div>
  </div>
`;

export const noPadding = () => `
  <div class="t-no-padding">
    <div class="t-background-color--secondary">Some content here</div>
  </div>
`;

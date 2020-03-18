import Readme from './padding.md';

export default {
  title: 'Trumps/Padding',
  parameters: {
    readme: {
      sidebar: Readme,
    },
  },
};

export const paddingTop = () => `
  <div class="t-padding--top">
    <div class="t-background-color--secondary">Some content here</div>
  </div>
`;

export const paddingRight = () => `
  <div class="t-padding--right">
    <div class="t-background-color--secondary">Some content here</div>
  </div>
`;

export const paddingBottom = () => `
  <div class="t-padding--bottom">
    <div class="t-background-color--secondary">Some content here</div>
  </div>
`;

export const paddingLeft = () => `
  <div class="t-padding--left">
    <div class="t-background-color--secondary">Some content here</div>
  </div>
`;

export const padding = () => `
  <div class="t-padding">
    <div class="t-background-color--secondary">Some content here</div>
  </div>
`;

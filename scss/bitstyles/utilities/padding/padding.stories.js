import Readme from './padding.md';

export default {
  title: 'Utilities/Padding',
  parameters: {
    readme: {
      sidebar: Readme,
    },
  },
};

export const paddingTop = () => `
  <div class="u-padding--top">
    <div class="u-background-color--secondary">Some content here</div>
  </div>
`;

export const paddingRight = () => `
  <div class="u-padding--right">
    <div class="u-background-color--secondary">Some content here</div>
  </div>
`;

export const paddingBottom = () => `
  <div class="u-padding--bottom">
    <div class="u-background-color--secondary">Some content here</div>
  </div>
`;

export const paddingLeft = () => `
  <div class="u-padding--left">
    <div class="u-background-color--secondary">Some content here</div>
  </div>
`;

export const padding = () => `
  <div class="u-padding">
    <div class="u-background-color--secondary">Some content here</div>
  </div>
`;

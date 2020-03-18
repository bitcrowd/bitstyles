import Readme from './margin.md';

export default {
  title: 'Utilities/Margin',
  parameters: {
    readme: {
      sidebar: Readme,
    },
  },
};

export const marginTop = () => `
  <div class="u-margin--top">
    <div class="u-background-color--secondary">Some content here</div>
  </div>
`;

export const marginRight = () => `
  <div class="u-margin--right">
    <div class="u-background-color--secondary">Some content here</div>
  </div>
`;

export const marginBottom = () => `
  <div class="u-margin--bottom">
    <div class="u-background-color--secondary">Some content here</div>
  </div>
`;

export const marginLeft = () => `
  <div class="u-margin--left">
    <div class="u-background-color--secondary">Some content here</div>
  </div>
`;

export const margin = () => `
  <div class="u-margin">
    <div class="u-background-color--secondary">Some content here</div>
  </div>
`;

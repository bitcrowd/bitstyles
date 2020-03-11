import Readme from './margin.md';

export default {
  title: 'Trumps/Margin',
  parameters: {
    readme: {
      sidebar: Readme,
    },
  },
};

export const marginTop = () => `
  <div class="t-margin--top">
    <div class="t-background-color--secondary">Some content here</div>
  </div>
`;

export const marginRight = () => `
  <div class="t-margin--right">
    <div class="t-background-color--secondary">Some content here</div>
  </div>
`;

export const marginBottom = () => `
  <div class="t-margin--bottom">
    <div class="t-background-color--secondary">Some content here</div>
  </div>
`;

export const marginLeft = () => `
  <div class="t-margin--left">
    <div class="t-background-color--secondary">Some content here</div>
  </div>
`;

export const margin = () => `
  <div class="t-margin">
    <div class="t-background-color--secondary">Some content here</div>
  </div>
`;

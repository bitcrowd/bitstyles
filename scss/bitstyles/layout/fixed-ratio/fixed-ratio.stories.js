import Readme from './fixed-ratio.md';

export default {
  title: 'Layout/Fixed-Ratio',
  parameters: {
    readme: {
      sidebar: Readme,
    },
  },
};

export const fixedRatio = () => `
  <div class="l-fixed-ratio">
    <div class="l-fixed-ratio__inner t-background-color--secondary">
      <div class="l-absolute-center t-text-align--center">16:9 <span class="l-block">(try resizing)</span></div>
    </div>
  </div>
`;

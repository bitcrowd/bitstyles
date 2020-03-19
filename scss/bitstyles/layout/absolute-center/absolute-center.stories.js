import Readme from './absolute-center.md';

export default {
  title: 'Layout/Absolute center',
  parameters: {
    readme: {
      sidebar: Readme,
    },
  },
};

export const absoluteCenter = () => `
  <div class="u-background-color--secondary min-height-block">
    <p class="l-absolute-center">Centered content</p>
  </div>
`;

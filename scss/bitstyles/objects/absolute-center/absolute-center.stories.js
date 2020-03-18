import Readme from './absolute-center.md';

export default {
  title: 'Objects/Absolute center',
  parameters: {
    readme: {
      sidebar: Readme,
    },
  },
};

export const absoluteCenter = () => `
  <div class="t-background-color--secondary min-height-block">
    <p class="o-absolute-center">Centered content</p>
  </div>
`;

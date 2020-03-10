import Readme from './fixed-Ratio.md';

export default {
  title: 'Objects/Fixed-Ratio',
  parameters: {
    readme: {
      sidebar: Readme,
    },
  },
};

export const fixedRatio = () => `
  <div class="o-fixed-ratio">
    <img class="o-fixed-ratio__inner" src="https://placekitten.com/200/300">
  </div>
`;

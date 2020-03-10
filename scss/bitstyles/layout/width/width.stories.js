import Readme from './width.md';

export default {
  title: 'Layout/Width',
  parameters: {
    readme: {
      sidebar: Readme,
    },
  },
};

export const width = () => `
  <div class="l-width--2-of-12">
    <div class="background-grey">2-of-12</div>
  </div>
  <div class="l-width--4-of-12">
    <div class="background-grey">4-of-12</div>
  </div>
  <div class="l-width--6-of-12">
    <div class="background-grey">6-of-12</div>
  </div>
`;

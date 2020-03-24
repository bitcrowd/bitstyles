import Readme from './object-cover.md';
import dummyImage from '../../../../test/assets/images/placeholder-200x300.svg';

export default {
  title: 'Layout/Object cover',
  parameters: {
    readme: {
      sidebar: Readme,
    },
  },
};

export const objectCover = () => `
  <div style="height: 10rem">
    <img
      class="l-object-cover"
      src="${dummyImage}"
      width="200"
      height="300"
      alt="200 x 300 pixel image with 'object-fit: cover' applied"
    />
  </div>
`;

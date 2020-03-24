import Readme from './media.md';
import dummyImage from '../../../../test/assets/images/placeholder-200x300.svg';

export default {
  title: 'Layout/Media',
  parameters: {
    readme: {
      sidebar: Readme,
    },
  },
};

export const media = () => `
  <div class="l-media">
    <img
      class="l-media__feature"
      src="${dummyImage}"
      width="200"
      height="300"
      alt="200 x 300 pixel image"
    />
    <p>Some text here that sits against the featured image on its left, if there’s space for it</p>
  </div>
`;

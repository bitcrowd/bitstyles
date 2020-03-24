import Readme from './images.md';
import dummyImage from '../../../../test/assets/images/placeholder-200x300.svg';

export default {
  title: 'Base/Images',
  parameters: {
    readme: {
      sidebar: Readme,
    },
  },
};

export const img = () => `
  <img
    src="${dummyImage}"
    alt="Always include an alt attribute, even if it’s empty"
    width="200"
    height="300"
  />
`;

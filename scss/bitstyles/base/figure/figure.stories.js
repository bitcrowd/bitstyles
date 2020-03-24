import Readme from './figure.md';
import dummyImage from '../../../../test/assets/images/placeholder-200x300.svg';

export default {
  title: 'Base/Figure',
  parameters: {
    readme: {
      sidebar: Readme,
    },
  },
};

export const figure = () => `
  <figure>
   <img src="${dummyImage}">
   <figcaption>Pudding chocolate jujubes fruitcake caramels</figcaption>
  </figure>
`;

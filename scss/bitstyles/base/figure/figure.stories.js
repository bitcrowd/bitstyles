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
   <img src="${dummyImage}" width="200" height="300" alt="">
   <figcaption>Pudding chocolate jujubes fruitcake caramels</figcaption>
  </figure>
`;

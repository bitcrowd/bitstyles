import Readme from './figure.md';

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
   <img src="https://placekitten.com/200/300">
   <figcaption>A portrait of a kitten</figcaption>
  </figure>
`;

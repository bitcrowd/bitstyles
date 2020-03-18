import Readme from './object-cover.md';

export default {
  title: 'Objects/Object cover',
  parameters: {
    readme: {
      sidebar: Readme,
    },
  },
};

export const objectCover = () => `
  <div style="height: 10rem">
    <img class="o-object-cover" src="https://placekitten.com/200/300">
  </div>
`;

import Readme from './object-cover.md';

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
    <img class="l-object-cover" src="https://placekitten.com/200/300">
  </div>
`;

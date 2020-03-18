import Readme from './media.md';

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
    <img class="l-media__feature" src="https://placekitten.com/200/300"/>
    <p>Some text here that sits against the featured image on its left</p>
  </div>
`;

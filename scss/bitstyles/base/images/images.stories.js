import Readme from './images.md';

export default {
  title: 'Base/Images',
  parameters: {
    readme: {
      sidebar: Readme,
    },
  },
};

export const img = () => `
  <img src="https://placekitten.com/200/300" alt="Always include an alt attribute, even if it’s empty" />
`;

import Readme from './link.md';

export default {
  title: 'Base/Link',
  parameters: {
    readme: {
      sidebar: Readme,
    },
  },
};

export const link = () => `
  <a href="#">Jelly cake marshmallow</a>
`;

import Readme from './hr.md';

export default {
  title: 'Base/Hr',
  parameters: {
    readme: {
      sidebar: Readme,
    },
  },
};

export const hr = () => `
  <hr>
`;

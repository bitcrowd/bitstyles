import Readme from './bordered-header.md';

export default {
  title: 'Objects/Bordered Header',
  parameters: {
    readme: {
      sidebar: Readme,
    },
  },
};


export const borderedHeader = () => `
  <h2 class="o-bordered-header">Bordered header</h2>
`;

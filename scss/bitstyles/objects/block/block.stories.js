import Readme from './block.md';

export default {
  title: 'Objects/Block',
  parameters: {
    readme: {
      sidebar: Readme,
    },
  },
};

export const block = () => `
  <span class="o-block background-grey">Jelly cake marshmallow. Pie cotton candy chupa chups marzipan liquorice cheesecake wafer.</span>
`;

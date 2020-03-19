import Readme from './block.md';

export default {
  title: 'Layout/Block',
  parameters: {
    readme: {
      sidebar: Readme,
    },
  },
};

export const block = () => `
  <span class="l-block t-background-color--secondary">Jelly cake marshmallow. Pie cotton candy chupa chups marzipan liquorice cheesecake wafer.</span>
`;

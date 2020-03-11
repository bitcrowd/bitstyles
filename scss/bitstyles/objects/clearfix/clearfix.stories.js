import Readme from './clearfix.md';

export default {
  title: 'Objects/Clearfix',
  parameters: {
    readme: {
      sidebar: Readme,
    },
  },
};

export const clearfix = () => `
  <div class="o-clearfix t-background-color--secondary">
    <div class="floated-element">Content goes here</div>
    <div class="floated-element">Content goes here</div>
  </div>
`;

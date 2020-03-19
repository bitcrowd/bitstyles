import Readme from './clearfix.md';

export default {
  title: 'Layout/Clearfix',
  parameters: {
    readme: {
      sidebar: Readme,
    },
  },
};

export const clearfix = () => `
  <div>
    <div class="l-clearfix u-background-color--secondary">
      <div class="l-clearfix" style="float: left;">Floated content here</div>
      <div class="l-clearfix" style="float: left;">Floated content here</div>
    </div>
    <p>This content is cleared (try removing the clearfix class above, in your browser’s web inspector)</p>
  </div>
`;

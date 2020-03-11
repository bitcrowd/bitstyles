import Readme from './absolute-cover.md';

export default {
  title: 'Objects/Absolute cover',
  parameters: {
    readme: {
      sidebar: Readme,
    },
  },
};

export const absoluteCover = () => `
  <div class="o-absolute-cover t-background-color--secondary">
    <p>Covering content</p>
  </div>
`;

import Readme from './absolute-cover.md';

export default {
  title: 'Layout/Absolute cover',
  parameters: {
    readme: {
      sidebar: Readme,
    },
  },
};

export const absoluteCover = () => `
  <div class="l-absolute-cover t-background-color--secondary">
    <p>Covering content</p>
  </div>
`;

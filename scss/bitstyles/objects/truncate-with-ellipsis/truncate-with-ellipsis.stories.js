import Readme from './truncate-with-ellipsis.md';

export default {
  title: 'Objects/Truncate with Ellipsis',
  parameters: {
    readme: {
      sidebar: Readme,
    },
  },
};

export const truncateWithEllipsis = () => `
  <div class="l-width--2-of-12 t-background-color--secondary">
    <p class="o-truncate-with-ellipsis">Truncated content goes here</p>
  </div>
`;

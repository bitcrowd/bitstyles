import Readme from './vertical-center.md';

export default {
  title: 'Layout/Vertical Center',
  parameters: {
    readme: {
      sidebar: Readme,
    },
  },
};

export const verticalCenter = () => `
  <div class="u-background-color--secondary">
    <p class="l-vertical-center">Vertically-centered content here</p>
  </div>
`;

import Readme from './topbar.md';

export default {
  title: 'Layout/Topbar',
  parameters: {
    readme: {
      sidebar: Readme,
    },
  },
};

export const topbar = () => `
  <header class="l-topbar">
    <h1 class="o-h2 t-no-margin">Logo, menu, search, and other important nav</h1>
  </header>
`;

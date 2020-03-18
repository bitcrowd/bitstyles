import Readme from './button--icon.md';

export default {
  title: 'Objects/Button--icon',
  parameters: {
    readme: {
      sidebar: Readme,
    },
  },
};

export const buttonIcon = () => `
  <button class="o-button o-button--icon">
    <svg class="o-icon" viewBox="0 0 100 100" width="20" height="20" xmlns="http://www.w3.org/2000/svg"><path d="m55.94 1.03v43h43v12h-43v43h-12v-43h-43v-12h43v-43z" fill-rule="evenodd"/></svg>
  </button>
`;

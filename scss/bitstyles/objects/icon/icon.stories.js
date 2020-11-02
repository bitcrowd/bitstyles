import Readme from './icon.md';

export default {
  title: 'Objects/Icon',
  parameters: {
    readme: {
      sidebar: Readme,
    },
  },
};

export const icon = () => `
  <svg class="o-icon" viewBox="0 0 100 100" width="20" height="20" xmlns="http://www.w3.org/2000/svg">
    <path d="m55.94 1.03v43h43v12h-43v43h-12v-43h-43v-12h43v-43z" fill-rule="evenodd"/>
  </svg>
`;

export const iconSmall = () => `
  <svg class="o-icon o-icon--s" viewBox="0 0 100 100" width="20" height="20" xmlns="http://www.w3.org/2000/svg">
    <path d="m55.94 1.03v43h43v12h-43v43h-12v-43h-43v-12h43v-43z" fill-rule="evenodd"/>
  </svg>
`;

export const iconMedium = () => `
  <svg class="o-icon o-icon--m" viewBox="0 0 100 100" width="20" height="20" xmlns="http://www.w3.org/2000/svg">
    <path d="m55.94 1.03v43h43v12h-43v43h-12v-43h-43v-12h43v-43z" fill-rule="evenodd"/>
  </svg>
`;

export const iconLarge = () => `
  <svg class="o-icon o-icon--l" viewBox="0 0 100 100" width="20" height="20" xmlns="http://www.w3.org/2000/svg">
    <path d="m55.94 1.03v43h43v12h-43v43h-12v-43h-43v-12h43v-43z" fill-rule="evenodd"/>
  </svg>
`;

import Readme from './flex.md';

export default {
  title: 'Layout/Flex',
  parameters: {
    readme: {
      sidebar: Readme,
    },
  },
};

export const flex = () => `
  <ul class="l-flex o-list-reset">
    <li>List item one</li>
    <li class="l-flex__primary t-background-color--secondary">Important content here</li>
    <li>List item three</li>
    <li>List item four</li>
  </ul>
`;

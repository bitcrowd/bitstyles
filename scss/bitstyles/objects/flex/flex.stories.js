import Readme from './flex.md';

export default {
  title: 'Objects/Flex',
  parameters: {
    readme: {
      sidebar: Readme,
    },
  },
};

export const flex = () => `
  <ul class="o-flex o-list-reset">
    <li>List item one</li>
    <li class="o-flex__primary">Important content here</li>
    <li>List item three</li>
    <li>List item four</li>
  </ul>
`;

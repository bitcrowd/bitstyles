import Readme from './list-reset.md';

export default {
  title: 'Objects/List Reset',
  parameters: {
    readme: {
      sidebar: Readme,
    },
  },
};

export const listReset = () => `
  <ul class="o-list-reset--bullets-only">
    <li><a href="#one">link one</a></li>
    <li><a href="#two">link two</a></li>
    <li><a href="#three">link three</a></li>
  </ul>
`;

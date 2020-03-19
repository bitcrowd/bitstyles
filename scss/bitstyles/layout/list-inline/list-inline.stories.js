import Readme from './list-inline.md';

export default {
  title: 'Layout/List Inline',
  parameters: {
    readme: {
      sidebar: Readme,
    },
  },
};

export const listInline = () => `
  <ul class="l-list-inline">
    <li><a href="#one">link one</a></li>
    <li><a href="#two">link two</a></li>
    <li><a href="#three">link three</a></li>
  </ul>
`;

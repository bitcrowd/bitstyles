import Readme from './hidden.md';

export default {
  title: 'Objects/Hidden',
  parameters: {
    readme: {
      sidebar: Readme,
    },
  },
};

export const hidden = () => `
  <p>Paragraph 1 content</p>
  <p class="u-hidden">Paragraph 2 content</p>
  <p>Paragraph 3 content</p>
`;

export const hiddenAtSmallOnly = () => `
  <p>Paragraph 1 content</p>
  <p class="u-hidden@small-only">Paragraph 2 content</p>
  <p>Paragraph 3 content</p>
`;

export const hiddenAtLarge = () => `
  <p>Paragraph 1 content</p>
  <p class="u-hidden@large">Paragraph 2 content</p>
  <p>Paragraph 3 content</p>
`;

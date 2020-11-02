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
  <p class="u-hidden@s">Paragraph 2 content</p>
  <p>Paragraph 3 content</p>
`;

export const hiddenAtMedium = () => `
  <p>Paragraph 1 content</p>
  <p class="u-hidden@s">Paragraph 2 content</p>
  <p>Paragraph 3 content</p>
`;

export const hiddenAtLarge = () => `
  <p>Paragraph 1 content</p>
  <p class="u-hidden@l">Paragraph 2 content</p>
  <p>Paragraph 3 content</p>
`;

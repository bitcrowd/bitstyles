import Readme from './typography.md';

export default {
  title: 'Objects/Typography',
  parameters: {
    readme: {
      sidebar: Readme,
    },
  },
};

export const headings = () => `
  <h1 class="o-h0">Header 0</h1>
  <h2 class="o-h1">Header 1</h2>
  <h3 class="o-h2">Header 2</h3>
  <h4 class="o-h3">Header 3</h4>
  <h5 class="o-h4">Header 4</h5>
  <h6 class="o-h5">Header 5</h6>
  <h6 class="o-h5">Header 6</h6>
  <h1 class="o-h6">Header 6</h1>
  <h2 class="o-h5">Header 5</h2>
  <h3 class="o-h4">Header 4</h3>
  <h4 class="o-h3">Header 3</h4>
  <h5 class="o-h2">Header 2</h5>
  <h6 class="o-h1">Header 1</h6>
  <h6 class="o-h0">Header 0</h6>
`;

import Readme from './label.md';

export default {
  title: 'Objects/Label',
  parameters: {
    readme: {
      sidebar: Readme,
    },
  },
};

export const label = () => `
  <label class="o-label" for="input_1">This is label text</label>
  <input class="o-input o-input--text" type="text" placeholder="Placeholder text" id="input_1" />
`;

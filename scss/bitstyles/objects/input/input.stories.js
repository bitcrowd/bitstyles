import Readme from './input.md';

export default {
  title: 'Objects/Input',
  parameters: {
    readme: {
      sidebar: Readme,
    },
  },
};

export const input = () => `
  <label class="o-label" for="input_1">This is labeling text</label>
  <input type="text" class="o-input" id="input_1" placeholder="Placeholder text" />
`;

export const inputDisabled = () => `
  <label class="o-label" for="input_1">This is labeling text for a disabled input</label>
  <input type="text" class="o-input" disabled id="input_1" placeholder="Placeholder text" />
`;

export const inputText = () => `
  <label class="o-label" for="input_1">This is labeling text</label>
  <input type="text" class="o-input o-input--text" id="input_1" placeholder="Placeholder text" />
`;

export const inputCheckbox = () => `
  <label class="o-label" for="input_1">This is labeling text</label>
  <input type="checkbox" class="o-input o-input--checkbox" id="input_1" />
`;

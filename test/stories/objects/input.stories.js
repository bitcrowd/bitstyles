export default { title: 'Objects/Input' };

export const input = () => `
  <label class="o-label" for="input_1">This is labeling text</label>
  <input type="text" class="o-input o-input--text" id="input_1" placeholder="Placeholder text" />
`;

export const inputDisabled = () => `
  <label class="o-label" for="input_1">This is labeling text for a disabled input</label>
  <input type="text" class="o-input o-input--text" disabled id="input_1" placeholder="Placeholder text" />
`;

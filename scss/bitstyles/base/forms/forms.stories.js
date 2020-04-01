import Readme from './forms.md';

export default {
  title: 'Base/Forms',
  parameters: {
    readme: {
      sidebar: Readme,
    },
  },
};

export const fieldset = () => `
  <fieldset><legend>Fieldset</legend></fieldset>
`;

export const textarea = () => `
  <textarea placeholder="Placeholder text">Jelly cake marshmallow. Pie cotton candy chupa chups marzipan liquorice cheesecake wafer.</textarea>
`;

export const select = () => `
  <select>
    <option value="value1" selected>Long option text to see some truncation especially in smaller viewports</option>
    <option value="value2">Value 2</option>
    <option value="value3">Value 3</option>
  </select>
`;

export const selectDisabled = () => `
  <select disabled>
    <option value="value1" selected>Value 1</option>
    <option value="value2">Value 2</option>
    <option value="value3">Value 3</option>
  </select>
`;

export const inputTextWithLabel = () => `
  <label class="o-label" for="input_1">This is labeling text</label>
  <input type="text" id="input_1" placeholder="Placeholder text" />
`;

export const inputTextWithLabelDisabled = () => `
  <label class="o-label" for="input_1">This is labeling text for a disabled input</label>
  <input type="text" disabled id="input_1" placeholder="Placeholder text" />
`;

export const inputCheckboxWithLabel = () => `
  <label for="input_1" class="l-flex l-flex--align-center">
    <input type="checkbox" id="input_1" />
    <span class="o-label">This is labeling text</span>
  </label>
`;

export const inputRadiosWithLabel = () => `
  <label for="input_1" class="l-flex l-flex--align-center">
    <input type="radio" id="input_1" name="radio-group_1" />
    <span class="o-label">This is labeling text</span>
  </label>
  <label for="input_2" class="l-flex l-flex--align-center">
    <input type="radio" id="input_2" name="radio-group_1" />
    <span class="o-label">This is labeling text</span>
  </label>
`;

export const label = () => `
  <label>Jelly cake marshmallow. Pie cotton candy chupa chups marzipan liquorice cheesecake wafer.</label>
`;

export const inputText = () => `
  <input type="text" placeholder="Jelly cake marshmallow">
`;

export const inputTextDisabled = () => `
  <input type="text" disabled placeholder="Jelly cake marshmallow">
`;

export const inputEmail = () => `
  <input type="email" placeholder="jellycake@marshmallow.com">
`;

export const inputNumber = () => `
  <input type="number" placeholder="123456789">
`;

export const inputRange = () => `
  <input type="range" min="0" max="10" step="1">
`;

export const inputRadio = () => `
  <input type="radio">
`;

export const inputRadioDisabled = () => `
  <input type="radio" disabled>
`;

export const inputRadioChecked = () => `
  <input type="radio" checked>
`;

export const inputRadioCheckedDisabled = () => `
  <input type="radio" checked disabled>
`;

export const inputCheckbox = () => `
  <input type="checkbox">
`;

export const inputCheckboxDisabled = () => `
  <input type="checkbox" disabled>
`;

export const inputCheckboxChecked = () => `
  <input type="checkbox" checked>
`;

export const inputCheckboxDisabledChecked = () => `
  <input type="checkbox" disabled checked>
`;

export const inputButton = () => `
  <input type="button" value="Button">
`;

export const inputColor = () => `
  <input type="color">
`;

export const inputDate = () => `
  <input type="date">
`;

export const inputDateTimeLocal = () => `
  <input type="datetime-local">
`;

export const inputMonth = () => `
  <input type="month">
`;

export const inputWeek = () => `
  <input type="week">
`;

export const inputFile = () => `
  <input type="file">
`;

export const inputImage = () => `
  <input type="image" src="https://placekitten.com/100/100" alt="Image">
`;

export const inputPassword = () => `
  <input type="password" value="Password">
`;

export const inputReset = () => `
  <input type="reset">
`;

export const inputSearch = () => `
  <input type="search">
`;

export const inputSubmit = () => `
  <input type="submit" value="Submit">
`;

export const inputTel = () => `
  <input type="tel">
`;

export const inputTime = () => `
  <input type="time">
`;

export const inputUrl = () => `
  <input type="url">
`;

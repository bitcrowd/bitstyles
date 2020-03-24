import Readme from './forms.md';
import dummyImage from '../../../../test/assets/images/placeholder-100x100.svg';

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
  <textarea>Jelly cake marshmallow. Pie cotton candy chupa chups marzipan liquorice cheesecake wafer.</textarea>
`;

export const select = () => `
  <select>
    <option value="value1" selected>Value 1</option>
    <option value="value2">Value 2</option>
    <option value="value3">Value 3</option>
  </select>
`;

export const label = () => `
  <label>Jelly cake marshmallow. Pie cotton candy chupa chups marzipan liquorice cheesecake wafer.</label>
`;

export const inputText = () => `
  <input type="text" placeholder="Jelly cake marshmallow">
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

export const inputCheckbox = () => `
  <input type="checkbox">
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
  <input
    type="image"
    src="${dummyImage}"
    alt="Image"
    width="100"
    height="100"
    alt="This element is rarely used these days, as you can style buttons with CSS now. It still requires an alt attribute, like a normal image"
  >
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

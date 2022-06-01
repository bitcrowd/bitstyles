import baseColors from '../exports/_base-colors.scss';
import colorPalette from '../exports/_color-palette.scss';

/*
 * Variables in our Sass are exported via webpack in the form
 * {
 *   background.1: "#fff",
 *   background.2: "#eee",
 *   …
 *   black.1: "000",
 *   …
 * }
 * This function converts it to an array:
 * [
 *   {background.1: "#fff", background.2: "#eee", …}
 *   …
 *   {black.1: "#000", …}
 *   …
 * ]
 */

function parseDotNotation(str, val, obj) {
  let currentObj = obj;
  const keys = str.split('.');
  let i;
  const l = Math.max(1, keys.length - 1);
  let key;

  for (i = 0; i < l; i += 1) {
    key = keys[i];
    currentObj[key] = currentObj[key] || {};
    currentObj = currentObj[key];
  }

  currentObj[keys[i]] = val;
  /* eslint-disable no-param-reassign */
  delete obj[str];
  /* eslint-enable no-param-reassign */
}

function expand(obj) {
  let key;
  /* eslint-disable no-restricted-syntax */
  for (key in obj) {
    if (key.indexOf('.') !== -1) {
      parseDotNotation(key, obj[key], obj);
    }
  }
  /* eslint-enable no-restricted-syntax */
  return obj;
}

const RenderColorItem = (label, color) =>
  `
    <li style="background-color: ${color}; min-height:4rem;" class="u-aspect-ratio-1-1">
      <div
        class="u-margin-xs-left u-margin-xs-top"
        style="font-size: 10px;"
      >
        <strong class="u-bg-white u-padding-xxs-x">${label}</strong>
        <br/>
        <span class="u-bg-white u-padding-xxs-x">${color}</span>
      </div>
    </li>
  `;

const RenderColorRow = ({ colors }) =>
  `
    <ul class="u-flex-grow-1 u-grid u-grid-cols-auto a-list-reset">
      ${Object.entries(colors)
        .map((color) => RenderColorItem(color[0], color[1]))
        .join('')}
    </ul>
  `;

const RenderColorPalette = ({ palette }) => {
  return `
    <ul class="a-list-reset u-grid u-gap-l u-grid-cols-2@m u-grid-cols-3@l">
      ${Object.entries(expand(palette))
        .map((colors) => {
          const name = colors[0];
          return `
          <li class="u-margin-xl-bottom u-grid u-gap-m">
            ${RenderColorRow({ colors: colors[1] })}
            <h3
              class="u-margin-0-bottom u-margin-m-right u-line-height-min"
            >
              ${name}
            </h3>
          </li>
        `;
        })
        .join('')}
    </ul>
  `;
};

const Template = (args) => RenderColorPalette(args);

export const BaseColors = Template.bind({});
BaseColors.args = {
  palette: baseColors,
};

export const ColorPalette = Template.bind({});
ColorPalette.args = {
  palette: colorPalette,
};

export default {
  title: 'Base/Colors',
};

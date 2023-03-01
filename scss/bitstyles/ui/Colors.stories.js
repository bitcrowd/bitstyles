import baseColorValues from '../exports/_base-colors.scss';
import basePaletteValues from '../exports/_base-palette.scss';
import colorPaletteValues from '../exports/_color-palette.scss';

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
    <li style="background-color: ${color}; min-height:3rem;" class="u-aspect-ratio-1-1">
      <div
        class="u-margin-xs-left u-margin-xs-top u-fg-grayscale-dark-2"
        style="font-size: 0.625rem;"
      >
        <strong class="u-bg-white u-padding-2xs-x">${label}</strong>
        <br/>
        <span class="u-bg-white u-padding-2xs-x">${color}</span>
      </div>
    </li>
  `;

const RenderColors = ({ colors, layout }) => {
  let classname;
  switch (layout) {
    case 'dense':
      classname = 'u-flex-grow-1 u-grid u-grid-cols-auto u-list-none';
      break;
    default:
      classname = 'u-flex-grow-1 u-grid u-grid-cols-auto u-list-none u-gap-2xs';
  }

  return `
    <ul class="${classname}">
      ${Object.entries(colors)
        .map((color) => RenderColorItem(color[0], color[1]))
        .join('')}
    </ul>
  `;
};

const RenderColorPaletteItem = ({ colors, withBackground, layout }) => {
  const name = colors[0];
  const style =
    withBackground &&
    baseColorValues[name] &&
    `background-color: ${baseColorValues[name]}; color: #fff`;
  const titleClassname = withBackground
    ? 'u-padding-xs u-padding-m-bottom u-h4 u-margin-0-bottom u-margin-m-right u-line-height-min'
    : 'u-h4 u-margin-0-bottom u-margin-m-right u-line-height-min';

  return `
    <li class="u-flex-grow-1 u-grid u-gap-xs" style="${style}">
      ${RenderColors({ colors: colors[1], layout })}
      <h3 class="${titleClassname}">
        ${name}
      </h3>
    </li>
  `;
};

const RenderColorPaletteList = ({
  palette,
  layout = null,
  withBackground = false,
}) => {
  let classname;
  switch (layout) {
    case 'dense':
      classname =
        'u-list-none u-grid u-gap-l u-grid-cols-2@m u-grid-cols-3@l u-margin-xl-bottom u-items-start';
      break;
    case 'row':
      classname = 'u-list-none u-flex';
      break;
    default:
      classname =
        'u-list-none u-grid u-gap-xl u-margin-xl-bottom u-items-start';
  }

  return `
    <ul class="${classname}">
      ${Object.entries(expand(palette))
        .map((colors) =>
          RenderColorPaletteItem({ colors, withBackground, layout })
        )
        .join('')}
    </ul>
  `;
};

const Template = (args) => RenderColorPaletteList(args);

export const BaseColors = Template.bind({});
BaseColors.args = {
  palette: { base: baseColorValues },
  layout: 'row',
};

export const BasePalette = Template.bind({});
BasePalette.args = {
  palette: basePaletteValues,
  layout: 'dense',
  withBackground: true,
};

export const ColorPalette = Template.bind({});
ColorPalette.args = {
  palette: colorPaletteValues,
};

export default {
  title: 'Base/Colors',
};

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
const objectToChunkedArray = (object, chunkSize) => {
  const values = Object.values(object);
  const array = [];
  let counter = 0;
  let portion = {};

  // eslint-disable-next-line array-callback-return
  Object.keys(object).map(key => {
    if (counter !== 0 && counter % chunkSize === 0) {
      array.push(portion);
      portion = {};
    }
    portion[key] = values[counter];
    counter += 1;
  });
  array.push(portion);
  return array;
};

const ColorItem = (label, color) =>
  `
    <li style="background-color: ${color};">
      <div style="min-height:4rem;"></div>
      <span
        class="u-bg--white u-padding-xxs-x u-margin-xxs-left"
        style="font-size: 10px;"
      >
        ${label}
      </span>
    </li>
  `;

const ColorRow = ({ palette }) =>
  `
    <ul class="u-flex-grow-1 u-grid a-list-reset" style="grid-template-columns: repeat(${
      Object.keys(palette).length
    }, 1fr)">
      ${Object.keys(palette)
        .map(color => {
          const colorNameParts = color.split('.');
          const colorName = colorNameParts[colorNameParts.length - 1];
          return ColorItem(colorName, colorPalette[color]);
        })
        .join('')}
    </ul>
  `;

const ColorPalette = () =>
  `
    <ul class="a-list-reset u-grid u-gap-l">
      ${objectToChunkedArray(colorPalette, 18)
        .map(palette => {
          const name = Object.keys(palette)[0].split('.')[0];
          return `
          <li class="u-margin-xl-bottom u-flex u-items-end">
            <h3
              class="u-margin-0-bottom u-margin-m-right u-text--right u-line-height--min"
              style="min-width: 9rem"
            >
              ${name}
            </h3>
            ${ColorRow({ palette })}
          </li>
        `;
        })
        .join('')}
    </ul>
  `;

export { ColorPalette };

export default {
  title: 'Design Tokens/Colors',
  component: ColorPalette,
};

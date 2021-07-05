import colorPalette from '../exports/_color-palette.scss';

const ColorItem = (label, color) => {
  return `
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
}

const ColorRow = ({ palette }) => {
  return `
    <ul class="u-flex__grow-1 u-grid a-list-reset" style="grid-template-columns: repeat(${
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
};

const ColorPalette = () => {
  const values = Object.values(colorPalette);
  const final = [];
  let counter = 0;
  let portion = {};
  let key;

  for (key in colorPalette) {
    if (counter !== 0 && counter % 18 === 0) {
      final.push(portion);
      portion = {};
    }
    portion[key] = values[counter];
    counter += 1;
  }
  final.push(portion);

  return `
    <ul class="a-list-reset u-grid u-gap-l">
      ${final
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
};

export { ColorPalette };

export default {
  title: 'Design Tokens/Colors',
  component: ColorPalette,
};

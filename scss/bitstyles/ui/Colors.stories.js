import colorPalette from '../settings/_color-palette.scss';

const ColorRow = ({ palette }) => {
  return `
    <ul class="u-flex__grow-1 u-grid a-list-reset" style="grid-template-columns: repeat(18, 1fr)">
      ${Object.keys(palette)
        .map(color => {
          const colorParts = color.split('-');
          const colorName = colorParts[colorParts.length - 1];
          return `
          <li style="background-color: ${colorPalette[color]};">
            <div
              style="
                width: 100%;aspect-ratio: 1 / 1;
              "
            ></div>
            <div
              style="
                font-size: 10px;
                transform: rotateZ(90deg);
                transform-origin: 0 100%;
              "
            >
              ${colorName}
            </div>
          </li>
        `;
        })
        .join('')}
    </ul>
  `;
};

const ColorList = () => {
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
          const name = Object.keys(palette)[0].split('-')[0];
          return `
          <li class="u-margin-xl-bottom u-flex u-items-center">
            <h3
              class="u-margin-bottom-0 u-margin-m-right u-text--right"
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

export { ColorList };

export default {
  title: 'UI/ColorList',
  component: ColorList,
};

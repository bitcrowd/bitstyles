import { React } from 'react';
import colorPalette from '../settings/_color-palette.scss';

const ColorList = () => {
  console.debug(colorPalette);
  return (
    <ul className="u-flex a-list-reset">
      {Object.keys(colorPalette).map(color => {
        console.debug(color);
        return (
          <li className="u-flex__shrink-1">
            <div
              style={{
                backgroundColor: colorPalette[color],
                display: 'block',
                height: '4em',
              }}
            />
            <div>{color}</div>
            <small>{colorPalette[color]}</small>
          </li>
        );
      })}
    </ul>
  );
};

export default ColorList;

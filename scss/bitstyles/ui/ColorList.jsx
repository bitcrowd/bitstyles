import { React } from 'react';
import colors from '../settings/_color-palette.scss';

const ColorList = () => {
  return (
    <ul>
      {Object.keys(colors).map(color => (
        <li>
          <span
            style={{
              backgroundColor: colors[color],
              display: 'block',
              height: '4em',
              marginBottom: '0.3em',
              borderRadius: '5px',
              border: '1px solid lightgray',
            }}
          />
          <span>{color}</span>
          <span>{colors[color]}</span>
        </li>
      ))}
    </ul>
  );
};

export default ColorList;

import { generateLabel } from '../../../../.storybook/helpers';
import icons from '../../../../assets/images/icons.svg';
import Button from '../button/Button';

const Icon = ({ name }) =>
  `<svg width="24" height="24" class="a-icon a-icon--xl" aria-hidden="true" focusable="false"><use xlink:href="${icons}#icon-${name}"></use></svg>`;

const LiveRegion = ({ children }) => {
  const liveRegion = document.createElement('div');
  liveRegion.setAttribute('aria-live', 'polite');
  liveRegion.appendChild(children);
  return liveRegion;
};

export default ({ children, theme = 'brand-1', icon, onClick = null }) => {
  const flash = document.createElement('div');
  flash.classList.add('a-flash');
  flash.setAttribute('data-theme', theme);
  if (icon) flash.innerHTML = Icon({ name: icon });

  const label = document.createElement('span');
  label.classList.add('u-flex-grow-1', 'u-flex-shrink-1', 'u-min-width-0');
  label.innerHTML = children || generateLabel([theme]);
  flash.append(label);

  if (typeof onClick === 'function') {
    flash.appendChild(
      Button({
        shapeVariant: ['x-small', 'square'],
        children: Icon({ name: 'cross' }),
        onClick,
      })
    );
  }
  return LiveRegion({ children: flash });
};

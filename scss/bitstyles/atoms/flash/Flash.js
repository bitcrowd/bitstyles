import { generateLabel } from '../../../../.storybook/helpers';
import icons from '../../../../assets/images/icons.svg';

const Icon = ({ name }) => {
  return `<svg width="24" height="24" class="a-icon a-icon--xl" aria-hidden="true" focusable="false"><use xlink:href="${icons}#icon-${name}"></use></svg><span class="u-sr-only">Add</span>`;
};

export default ({ children, theme = 'brand-1', icon, onClick = null }) => {
  const flash = document.createElement('div');
  flash.classList.add('a-flash');
  flash.setAttribute('data-theme', theme);
  if (icon) flash.innerHTML = Icon({ name: icon });
  flash.append(children || generateLabel([theme]));
  return flash;
};

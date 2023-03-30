import { generateLabel } from '../../../../.storybook/helpers';

export default ({ children, theme = 'brand-1', onClick = null }) => {
  const flash = document.createElement('div');
  flash.classList.add('a-flash');
  flash.setAttribute('data-theme', theme);
  flash.innerHTML = children || generateLabel([theme]);
  return flash;
};

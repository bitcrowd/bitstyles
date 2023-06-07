import { generateLabel } from '../../../../.storybook/helpers';

export default ({
  children,
  ariaDisabled = false,
  element = 'a',
  href = '/some-url',
  classname = [],
}) => {
  const link = document.createElement(element);
  link.innerHTML = children || generateLabel(ariaDisabled);
  link.href = href;
  if (element === 'button') {
    link.type = 'button';
    link.classList.add('a-link');
  }
  classname.forEach((cls) => {
    link.classList.add(cls);
  });
  if (ariaDisabled) link.setAttribute('aria-disabled', ariaDisabled);
  return link;
};

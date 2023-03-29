import { generateLabel } from '../../../../.storybook/helpers';

export default ({
  children,
  colorVariant = [],
  shapeVariant = [],
  ariaPressed = false,
  ariaDisabled = false,
  ariaCurrent = false,
  ariaSelected = false,
  disabled = false,
  element = 'button',
  onClick = null,
  classname = [],
}) => {
  const button = document.createElement(element);
  button.innerHTML =
    children ||
    generateLabel(
      shapeVariant,
      colorVariant,
      disabled || ariaDisabled,
      ariaPressed || ariaCurrent || ariaSelected
    );
  button.classList.add('a-button');
  colorVariant.forEach((variant) => {
    button.classList.add(`a-button--${variant}`);
  });
  shapeVariant.forEach((variant) => {
    button.classList.add(`a-button--${variant}`);
  });
  classname.forEach((cls) => {
    button.classList.add(cls);
  });
  if (element === 'button') button.type = 'button';
  if (ariaPressed) button.setAttribute('aria-pressed', ariaPressed);
  if (ariaDisabled) button.setAttribute('aria-disabled', ariaDisabled);
  if (ariaCurrent) button.setAttribute('aria-current', ariaCurrent);
  if (ariaSelected) button.setAttribute('aria-selected', ariaSelected);
  if (disabled) button.setAttribute('disabled', disabled);
  if (typeof onClick === 'function') button.addEventListener('click', onClick);
  return button;
};

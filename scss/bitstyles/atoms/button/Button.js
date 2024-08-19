import { generateButtonLabel } from '../../../../.storybook/helpers';

export default ({
  children,
  colorVariant = [],
  shapeVariant = [],
  role = undefined,
  ariaLabel = undefined,
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
    generateButtonLabel(
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
  if (role) button.setAttribute('role', role);
  if (ariaLabel) button.setAttribute('aria-label', ariaLabel);
  if (ariaPressed) button.setAttribute('aria-pressed', ariaPressed);
  if (ariaDisabled) button.setAttribute('aria-disabled', ariaDisabled);
  if (ariaCurrent) button.setAttribute('aria-current', ariaCurrent);
  if (ariaSelected) button.setAttribute('aria-selected', ariaSelected);
  if (disabled) button.setAttribute('disabled', disabled);
  if (typeof onClick === 'function') button.addEventListener('click', onClick);
  return button;
};

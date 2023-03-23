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
}) => {
  const button = document.createElement(element);
  button.innerHTML = children || 'Button';
  button.classList.add('a-button');
  colorVariant.forEach((variant) => {
    button.classList.add(`a-button--${variant}`);
  });
  shapeVariant.forEach((variant) => {
    button.classList.add(`a-button--${variant}`);
  });
  if (element === 'button') button.type = 'button';
  if (ariaPressed) button.setAttribute('aria-pressed', ariaPressed);
  if (ariaDisabled) button.setAttribute('aria-disabled', ariaDisabled);
  if (ariaCurrent) button.setAttribute('aria-current', ariaCurrent);
  if (ariaSelected) button.setAttribute('aria-selected', ariaSelected);
  if (disabled) button.setAttribute('disabled', disabled);
  return button;
};
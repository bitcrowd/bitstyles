function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function generateLabel(
  shapeVariant,
  colorVariant,
  disabled = false,
  pressed = false
) {
  return capitalizeFirstLetter(
    [
      shapeVariant.length === 0 ? 'Default' : shapeVariant.join(' '),
      colorVariant.length === 0 ? 'Primary' : colorVariant.join(' '),
      disabled ? 'disabled' : null,
      pressed ? 'pressed' : null,
    ].join(' ')
  );
}

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
  if (element === 'button') button.type = 'button';
  if (ariaPressed) button.setAttribute('aria-pressed', ariaPressed);
  if (ariaDisabled) button.setAttribute('aria-disabled', ariaDisabled);
  if (ariaCurrent) button.setAttribute('aria-current', ariaCurrent);
  if (ariaSelected) button.setAttribute('aria-selected', ariaSelected);
  if (disabled) button.setAttribute('disabled', disabled);
  return button;
};

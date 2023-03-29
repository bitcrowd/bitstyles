export const remToPx = (rem, base = 16) => {
  let tempRem = rem;
  if (typeof rem === 'string' || rem instanceof String)
    tempRem = tempRem.replace('rem', '');

  tempRem = Number(tempRem);
  return base * tempRem;
};

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

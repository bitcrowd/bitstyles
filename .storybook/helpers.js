export const remToPx = (rem, base = 16) => {
  let tempRem = rem;
  if (typeof rem === 'string' || rem instanceof String)
    tempRem = tempRem.replace('rem', '');

  tempRem = Number(tempRem);
  return base * tempRem;
};

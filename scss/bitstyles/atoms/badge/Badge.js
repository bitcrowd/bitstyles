export default ({ label, colorVariant, sizeVariant }) => {
  const badge = document.createElement('span');
  badge.innerText = label || 'Badge';
  badge.classList.add('a-badge');
  if (colorVariant) badge.classList.add(`a-badge--${colorVariant}`);
  if (sizeVariant) badge.classList.add(`a-badge--${sizeVariant}`);
  return badge;
};

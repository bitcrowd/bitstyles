export default ({ label, theme = 'grayscale', sizeVariant }) => {
  const badge = document.createElement('span');
  badge.innerText = label || 'Badge';
  badge.classList.add('a-badge');
  if (theme) badge.setAttribute('data-theme', theme);
  if (sizeVariant) badge.classList.add(`a-badge--${sizeVariant}`);
  return badge;
};

import Button from '../button/Button';
import icons from '../../../../assets/images/icons.svg';

export default ({
  label = 'Badge',
  theme = 'grayscale',
  sizeVariant,
  onClick = null,
}) => {
  const badge = document.createElement('span');
  badge.classList.add('a-badge');
  if (theme) badge.setAttribute('data-theme', theme);
  if (sizeVariant) badge.classList.add(`a-badge--${sizeVariant}`);
  if (typeof onClick === 'function') {
    badge.appendChild(
      Button({
        shapeVariant: ['small', 'square', 'round'],
        children: `<svg width="20" height="20" class="a-icon a-icon--m" aria-hidden="true" focusable="false"><use xlink:href="${icons}#icon-plus"></use></svg><span class="u-sr-only">Add</span>`,
        onClick,
        classname: ['a-badge__button'],
      })
    );
  }
  badge.append(label);
  return badge;
};

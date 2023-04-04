import Button from '../button/Button';

export default ({ alignment = [], children }) => {
  const wrapper = document.createElement('div');
  const wrapperClasslist = alignment.includes('right') ? 'u-justify-end' : null;
  wrapper.classList.add('u-relative', 'u-flex', wrapperClasslist);
  const button = Button({
    children: 'Account',
    colorVariant: ['outline'],
    ariaPressed: true,
  });
  wrapper.appendChild(button);
  const dropdown = document.createElement('div');
  dropdown.innerHTML = children || 'Dropdown';
  dropdown.classList.add('a-dropdown', 'u-overflow-y-auto');
  alignment.forEach((variant) => {
    dropdown.classList.add(`a-dropdown--${variant}`);
  });
  wrapper.appendChild(dropdown);
  return wrapper;
};

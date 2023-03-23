export default ({ alignment = [], children }) => {
  const dropdown = document.createElement('div');
  dropdown.innerHTML = children || 'Dropdown';
  dropdown.classList.add('a-dropdown', 'u-overflow-y-auto');
  alignment.forEach((variant) => {
    dropdown.classList.add(`a-dropdown--${variant}`);
  });
  return dropdown;
};

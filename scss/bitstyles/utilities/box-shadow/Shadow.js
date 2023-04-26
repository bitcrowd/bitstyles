export default ({
  children,
  colorVariant = [],
  shadowType = 'box',
  classname = [],
}) => {
  const shadowElement = document.createElement('div');
  shadowElement.innerHTML = children;
  colorVariant.forEach((variant) => {
    shadowElement.classList.add(
      shadowType === 'box' && `u-shadow-${variant}`,
      shadowType === 'drop' && `u-drop-shadow-${variant}`,
      'u-padding-m',
      'u-bg-white'
    );
  });
  classname.forEach((cls) => {
    shadowElement.classList.add(cls);
  });
  return shadowElement;
};

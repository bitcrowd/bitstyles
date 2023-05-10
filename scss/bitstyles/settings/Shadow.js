export default ({ children, colorVariant = [], classname = [] }) => {
  const shadowElement = document.createElement('div');
  shadowElement.innerHTML = children;
  shadowElement.style.filter = `var(--bs-shadow-${colorVariant}-drop)`;
  shadowElement.classList.add('u-padding-m', 'u-bg-white');
  classname.forEach((cls) => {
    shadowElement.classList.add(cls);
  });
  return shadowElement;
};

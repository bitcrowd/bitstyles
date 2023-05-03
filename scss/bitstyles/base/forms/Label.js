export default ({
  children,
  htmlFor = null,
  ariaInvalid = false,
  classnames = [],
}) => {
  const label = document.createElement('label');
  children.forEach((child) => {
    label.append(child);
  });
  if (ariaInvalid) label.setAttribute('aria-invalid', ariaInvalid);
  if (htmlFor) label.setAttribute('for', htmlFor);
  classnames.forEach((classname) => label.classList.add(classname));
  return label;
};

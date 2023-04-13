export default ({ children, htmlFor, ariaInvalid = false }) => {
  const label = document.createElement('label');
  children.forEach((child) => {
    label.append(child);
  });
  if (ariaInvalid) label.setAttribute('aria-invalid', ariaInvalid);
  label.setAttribute('for', htmlFor);
  return label;
};

export default ({
  value = '',
  placeholder = '',
  disabled = false,
  ariaInvalid = false,
}) => {
  const textarea = document.createElement('textarea');
  textarea.value = value;
  textarea.placeholder = placeholder;
  textarea.setAttribute('rows', '5');
  textarea.setAttribute('cols', '30');
  if (disabled) textarea.setAttribute('disabled', disabled);
  if (ariaInvalid) textarea.setAttribute('aria-invalid', ariaInvalid);
  return textarea;
};

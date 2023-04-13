export default ({
  value = '',
  placeholder = '',
  disabled = false,
  ariaInvalid = false,
  type = 'text',
}) => {
  const input = document.createElement('input');
  input.type = type;
  input.value = value;
  input.placeholder = placeholder;
  if (disabled) input.setAttribute('disabled', disabled);
  if (ariaInvalid) input.setAttribute('aria-invalid', ariaInvalid);
  return input;
};

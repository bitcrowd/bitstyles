export default ({
  value = '',
  placeholder = '',
  disabled = false,
  ariaInvalid = false,
  type = 'text',
  checked = false,
  id,
}) => {
  const input = document.createElement('input');
  input.type = type;
  input.value = value;
  input.placeholder = placeholder;
  if (disabled) input.setAttribute('disabled', disabled);
  if (ariaInvalid) input.setAttribute('aria-invalid', ariaInvalid);
  if (id) input.setAttribute('id', id);
  if (checked) input.setAttribute('checked', checked);
  return input;
};

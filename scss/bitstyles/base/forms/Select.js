export default ({ disabled = false, ariaInvalid = false, id }) => {
  const select = document.createElement('select');
  if (disabled) select.setAttribute('disabled', disabled);
  if (ariaInvalid) select.setAttribute('aria-invalid', ariaInvalid);
  if (id) select.setAttribute('id', id);
  return select;
};

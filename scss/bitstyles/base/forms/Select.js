const defaultOptions = [
  {
    value: 'blue',
    label: 'Blue',
  },
  {
    value: 'red',
    label: 'Red',
  },
  {
    value: 'green',
    label: 'Green',
  },
  {
    value: 'pink',
    label: 'Pink',
  },
];

export default ({ disabled = false, ariaInvalid = false, id, options }) => {
  const select = document.createElement('select');
  if (disabled) select.setAttribute('disabled', disabled);
  if (ariaInvalid) select.setAttribute('aria-invalid', ariaInvalid);
  if (id) select.setAttribute('id', id);

  const opts = options || defaultOptions;
  opts.forEach((option) => {
    const opt = document.createElement('option');
    opt.value = option.value;
    opt.append(option.label);
    select.appendChild(opt);
  });
  return select;
};

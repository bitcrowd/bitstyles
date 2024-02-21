export const textLabel = () => {
  const span = document.createElement('span');
  span.classList.add(
    'u-fg-grayscale-light-1',
    'u-font-normal',
    'u-h6',
    'u-margin-s1-left'
  );
  span.textContent = '[3/10]';
  return span;
};

export default ({ title, label, extra = [] }) => {
  const wrapper = document.createElement('div');
  const extraContentContainer = document.createElement('div');
  const heading = document.createElement('h3');

  wrapper.classList.add(
    'u-padding-m-bottom',
    'u-border-grayscale-light-1-bottom',
    'u-flex',
    'u-items-center',
    'u-justify-between',
    'u-flex-wrap'
  );

  extraContentContainer.classList.add(
    'u-flex',
    'u-items-center',
    'u-justify-between'
  );

  heading.classList.add(
    'u-margin-0',
    'u-margin-m-right',
    'u-flex',
    'u-items-center'
  );
  heading.textContent = title;
  if (label) {
    const span = document.createElement('span');
    span.classList.add('u-margin-l2-left');
    span.appendChild(label);
    heading.appendChild(span);
  }

  wrapper.appendChild(heading);

  extra.forEach((child) => {
    extraContentContainer.append(child);
  });

  wrapper.appendChild(extraContentContainer);
  return wrapper;
};

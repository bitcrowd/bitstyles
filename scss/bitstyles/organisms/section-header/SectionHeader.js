export const textLabel = () => {
  const span = document.createElement('span');
  span.classList.add('u-fg-grayscale', 'u-font-normal', 'u-h6');
  span.textContent = '[3/10]';
  return span;
};

export default ({ title, label, extra = [] }) => {
  const wrapper = document.createElement('div');
  const extraContentContainer = document.createElement('div');
  const heading = document.createElement('h3');

  wrapper.classList.add('o-section-header');

  extraContentContainer.classList.add('o-section-header__extra');

  heading.classList.add('o-section-header__heading');
  heading.textContent = title;

  if (label) {
    const span = document.createElement('span');
    span.classList.add('o-section-header__label');
    span.appendChild(label);
    heading.appendChild(span);
  }

  wrapper.appendChild(heading);

  if (extra.length > 0) {
    extra.forEach((child) => {
      extraContentContainer.append(child);
    });

    wrapper.appendChild(extraContentContainer);
  }

  return wrapper;
};

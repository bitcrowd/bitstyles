import icons from '../../../../assets/images/icons.svg';
import Button from '../../atoms/button/Button';

const CloseButton = () => {
  return Button({
    colorVariant: ['secondary'],
    children: `<svg class="a-icon a-icon--xl" viewBox="0 0 100 100" width="18" height="18" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
      <use xlink:href="${icons}#icon-cross"></use>
    </svg><span class="u-sr-only">Remove notification</span>`,
    classname: ['m-notification__button'],
  });
};

export default ({ title, subtitle, theme = 'default' }) => {
  const notification = document.createElement('article');
  const iconWrapperStart = document.createElement('div');
  const contentWrapper = document.createElement('div');
  const heading = document.createElement('h2');
  const subtitleElement = document.createElement('p');

  notification.classList.add('m-notification');
  notification.setAttribute('data-theme', theme);

  iconWrapperStart.classList.add('m-notification__highlight');
  iconWrapperStart.innerHTML = `
    <svg class="a-icon a-icon--xl" viewBox="0 0 100 100" width="18" height="18" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
      <use xlink:href="${icons}#icon-mail"></use>
    </svg>
  `;

  contentWrapper.classList.add('m-notification__content');

  heading.classList.add('u-h4', 'u-margin-s6-bottom');
  heading.textContent = title;

  subtitleElement.classList.add('u-margin-0', 'u-font-light');
  subtitleElement.textContent = subtitle;

  notification.appendChild(iconWrapperStart);
  contentWrapper.appendChild(heading);
  contentWrapper.appendChild(subtitleElement);
  notification.appendChild(contentWrapper);
  notification.appendChild(CloseButton());

  return notification;
};

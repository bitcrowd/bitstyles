import icons from '../../../../assets/images/icons.svg';

export function NotificationWrapper(children) {
  const contentWrapper = document.createElement('div');
  contentWrapper.style.position = 'relative';
  contentWrapper.style.zIndex = 0;
  contentWrapper.style.transform = 'translate3d(0,0,0)';
  contentWrapper.style.minHeight = '15rem';

  const notificationWrapper = document.createElement('div');
  notificationWrapper.classList.add(
    'o-notification-center',
    'a-content',
    'a-content--s',
    'u-margin-0'
  );
  notificationWrapper.setAttribute('aria-live', 'polite');
  notificationWrapper.innerHTML = children;

  contentWrapper.appendChild(notificationWrapper);

  return contentWrapper;
}

export default ({ title, subtitle }) => {
  const article = document.createElement('article');
  const iconWrapperStart = document.createElement('div');
  const contentWrapper = document.createElement('div');
  const iconWrapperEnd = document.createElement('div');
  const heading = document.createElement('h2');
  const subtitleElement = document.createElement('p');

  article.classList.add(
    'a-card',
    'u-padding-0',
    'u-border-radius-s2',
    'u-flex'
  );

  iconWrapperStart.classList.add(
    'u-flex-shrink-0',
    'u-flex',
    'u-items-center',
    'u-padding-s2',
    'u-bg-brand-2-light-4'
  );
  iconWrapperStart.innerHTML = `
    <svg class="a-icon a-icon--l3" viewBox="0 0 100 100" width="18" height="18" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
      <use xlink:href="${icons}#icon-mail"></use>
    </svg>
  `;

  contentWrapper.classList.add('u-margin-l2');

  heading.classList.add(
    'u-h4',
    'u-margin-0',
    'u-margin-s6-bottom',
    'u-white-space-nowrap'
  );
  heading.textContent = title;

  subtitleElement.classList.add('u-margin-0', 'u-font-light');
  subtitleElement.textContent = subtitle;

  iconWrapperEnd.classList.add(
    'u-flex-shrink-0',
    'u-flex',
    'u-items-center',
    'u-padding-s2',
    'u-bg-grayscale-light-3'
  );
  iconWrapperEnd.innerHTML = `
    <svg class="a-icon a-icon--l3" viewBox="0 0 100 100" width="18" height="18" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
      <use xlink:href="${icons}#icon-mail"></use>
    </svg>
  `;

  article.appendChild(iconWrapperStart);
  contentWrapper.appendChild(heading);
  contentWrapper.appendChild(subtitleElement);
  article.appendChild(contentWrapper);
  article.appendChild(iconWrapperEnd);

  return article;
};

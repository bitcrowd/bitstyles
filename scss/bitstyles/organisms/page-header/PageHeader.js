import icons from '../../../../assets/images/icons.svg';

const PageHeader = ({
  topLeft,
  topRight,
  centerLeft,
  centerRight,
  bottomLeft,
  bottomRight,
}) => {
  const pageHeader = document.createElement('header');
  pageHeader.classList.add('o-page-header');
  const content = document.createElement('div');
  content.classList.add('a-content', 'o-page-header__content');

  pageHeader.appendChild(content);

  const contentPositions = [
    { position: 'top-left', content: topLeft },
    { position: 'top-right', content: topRight },
    { position: 'center-left', content: centerLeft },
    { position: 'center-right', content: centerRight },
    { position: 'bottom-left', content: bottomLeft },
    { position: 'bottom-right', content: bottomRight },
  ];

  contentPositions.forEach((item) => {
    if (item) {
      const contentElement = document.createElement('div');
      contentElement.classList.add(`o-page-header__${item.position}`);
      if (item.content) contentElement.appendChild(item.content);
      content.appendChild(contentElement);
    }
  });

  return pageHeader;
};

export default PageHeader;

export const breadCrumbsMenu = document.createElement('ol');
breadCrumbsMenu.classList.add(
  'u-h7',
  'u-list-none',
  'u-flex',
  'u-flex-wrap',
  'u-items-center'
);
breadCrumbsMenu.innerHTML = `
    <li className="u-margin-s4-right u-flex u-items-center">
      <a href="/">Main section</a>
      <svg
        width="18"
        height="18"
        className="a-icon a-icon--m u-fg-grayscale u-margin-s4-left"
        aria-hidden="true"
        focusable="false"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
      >
        <use xlinkHref="${icons}#icon-caret-right" />
      </svg>
    </li>
    <li className="u-margin-s4-right u-flex u-items-center">
      <a href="/">Sub section</a>
      <svg
        width="18"
        height="18"
        className="a-icon a-icon--m u-fg-grayscale u-margin-s4-left"
        aria-hidden="true"
        focusable="false"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
      >
        <use xlinkHref="${icons}#icon-caret-right" />
      </svg>
    </li>
    <li className="u-margin-s4-right u-flex u-items-center">
      <a href="/">Sub page</a>
      <svg
        width="18"
        height="18"
        className="a-icon a-icon--m u-fg-grayscale u-margin-s4-left"
        aria-hidden="true"
        focusable="false"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
      >
        <use xlinkHref="${icons}#icon-caret-right" />
      </svg>
    </li>`;

export const header = document.createElement('div');
header.innerHTML = `
<div class="u-flex u-justify-between u-flex-wrap u-items-center u-margin-m-top">
<div class="u-flex u-flex-wrap u-items-center">
  <h1 class="u-margin-m-right u-break-text">Title Header</h1>
  <div class="u-flex-shrink-0 u-margin-m-bottom@s">
    <span class="a-badge u-font-medium" data-theme="brand-1">Online</span>
  </div>
</div>`;

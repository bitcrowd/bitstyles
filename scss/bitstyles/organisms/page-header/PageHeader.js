import icons from '../../../../assets/images/icons.svg';
import Button from '../../atoms/button/Button';

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
    if (item.content) {
      const contentElement = document.createElement('div');
      contentElement.classList.add(`o-page-header__${item.position}`);
      contentElement.appendChild(item.content);
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
<div class="u-flex u-justify-between u-flex-wrap u-items-center u-margin-m-y">
  <div class="u-flex u-flex-wrap u-items-center">
    <h1 class="u-margin-m-right u-break-text">Title Header</h1>
    <div class="u-flex-shrink-0 u-margin-m-bottom@s">
      <span class="a-badge u-font-medium" data-theme="brand-1">Online</span>
    </div>
  </div>
</div>`;

export const tabs = document.createElement('ul');
tabs.classList.add(
  'u-list-none',
  'u-flex',
  'u-overflow-x-auto',
  'u-items-end',
  'a-button--tab-container',
  'u-margin-m-bottom'
);
tabs.setAttribute('role', 'tablist');
tabs.setAttribute('aria-label', 'Data');

const tabsListItem = document.createElement('li');
tabsListItem.classList.add('u-margin-s2-right');

const tabsButton = ({ label, ariaSelected, ariaControls }) =>
  Button({
    classname: ['a-button', 'a-button--tab'],
    children: label,
    role: 'tab',
    ariaSelected,
    ariaControls,
  });

const tabsLabels = [
  {
    label: 'Tab1',
    ariaSelected: true,
    ariaControls: 'tab-panel-1',
  },
  {
    label: 'Tab2',
    ariaSelected: false,
    ariaControls: 'tab-panel-2',
  },
  {
    label: 'Tab3',
    ariaSelected: false,
    ariaControls: 'tab-panel-3',
  },
];

tabsLabels.forEach((item) =>
  tabs.appendChild(
    tabsListItem.appendChild(
      tabsButton({
        label: item.label,
        ariaSelected: item.ariaSelected,
        ariaControls: item.ariaControls,
      })
    )
  )
);

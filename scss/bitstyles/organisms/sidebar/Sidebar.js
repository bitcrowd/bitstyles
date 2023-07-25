import logoLarge from '../../../../test/assets/images/logoLarge.svg';
import Button from '../../atoms/button/Button';
import icons from '../../../../assets/images/icons.svg';

export const logoImg = document.createElement('img');
logoImg.src = logoLarge;
logoImg.width = '150';
logoImg.height = '50';
logoImg.alt = 'Company logo';
logoImg.classList.add(
  'u-flex-shrink-0',
  'u-margin-m-left',
  'u-margin-m-right',
  'u-margin-m-bottom'
);

export const buttonList = document.createElement('ul');
buttonList.classList.add(
  'u-flex-grow-1',
  'u-flex-shrink-1',
  'u-overflow-y-auto',
  'u-list-none',
  'u-flex',
  'u-flex-col',
  'u-items-start',
  'u-items-stretch',
  'u-padding-s4-right',
  'u-padding-s4-left'
);

const listItem = document.createElement('li');
listItem.classList.add('u-margin-s2-bottom', 'u-flex');

const buttomComponent = (label) =>
  Button({
    classname: ['u-justify-start', 'u-flex-grow-1'],
    children: `<svg width="20" height="20" class="a-icon a-icon--m" aria-hidden="true" focusable="false"><use xlink:href="${icons}#icon-caret-right"></use></svg><span class="u-margin-s1-left">${label}</span>`,
    colorVariant: ['transparent'],
  });

const labels = ['Dashboards', 'Projects', 'Team', 'Search'];

labels.forEach((label) =>
  buttonList.appendChild(listItem.appendChild(buttomComponent(label)))
);

export const bottom = document.createElement('div');
bottom.innerHTML = `
<hr class="u-border-grayscale-light-1-top" />
<div
  class="u-flex-shrink-0 u-padding-s4-y u-margin-s4-left u-margin-s4-right u-border-grayscale-dark-top u-relative"
  x-data="{ dropdownOpen: false }"
>
  <button
    type="button"
    class="a-button a-button--large a-button--transparent"
    aria-controls="dropdown-4"
    @click="dropdownOpen = !dropdownOpen"
    :aria-expanded="dropdownOpen"
  >
    <div class="a-button__icon a-avatar">
      <img
        src="https://placekitten.com/100/150"
        width="36"
        height="54"
        alt="Jane Dobermann’s avatar"
        class="a-avatar"
      />
    </div>
    <span class="a-button__label">Jane Dobermann</span>
  </button>
</div>
`;

export default ({ topSlot, children, bottomSlot }) => {
  // Create the main sidebar container
  const sidebar = document.createElement('div');
  sidebar.classList.add('u-flex', 'u-height-100vh');
  sidebar.setAttribute('x-data', '{ sidebarOpen: false }');

  const nav = document.createElement('nav');
  nav.classList.add('u-flex');
  sidebar.appendChild(nav);

  const sidebarContentSmall = document.createElement('div');
  sidebarContentSmall.classList.add(
    'o-sidebar--small',
    'u-bg-grayscale-light-4',
    'u-shadow-brand-1',
    'u-padding-m-top',
    'u-flex',
    'u-flex-col',
    'u-hidden@l'
  );
  nav.appendChild(sidebarContentSmall);

  const sidebarContentLarge = document.createElement('div');
  sidebarContentLarge.classList.add(
    'u-hidden',
    'o-sidebar--large',
    'u-flex-shrink-0',
    'u-bg-grayscale-light-4',
    'u-padding-m-top',
    'u-flex@l',
    'u-flex-col'
  );
  nav.appendChild(sidebarContentLarge);

  if (topSlot) {
    sidebarContentLarge.appendChild(topSlot.cloneNode(true));
    sidebarContentSmall.appendChild(topSlot);
  }
  if (children) {
    sidebarContentLarge.appendChild(children.cloneNode(true));
    sidebarContentSmall.appendChild(children);
  }
  if (bottomSlot) {
    sidebarContentLarge.appendChild(bottomSlot.cloneNode(true));
    sidebarContentSmall.appendChild(bottomSlot);
  }
  return sidebar;
};

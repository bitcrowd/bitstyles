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

const buttonComponent = (label) =>
  Button({
    classname: ['u-justify-start', 'u-flex-grow-1'],
    children: `<svg width="20" height="20" class="a-icon a-icon--m" aria-hidden="true" focusable="false"><use xlink:href="${icons}#icon-caret-right"></use></svg><span class="u-margin-s1-left">${label}</span>`,
    colorVariant: ['transparent'],
  });

const labels = [
  'Dashboard',
  'Projects',
  'Team',
  'Customers',
  'Bookings',
  'Sales',
];

labels.forEach((label) => {
  const listItem = document.createElement('li');
  listItem.classList.add('u-margin-s2-bottom', 'u-flex');
  listItem.appendChild(buttonComponent(label));
  buttonList.appendChild(listItem);
});

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
    <ul
    x-show="dropdownOpen"
    @click.away="dropdownOpen = false"
    id="dropdown-4"
    class="a-dropdown a-dropdown--full-width a-dropdown--top u-overflow-y-auto u-list-none u-margin-s2-bottom"
    >
        <li>
            <a href="/" class="a-button a-button--transparent"> Settings </a>
        </li>
        <li>
            <a href="/" class="a-button a-button--transparent"> Help </a>
        </li>
        <li>
            <a href="/" class="a-button a-button--transparent"> Privacy </a>
        </li>
        <li>
            <a href="/" class="a-button a-button--transparent"> Sign out </a>
        </li>
    </ul>
</div>
`;

const Sidebar = ({ topSlot, children, bottomSlot, mainContent = '' }) => {
  const sidebar = document.createElement('div');
  sidebar.classList.add('u-flex', 'u-height-100vh', 'u-relative');

  const nav = document.createElement('nav');
  nav.classList.add('u-flex');
  sidebar.appendChild(nav);

  const sidebarLarge = document.createElement('div');
  sidebarLarge.classList.add(
    'u-hidden',
    'o-sidebar--large',
    'u-flex-shrink-0',
    'u-bg-grayscale-light-4',
    'u-padding-m-top',
    'u-flex@l',
    'u-flex-col'
  );
  nav.appendChild(sidebarLarge);

  const sidebarSmall = document.createElement('div');
  sidebarSmall.classList.add(
    'o-sidebar--small',
    'u-bg-grayscale-light-4',
    'u-shadow-brand-1',
    'u-flex',
    'u-flex-col',
    'u-hidden@l'
  );
  nav.appendChild(sidebarSmall);

  let sidebarOpen = false;

  const toggleSidebar = () => {
    sidebarOpen = !sidebarOpen;
    sidebarSmall.style.display = sidebarOpen ? 'flex' : 'none';
  };

  const closeButton = () =>
    Button({
      children: `<svg width="20" height="20" class="a-icon a-icon--m" aria-hidden="true" focusable="false"><use xlink:href="${icons}#icon-cross"></use></svg><span class="u-sr-only">Close Sidebar</span>`,
      colorVariant: ['transparent'],
      shapeVariant: ['square'],
      onClick: () => toggleSidebar(),
    });

  sidebarSmall.appendChild(closeButton());

  sidebarSmall.setAttribute('x-transition:enter', 'is-transitioning');
  sidebarSmall.setAttribute('x-transition:enter-start', 'is-off-screen');
  sidebarSmall.setAttribute('x-transition:enter-end', 'is-on-screen');
  sidebarSmall.setAttribute('x-transition:leave', 'is-transitioning');
  sidebarSmall.setAttribute('x-transition:leave-start', 'is-on-screen');
  sidebarSmall.setAttribute('x-transition:leave-end', 'is-off-screen');

  if (topSlot) {
    sidebarLarge.appendChild(topSlot.cloneNode(true));
    sidebarSmall.appendChild(topSlot);
  }
  if (children) {
    sidebarLarge.appendChild(children.cloneNode(true));
    sidebarSmall.appendChild(children);
  }
  if (bottomSlot) {
    sidebarLarge.appendChild(bottomSlot.cloneNode(true));
    sidebarSmall.appendChild(bottomSlot);
  }

  const main = document.createElement('main');
  main.classList.add(
    'u-flex-grow-1',
    'u-padding-l4-left@l',
    'u-padding-l3-right@l',
    'u-padding-l3-bottom',
    'u-padding-m',
    'u-overflow-y-auto'
  );
  sidebar.appendChild(main);

  const headerContainer = document.createElement('div');
  headerContainer.classList.add(
    'u-flex',
    'u-items-center',
    'u-margin-m-bottom'
  );
  main.appendChild(headerContainer);

  const openButton = () =>
    Button({
      classname: [
        'u-flex-shrink-0',
        'u-margin-neg-m-left',
        'u-margin-s4-right',
        'u-hidden@l',
      ],
      children: `<svg width="20" height="20" class="a-icon a-icon--m" aria-hidden="true" focusable="false"><use xlink:href="${icons}#icon-hamburger"></use></svg><span class="u-sr-only">Open Sidebar</span>`,
      colorVariant: ['secondary'],
      shapeVariant: ['square'],
      onClick: () => toggleSidebar(),
    });
  headerContainer.appendChild(openButton());

  const header = document.createElement('h1');
  header.classList.add('u-margin-0');
  header.innerHTML = 'Projects';
  headerContainer.appendChild(header);

  const mainContentDiv = document.createElement('div');
  mainContentDiv.innerHTML = mainContent;
  main.appendChild(mainContentDiv);

  return sidebar;
};

export default Sidebar;

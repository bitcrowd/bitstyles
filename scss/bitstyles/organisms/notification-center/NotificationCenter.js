import Dropdown from '../../atoms/dropdown/Dropdown';

export default ({ children = [], isGlobal = true }) => {
  const notificationCenter = document.createElement('ul');

  if (isGlobal) {
    notificationCenter.setAttribute('aria-live', 'polite');
    notificationCenter.classList.add(
      'o-notification-center',
      'a-content',
      'a-content--s'
    );
  }

  children.forEach((child) => {
    const listItem = document.createElement('li');
    listItem.classList.add('o-notification-center__item');
    listItem.appendChild(child);
    notificationCenter.appendChild(listItem);
  });

  if (isGlobal) {
    return notificationCenter;
  }

  return Dropdown({ children: notificationCenter, alignment: ['right'] });
};

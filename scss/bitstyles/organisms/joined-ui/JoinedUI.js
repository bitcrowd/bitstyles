export default ({ children, classname }) => {
  const list = document.createElement('ul');
  list.classList.add('u-list-none', 'o-joined-ui', classname);

  children.forEach((child) => {
    const listItem = document.createElement('li');
    listItem.appendChild(child);
    list.appendChild(listItem);
  });

  return list;
};

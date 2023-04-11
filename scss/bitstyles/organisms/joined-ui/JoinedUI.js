export default ({ children }) => {
  const list = document.createElement('ul');
  list.classList.add(
    'u-list-none',
    'u-inline-flex',
    'u-items-stretch',
    'o-joined-ui'
  );

  children.forEach((child) => {
    const listItem = document.createElement('li');
    listItem.appendChild(child);
    list.appendChild(listItem);
  });

  return list;
};

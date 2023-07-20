import { generateLabel } from '../../../../.storybook/helpers';

const SwitcherItem = ({
  children,
  backgroundColor = 'var(--bs-color-grayscale-light-2)',
}) => {
  const switcherItem = document.createElement('div');
  switcherItem.style.backgroundColor = backgroundColor;
  switcherItem.style.paddingBlock = 'var(--bs-size-s2)';
  switcherItem.style.paddingInline = 'var(--bs-content-padding-base)';
  switcherItem.style.borderRadius = 'var(--bs-size-s4)';
  switcherItem.innerHTML = children;
  return switcherItem;
};

const Switcher = ({ length = 3, classname = [], children = [] }) => {
  const switcher = document.createElement('div');
  switcher.classList.add('a-switcher');
  classname.forEach((cls) => switcher.classList.add(cls));

  if (children.length) {
    children.forEach((child) => switcher.append(child));
  } else {
    for (let child = 0; child < length; child += 1) {
      switcher.append(
        SwitcherItem({
          children: generateLabel(['switcher', 'child', child + 1]),
        })
      );
    }
  }
  return switcher;
};

export { Switcher, SwitcherItem };

import { generateLabel } from '../../../../.storybook/helpers';

const StackItem = ({
  children,
  backgroundColor = 'var(--bs-color-grayscale-light-2)',
}) => {
  const stackItem = document.createElement('div');
  stackItem.style.backgroundColor = backgroundColor;
  stackItem.style.padding = 'var(--bs-content-padding-base)';
  stackItem.style.borderRadius = 'var(--bs-size-s3)';
  stackItem.innerHTML = children;
  return stackItem;
};

export default ({ length, classname = [], sizeVariant = '' }) => {
  const stack = document.createElement('div');
  stack.classList.add('a-stack');
  if (sizeVariant) {
    stack.classList.add(`a-stack--${sizeVariant}`);
  }

  classname.forEach((cls) => {
    stack.classList.add(cls);
  });

  for (let child = 0; child < length; child += 1) {
    stack.append(
      StackItem({ children: generateLabel(['stack', 'child', child + 1]) })
    );
  }

  return stack;
};

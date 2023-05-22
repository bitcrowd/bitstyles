import { Stack, StackItem } from './Stack';
import { generateLabel } from '../../../../.storybook/helpers';

export default {
  title: 'Atoms/Stack',
  component: Stack,
  argTypes: {},
};

const Template = (args) => Stack(args);

// ***** Size variants ****************** //

export const Base = Template.bind({});
Base.args = { length: 4 };

export const Nested = () => {
  const innerStack = Stack({
    length: 2,
    itemColor: 'var(--bs-color-grayscale-light-4)',
    labelPrefix: 'stack 1 child 3 — stack 2',
  });
  const children = [
    StackItem({ children: generateLabel(['stack 1', 'child 1']) }),
    StackItem({ children: generateLabel(['stack 1', 'child 2']) }),
    innerStack,
    StackItem({ children: generateLabel(['stack 1', 'child 4']) }),
    StackItem({ children: generateLabel(['stack 1', 'child 5']) }),
  ];
  const outerStack = Stack({ children });

  outerStack.insertBefore(innerStack, outerStack.childNodes[2]);
  return outerStack;
};

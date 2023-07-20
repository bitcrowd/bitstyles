import { Switcher } from './Switcher';

export default {
  title: 'Atoms/Switcher',
  component: Switcher,
  argTypes: {},
};

const Template = (args) => Switcher(args);

// ***** Size variants ****************** //

export const One = Template.bind({});
One.args = { length: 1 };

export const Two = Template.bind({});
Two.args = { length: 2 };

export const Three = Template.bind({});
Three.args = { length: 3 };

export const Four = Template.bind({});
Four.args = { length: 4 };

export const Five = Template.bind({});
Five.args = { length: 5 };

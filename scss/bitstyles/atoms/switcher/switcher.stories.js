import { Switcher } from './Switcher';

export default {
  title: 'Atoms/Switcher',
  component: Switcher,
  argTypes: {},
};

const Template = (args) => Switcher(args);

// ***** Size variants ****************** //

export const Base = Template.bind({});
Base.args = {};

export const OverLimit = Template.bind({});
OverLimit.args = { length: 5 };

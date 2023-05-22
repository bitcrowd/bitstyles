import Stack from './Stack';

export default {
  title: 'Atoms/Stack',
  component: Stack,
  argTypes: {},
};

const Template = (args) => Stack(args);

// ***** Size variants ****************** //

export const Base = Template.bind({});
Base.args = { length: 6 };

import Label from './Label';

export default {
  title: 'Base/Forms/Label',
  component: Label,
  argTypes: {},
};

const Template = (args) => Label(args);

const Link = () => {
  const link = document.createElement('a');
  link.href = '#dummy-link';
  link.innerHTML = 'a link';
  return link;
};

// ***** Labels ****************** //

export const Invalid = Template.bind({});
Invalid.args = {
  children: ['Simple text label for an invalid input'],
  ariaInvalid: true,
};

export const Disabled = Template.bind({});
Disabled.args = {
  children: ['Simple text label for a disabled input'],
  ariaDisabled: true,
};

export const WithFor = Template.bind({});
WithFor.args = {
  children: ['Simple text label with a for attribute'],
  htmlFor: 'input-id',
};

export const WithLink = Template.bind({});
WithLink.args = { children: ['Text label with ', Link(), ' as content.'] };

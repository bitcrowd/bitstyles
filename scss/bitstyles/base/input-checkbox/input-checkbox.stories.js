import Input from '../input-text/Input';

export default {
  title: 'Base/Input checkbox',
  component: Input,
  argTypes: {},
};

const Template = (args) => Input(args);

// ***** Text inputs with values ****************** //

export const Base = Template.bind({});
Base.args = { type: 'checkbox' };

export const Invalid = Template.bind({});
Invalid.args = { type: 'checkbox', ariaInvalid: true };

export const Disabled = Template.bind({});
Disabled.args = { type: 'checkbox', disabled: true };

export const Checked = Template.bind({});
Checked.args = { type: 'checkbox', checked: true };

export const CheckedDisabled = Template.bind({});
CheckedDisabled.args = { type: 'checkbox', checked: true, disabled: true };

import Input from '../input-text/Input';

export default {
  title: 'Base/Input radio',
  component: Input,
  argTypes: {},
};

const Template = (args) => Input(args);

// ***** Text inputs with values ****************** //

export const Base = Template.bind({});
Base.args = { type: 'radio' };

export const Invalid = Template.bind({});
Invalid.args = { type: 'radio', ariaInvalid: true };

export const Disabled = Template.bind({});
Disabled.args = { type: 'radio', disabled: true };

export const Checked = Template.bind({});
Checked.args = { type: 'radio', checked: true };

export const CheckedDisabled = Template.bind({});
CheckedDisabled.args = { type: 'radio', checked: true, disabled: true };

import Input from './Input';
import Label from './Label';

export default {
  title: 'Base/Forms/Input radio',
  component: Input,
  subcomponents: [Label],
  argTypes: {},
};

const Template = (args) => {
  return Label({
    htmlFor: args.id,
    ariaInvalid: args.ariaInvalid,
    children: [Input(args), args.label],
    classname: 'u-items-baseline',
  });
};

// ***** Text inputs with values ****************** //

export const Base = Template.bind({});
Base.args = { type: 'radio', label: 'Unchecked' };
Base.parameters = {
  zeplinLink: [
    {
      name: 'base',
      link: 'https://app.zeplin.io/styleguide/63079b90d0bf4a646c46c227/components?coid=643fc2b5d50be32376c68fcd',
    },
    {
      name: 'hover',
      link: 'https://app.zeplin.io/styleguide/63079b90d0bf4a646c46c227/components?coid=643fc2b95a65082385f940c1',
    },
    {
      name: 'active',
      link: 'https://app.zeplin.io/styleguide/63079b90d0bf4a646c46c227/components?coid=643fc2bedf599923e9f4e22d',
    },
  ],
};

export const Invalid = Template.bind({});
Invalid.args = { type: 'radio', ariaInvalid: true, label: 'Unchecked invalid' };

export const Disabled = Template.bind({});
Disabled.args = { type: 'radio', disabled: true, label: 'Unchecked disabled' };

export const Checked = Template.bind({});
Checked.args = { type: 'radio', checked: true, label: 'Checked' };
Checked.parameters = {
  zeplinLink: [
    {
      name: 'base',
      link: 'https://app.zeplin.io/styleguide/63079b90d0bf4a646c46c227/components?coid=643fc2bd35ff5623d67134f9',
    },
    {
      name: 'hover',
      link: 'https://app.zeplin.io/styleguide/63079b90d0bf4a646c46c227/components?coid=643fc2b76d8d3923c74e7dc1',
    },
    {
      name: 'active',
      link: 'https://app.zeplin.io/styleguide/63079b90d0bf4a646c46c227/components?coid=643fc2b628fa4823ffcd6e3f',
    },
  ],
};

export const CheckedInvalid = Template.bind({});
CheckedInvalid.args = {
  type: 'radio',
  checked: true,
  ariaInvalid: true,
  label: 'Checked invalid',
};

export const CheckedDisabled = Template.bind({});
CheckedDisabled.args = {
  type: 'radio',
  checked: true,
  disabled: true,
  label: 'Checked disabled',
};

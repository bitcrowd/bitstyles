import Input from './Input';
import Label from './Label';

export default {
  title: 'Base/Forms/Input checkbox',
  component: Input,
  subcomponents: { Label },
  argTypes: {},
};

const Template = (args) => {
  return Label({
    htmlFor: args.id,
    ariaInvalid: args.ariaInvalid,
    ariaDisabled: args.disabled,
    children: [Input(args), args.label],
    classname: 'u-items-baseline',
  });
};

// ***** Unchecked radios ****************** //

export const Base = Template.bind({});
Base.args = { type: 'checkbox', label: 'Unchecked' };
Base.parameters = {
  zeplinLink: [
    {
      name: 'base',
      link: 'https://app.zeplin.io/styleguide/63079b90d0bf4a646c46c227/components?coid=643fc96111d7d524003d54ff',
    },
    {
      name: 'hover',
      link: 'https://app.zeplin.io/styleguide/63079b90d0bf4a646c46c227/components?coid=643fc97298cca5236f0332ce',
    },
    {
      name: 'active',
      link: 'https://app.zeplin.io/styleguide/63079b90d0bf4a646c46c227/components?coid=643fc97028fa4823ffce07c8',
    },
  ],
};

export const Invalid = Template.bind({});
Invalid.args = {
  type: 'checkbox',
  ariaInvalid: true,
  label: 'Unchecked invalid',
};

export const Disabled = Template.bind({});
Disabled.args = {
  type: 'checkbox',
  disabled: true,
  label: 'Unchecked disabled',
};
Disabled.parameters = {
  zeplinLink:
    'https://app.zeplin.io/styleguide/63079b90d0bf4a646c46c227/components?coid=643fc971830548239007431f',
};

// ***** Checked radios ****************** //

export const Checked = Template.bind({});
Checked.args = {
  type: 'checkbox',
  checked: true,
  label: 'Checked',
};
Checked.parameters = {
  zeplinLink: [
    {
      name: 'base',
      link: 'https://app.zeplin.io/styleguide/63079b90d0bf4a646c46c227/components?coid=643fc96362f9d023b1e5d965',
    },
    {
      name: 'hover',
      link: 'https://app.zeplin.io/styleguide/63079b90d0bf4a646c46c227/components?coid=643fc964d04e11239e10ece0',
    },
    {
      name: 'active',
      link: 'https://app.zeplin.io/styleguide/63079b90d0bf4a646c46c227/components?coid=643fc96842426023b99c98de',
    },
  ],
};

export const CheckedInvalid = Template.bind({});
CheckedInvalid.args = {
  type: 'checkbox',
  checked: true,
  ariaInvalid: true,
  label: 'Checked invalid',
};

export const CheckedDisabled = Template.bind({});
CheckedDisabled.args = {
  type: 'checkbox',
  checked: true,
  disabled: true,
  label: 'Checked disabled',
};
CheckedDisabled.parameters = {
  zeplinLink:
    'https://app.zeplin.io/styleguide/63079b90d0bf4a646c46c227/components?coid=643fc96c28fa4823ffce078c',
};

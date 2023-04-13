import Input from '../input-text/Input';
import Label from './Label';
import { generateLabel } from '../../../../.storybook/helpers';

export default {
  title: 'Base/Forms',
  component: Input,
  subcomponents: [Label],
  argTypes: {},
};

const Template = (args) =>
  Label({
    htmlFor: args.id,
    ariaInvalid: args.ariaInvalid,
    children: [args.label, Input(args)],
  });

// ***** Text inputs with labels ****************** //

export const TextInput = Template.bind({});
TextInput.args = {
  id: 'input-text',
  label: 'Delivery address',
  value: generateLabel(['input', 'text']),
  placeholder: generateLabel(['input', 'text', 'placeholder']),
};
TextInput.parameters = {
  zeplinLink: [
    {
      name: 'base',
      link: 'https://app.zeplin.io/styleguide/63079b90d0bf4a646c46c227/components?coid=6363a29350fae8b712a63460',
    },
    {
      name: 'hover',
      link: 'https://app.zeplin.io/styleguide/63079b90d0bf4a646c46c227/components?coid=6363a29350fae8b712a63460',
    },
    {
      name: 'active',
      link: 'https://app.zeplin.io/styleguide/63079b90d0bf4a646c46c227/components?coid=6363a29d53bff5b7626b7444',
    },
  ],
};

export const TextInputInvalid = Template.bind({});
TextInputInvalid.args = {
  id: 'input-text',
  label: 'Telephone number',
  value: generateLabel(['input', 'text']),
  placeholder: generateLabel(['input', 'text', 'placeholder']),
  ariaInvalid: true,
};
TextInputInvalid.parameters = {
  zeplinLink: [
    {
      name: 'base',
      link: 'https://app.zeplin.io/styleguide/63079b90d0bf4a646c46c227/components?coid=6363a29350fae8b712a63460',
    },
    {
      name: 'hover',
      link: 'https://app.zeplin.io/styleguide/63079b90d0bf4a646c46c227/components?coid=6363a29350fae8b712a63460',
    },
    {
      name: 'active',
      link: 'https://app.zeplin.io/styleguide/63079b90d0bf4a646c46c227/components?coid=6363a29d53bff5b7626b7444',
    },
  ],
};

export const TextInputDisabled = Template.bind({});
TextInputDisabled.args = {
  id: 'input-text',
  label: 'Full name',
  value: generateLabel(['input', 'text']),
  placeholder: generateLabel(['input', 'text', 'placeholder']),
  disabled: true,
};
TextInputDisabled.parameters = {
  zeplinLink: [
    {
      name: 'base',
      link: 'https://app.zeplin.io/styleguide/63079b90d0bf4a646c46c227/components?coid=6363a29350fae8b712a63460',
    },
    {
      name: 'hover',
      link: 'https://app.zeplin.io/styleguide/63079b90d0bf4a646c46c227/components?coid=6363a29350fae8b712a63460',
    },
    {
      name: 'active',
      link: 'https://app.zeplin.io/styleguide/63079b90d0bf4a646c46c227/components?coid=6363a29d53bff5b7626b7444',
    },
  ],
};

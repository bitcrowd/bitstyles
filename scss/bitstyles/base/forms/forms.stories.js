import Input from './Input';
import Label from './Label';
import Textarea from './Textarea';
import Select from './Select';
import { generateLabel } from '../../../../.storybook/helpers';

export default {
  title: 'Base/Forms',
  component: Input,
  subcomponents: [Label, Select],
  argTypes: {},
};

const InputTemplate = (args) => {
  let children;
  if (args.type && (args.type === 'checkbox' || args.type === 'radio')) {
    children = [Input(args), args.label];
  } else {
    children = [args.label, Input(args)];
  }

  return Label({
    htmlFor: args.id,
    ariaInvalid: args.ariaInvalid,
    children,
  });
};

const SelectTemplate = (args) =>
  Label({
    htmlFor: args.id,
    ariaInvalid: args.ariaInvalid,
    children: [args.label, Select(args)],
  });

const TextareaTemplate = (args) =>
  Label({
    htmlFor: args.id,
    ariaInvalid: args.ariaInvalid,
    children: [args.label, Textarea(args)],
  });

// ***** Text inputs with labels ****************** //

export const TextInput = InputTemplate.bind({});
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

export const TextInputInvalid = InputTemplate.bind({});
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

export const TextInputInvalidWith = InputTemplate.bind({});
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

export const TextInputDisabled = InputTemplate.bind({});
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

// ***** Radio inputs with labels ****************** //

export const RadioInput = InputTemplate.bind({});
RadioInput.args = {
  id: 'input-radio',
  type: 'radio',
  label: 'X-Large',
};

export const RadioInputChecked = InputTemplate.bind({});
RadioInputChecked.args = {
  id: 'input-radio',
  type: 'radio',
  label: 'Large',
  checked: true,
};

export const RadioInputInvalid = InputTemplate.bind({});
RadioInputInvalid.args = {
  id: 'input-radio',
  type: 'radio',
  label: 'Medium',
  ariaInvalid: true,
};

export const RadioInputDisabled = InputTemplate.bind({});
RadioInputDisabled.args = {
  id: 'input-radio',
  type: 'radio',
  label: 'Small',
  disabled: true,
};

// ***** Radio inputs with labels ****************** //

export const CheckboxInput = InputTemplate.bind({});
CheckboxInput.args = {
  id: 'input-checkbox',
  type: 'checkbox',
  label: 'X-Large',
};

export const CheckboxInputChecked = InputTemplate.bind({});
CheckboxInputChecked.args = {
  id: 'input-checkbox',
  type: 'checkbox',
  label: 'Large',
  checked: true,
};

export const CheckboxInputInvalid = InputTemplate.bind({});
CheckboxInputInvalid.args = {
  id: 'input-checkbox',
  type: 'checkbox',
  label: 'Medium',
  ariaInvalid: true,
};

export const CheckboxInputDisabled = InputTemplate.bind({});
CheckboxInputDisabled.args = {
  id: 'input-checkbox',
  type: 'checkbox',
  label: 'Small',
  disabled: true,
};

// ***** Selects with labels ****************** //

export const SelectBase = SelectTemplate.bind({});
SelectBase.args = {
  label: 'Delivery method',
};

export const SelectInvalid = SelectTemplate.bind({});
SelectInvalid.args = {
  label: 'Delivery method',
  ariaInvalid: true,
};

export const SelectDisabled = SelectTemplate.bind({});
SelectDisabled.args = {
  label: 'Delivery method',
  disabled: true,
};

// ***** Selects with labels ****************** //

export const TextareaBase = TextareaTemplate.bind({});
TextareaBase.args = {
  label: 'Extra comments',
};

export const TextareaInvalid = TextareaTemplate.bind({});
TextareaInvalid.args = {
  label: 'Extra comments',
  ariaInvalid: true,
};

export const TextareaDisabled = TextareaTemplate.bind({});
TextareaDisabled.args = {
  label: 'Extra comments',
  disabled: true,
};

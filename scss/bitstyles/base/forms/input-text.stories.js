import Input from './Input';
import { generateLabel } from '../../../../.storybook/helpers';

export default {
  title: 'Base/Forms/Input text',
  component: Input,
  argTypes: {},
};

const Template = (args) => Input(args);

// ***** Text inputs with values ****************** //

export const Text = Template.bind({});
Text.args = {
  value: generateLabel(['input', 'text']),
  placeholder: generateLabel(['input', 'text', 'placeholder']),
};
Text.parameters = {
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

export const TextInvalid = Template.bind({});
TextInvalid.args = {
  value: generateLabel(['input', 'text', 'invalid']),
  placeholder: generateLabel(['input', 'text', 'invalid', 'placeholder']),
  ariaInvalid: true,
};
TextInvalid.parameters = {
  zeplinLink:
    'https://app.zeplin.io/styleguide/63079b90d0bf4a646c46c227/components?coid=6363a29861150a30c8ecffa3',
};

export const TextDisabled = Template.bind({});
TextDisabled.args = {
  value: generateLabel(['input', 'text', 'disabled']),
  placeholder: generateLabel(['input', 'text', 'disabled', 'placeholder']),
  disabled: true,
};
TextDisabled.parameters = {
  zeplinLink:
    'https://app.zeplin.io/styleguide/63079b90d0bf4a646c46c227/components?coid=6363a29861150a30c8ecffa3',
};

// ***** Text inputs without values ****************** //

export const TextEmpty = Template.bind({});
TextEmpty.args = {
  value: '',
  placeholder: generateLabel(['input', 'text', 'empty', 'placeholder']),
};
TextEmpty.parameters = {
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

export const TextInvalidEmpty = Template.bind({});
TextInvalidEmpty.args = {
  value: '',
  placeholder: generateLabel([
    'input',
    'text',
    'invalid',
    'empty',
    'placeholder',
  ]),
  ariaInvalid: true,
};
TextInvalidEmpty.parameters = {
  zeplinLink:
    'https://app.zeplin.io/styleguide/63079b90d0bf4a646c46c227/components?coid=6363a29861150a30c8ecffa3',
};

export const TextDisabledEmpty = Template.bind({});
TextDisabledEmpty.args = {
  disabled: true,
  value: '',
  placeholder: generateLabel([
    'input',
    'text',
    'disabled',
    'empty',
    'placeholder',
  ]),
};
TextDisabledEmpty.parameters = {
  zeplinLink:
    'https://app.zeplin.io/styleguide/63079b90d0bf4a646c46c227/components?coid=6363a29861150a30c8ecffa3',
};

// ***** Email inputs with values ****************** //

export const Email = Template.bind({});
Email.args = {
  type: 'email',
  value: generateLabel(['input', 'email']),
  placeholder: generateLabel(['input', 'email', 'placeholder']),
};
Email.parameters = {
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

export const EmailInvalid = Template.bind({});
EmailInvalid.args = {
  type: 'email',
  value: generateLabel(['input', 'email', 'invalid']),
  placeholder: generateLabel(['input', 'email', 'invalid', 'placeholder']),
  ariaInvalid: true,
};
EmailInvalid.parameters = {
  zeplinLink:
    'https://app.zeplin.io/styleguide/63079b90d0bf4a646c46c227/components?coid=6363a29861150a30c8ecffa3',
};

export const EmailDisabled = Template.bind({});
EmailDisabled.args = {
  type: 'email',
  value: generateLabel(['input', 'email', 'disabled']),
  placeholder: generateLabel(['input', 'email', 'disabled', 'placeholder']),
  disabled: true,
};
EmailDisabled.parameters = {
  zeplinLink:
    'https://app.zeplin.io/styleguide/63079b90d0bf4a646c46c227/components?coid=6363a29861150a30c8ecffa3',
};

// ***** Email inputs without values ****************** //

export const EmailEmpty = Template.bind({});
EmailEmpty.args = {
  type: 'email',
  value: '',
  placeholder: generateLabel(['input', 'email', 'placeholder']),
};
EmailEmpty.parameters = {
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

export const EmailInvalidEmpty = Template.bind({});
EmailInvalidEmpty.args = {
  type: 'email',
  value: '',
  placeholder: generateLabel(['input', 'email', 'invalid', 'placeholder']),
  ariaInvalid: true,
};
EmailInvalidEmpty.parameters = {
  zeplinLink:
    'https://app.zeplin.io/styleguide/63079b90d0bf4a646c46c227/components?coid=6363a29861150a30c8ecffa3',
};

export const EmailDisabledEmpty = Template.bind({});
EmailDisabledEmpty.args = {
  type: 'email',
  value: '',
  placeholder: generateLabel(['input', 'email', 'disabled', 'placeholder']),
  disabled: true,
};
EmailDisabledEmpty.parameters = {
  zeplinLink:
    'https://app.zeplin.io/styleguide/63079b90d0bf4a646c46c227/components?coid=6363a29861150a30c8ecffa3',
};

// ***** Number inputs with values ****************** //

export const Number = Template.bind({});
Number.args = {
  type: 'number',
  value: '012345',
  placeholder: generateLabel(['input', 'number', 'placeholder']),
};

export const NumberInvalid = Template.bind({});
NumberInvalid.args = {
  type: 'number',
  value: generateLabel(['input', 'email', 'invalid']),
  placeholder: generateLabel(['input', 'number', 'invalid', 'placeholder']),
  ariaInvalid: true,
};

export const NumberDisabled = Template.bind({});
NumberDisabled.args = {
  type: 'number',
  value: '012345',
  placeholder: generateLabel(['input', 'number', 'disabled', 'placeholder']),
  disabled: true,
};

// ***** Number inputs without values ****************** //

export const NumberEmpty = Template.bind({});
NumberEmpty.args = {
  type: 'number',
  value: '',
  placeholder: generateLabel(['input', 'number', 'placeholder']),
};

export const NumberInvalidEmpty = Template.bind({});
NumberInvalidEmpty.args = {
  type: 'number',
  value: '',
  placeholder: generateLabel(['input', 'number', 'invalid', 'placeholder']),
  ariaInvalid: true,
};

export const NumberDisabledEmpty = Template.bind({});
NumberDisabledEmpty.args = {
  type: 'number',
  value: '',
  placeholder: generateLabel(['input', 'number', 'disabled', 'placeholder']),
  disabled: true,
};

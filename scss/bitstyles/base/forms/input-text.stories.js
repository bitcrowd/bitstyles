import Input from './Input';
import Label from './Label';

export default {
  title: 'Base/Forms/Input text',
  component: Input,
  subcomponents: { Label },
  argTypes: {},
};

const Template = (args) => {
  const wrapper = new DocumentFragment();
  const label = Label({
    htmlFor: args.id,
    ariaInvalid: args.ariaInvalid,
    ariaDisabled: args.disabled,
    children: [args.label],
  });
  const input = Input(args);
  wrapper.append(label);
  wrapper.append(input);
  return wrapper;
};

// ***** Text inputs with values ****************** //

export const TextWithValue = Template.bind({});
TextWithValue.args = {
  value: 'Input text with value',
  placeholder: 'Input text placeholder',
  label: 'Input text with value',
};
TextWithValue.parameters = {
  zeplinLink: [
    {
      name: 'base',
      link: 'https://app.zeplin.io/styleguide/63079b90d0bf4a646c46c227/components?coid=643fbb9d8f3dc7239794dccd',
    },
    {
      name: 'hover',
      link: 'https://app.zeplin.io/styleguide/63079b90d0bf4a646c46c227/components?coid=643fbba235ff5623d67079eb',
    },
    {
      name: 'active',
      link: 'https://app.zeplin.io/styleguide/63079b90d0bf4a646c46c227/components?coid=643fbb9e62f9d023b1e475f2',
    },
  ],
};

export const TextWithValueInvalid = Template.bind({});
TextWithValueInvalid.args = {
  value: 'Input text with value invalid',
  placeholder: 'Input text invalid placeholder',
  ariaInvalid: true,
  label: 'Input text with value invalid',
};
TextWithValueInvalid.parameters = {
  zeplinLink:
    'https://app.zeplin.io/styleguide/63079b90d0bf4a646c46c227/components?coid=643fbba098cca5236f016f66',
};

export const TextWithValueDisabled = Template.bind({});
TextWithValueDisabled.args = {
  value: 'Input text with value disabled',
  placeholder: 'Input text disabled placeholder',
  disabled: true,
  label: 'Input text with value disabled',
};
TextWithValueDisabled.parameters = {
  zeplinLink:
    'https://app.zeplin.io/styleguide/63079b90d0bf4a646c46c227/components?coid=645259551dc67b3c0c0f8634',
};

// ***** Text inputs without values ****************** //

export const TextEmpty = Template.bind({});
TextEmpty.args = {
  value: '',
  placeholder: 'Input text empty placeholder',
  label: 'Input text empty',
};
TextEmpty.parameters = {
  zeplinLink: [
    {
      name: 'base',
      link: 'https://app.zeplin.io/styleguide/63079b90d0bf4a646c46c227/components?coid=643fbb9c4fed4a236a1c340c',
    },
    {
      name: 'hover',
      link: 'https://app.zeplin.io/styleguide/63079b90d0bf4a646c46c227/components?coid=643fbba7ebc1c823de19d9b4',
    },
    {
      name: 'active',
      link: 'https://app.zeplin.io/styleguide/63079b90d0bf4a646c46c227/components?coid=643fbba6122e2e235f235223',
    },
  ],
};

export const TextEmptyInvalid = Template.bind({});
TextEmptyInvalid.args = {
  value: '',
  placeholder: 'Input text empty invalid placeholder',
  label: 'Input text empty invalid',
  ariaInvalid: true,
};
TextEmptyInvalid.parameters = {
  zeplinLink:
    'https://app.zeplin.io/styleguide/63079b90d0bf4a646c46c227/components?coid=643fbba425cd9623cef856c0',
};

export const TextEmptyDisabled = Template.bind({});
TextEmptyDisabled.args = {
  value: '',
  placeholder: 'Input text empty disabled placeholder',
  label: 'Input text empty disabled',
  disabled: true,
};
TextEmptyDisabled.parameters = {
  zeplinLink:
    'https://app.zeplin.io/styleguide/63079b90d0bf4a646c46c227/components?coid=643fbb9ff25cd023ae394942',
};

// ***** Email inputs with values ****************** //

export const EmailWithValue = Template.bind({});
EmailWithValue.args = {
  type: 'email',
  value: 'Input@email.base',
  placeholder: 'Input email placeholder',
  label: 'Input email with value',
};
EmailWithValue.parameters = {
  zeplinLink: [
    {
      name: 'base',
      link: 'https://app.zeplin.io/styleguide/63079b90d0bf4a646c46c227/components?coid=643fbb9c4fed4a236a1c340c',
    },
    {
      name: 'hover',
      link: 'https://app.zeplin.io/styleguide/63079b90d0bf4a646c46c227/components?coid=643fbba7ebc1c823de19d9b4',
    },
    {
      name: 'active',
      link: 'https://app.zeplin.io/styleguide/63079b90d0bf4a646c46c227/components?coid=643fbba6122e2e235f235223',
    },
  ],
};

export const EmailWithValueInvalid = Template.bind({});
EmailWithValueInvalid.args = {
  type: 'email',
  value: 'Input@email.invalid',
  placeholder: 'Input email with value invalid placeholder',
  label: 'Input email with value invalid',
  ariaInvalid: true,
};
EmailWithValueInvalid.parameters = {
  zeplinLink:
    'https://app.zeplin.io/styleguide/63079b90d0bf4a646c46c227/components?coid=643fbba098cca5236f016f66',
};

export const EmailWithValueDisabled = Template.bind({});
EmailWithValueDisabled.args = {
  type: 'email',
  value: 'Input@email.disabled',
  placeholder: 'Input email with value disabled placeholder',
  label: 'Input email with value disabled',
  disabled: true,
};
EmailWithValueDisabled.parameters = {
  zeplinLink:
    'https://app.zeplin.io/styleguide/63079b90d0bf4a646c46c227/components?coid=645259551dc67b3c0c0f8634',
};

// ***** Email inputs without values ****************** //

export const EmailEmpty = Template.bind({});
EmailEmpty.args = {
  type: 'email',
  value: '',
  placeholder: 'Input email empty placeholder',
  label: 'Input email empty',
};
EmailEmpty.parameters = {
  zeplinLink: [
    {
      name: 'base',
      link: 'https://app.zeplin.io/styleguide/63079b90d0bf4a646c46c227/components?coid=643fbb9c4fed4a236a1c340c',
    },
    {
      name: 'hover',
      link: 'https://app.zeplin.io/styleguide/63079b90d0bf4a646c46c227/components?coid=643fbba7ebc1c823de19d9b4',
    },
    {
      name: 'active',
      link: 'https://app.zeplin.io/styleguide/63079b90d0bf4a646c46c227/components?coid=643fbba6122e2e235f235223',
    },
  ],
};

export const EmailInvalidEmpty = Template.bind({});
EmailInvalidEmpty.args = {
  type: 'email',
  value: '',
  placeholder: 'Input email empty invalid placeholder',
  label: 'Input email empty invalid',
  ariaInvalid: true,
};
EmailInvalidEmpty.parameters = {
  zeplinLink:
    'https://app.zeplin.io/styleguide/63079b90d0bf4a646c46c227/components?coid=643fbba425cd9623cef856c0',
};

export const EmailDisabledEmpty = Template.bind({});
EmailDisabledEmpty.args = {
  type: 'email',
  value: '',
  placeholder: 'Input email empty disabled placeholder',
  label: 'Input email empty disabled',
  disabled: true,
};
EmailDisabledEmpty.parameters = {
  zeplinLink:
    'https://app.zeplin.io/styleguide/63079b90d0bf4a646c46c227/components?coid=643fbb9ff25cd023ae394942',
};

// ***** Number inputs with values ****************** //

export const NumberWithValue = Template.bind({});
NumberWithValue.args = {
  type: 'number',
  value: '012345',
  placeholder: 'Input number placeholder',
  label: 'Input number with value',
};

export const NumberWithValueInvalid = Template.bind({});
NumberWithValueInvalid.args = {
  type: 'number',
  value: 'Input email invalid',
  placeholder: 'Input number invalid placeholder',
  label: 'Input number with value invalid',
  ariaInvalid: true,
};

export const NumberWithValueDisabled = Template.bind({});
NumberWithValueDisabled.args = {
  type: 'number',
  value: '012345',
  placeholder: 'Input number disabled placeholder',
  label: 'Input number with value disabled',
  disabled: true,
};

// ***** Number inputs without values ****************** //

export const NumberEmpty = Template.bind({});
NumberEmpty.args = {
  type: 'number',
  value: '',
  placeholder: 'Input number placeholder',
  label: 'Input number empty',
};

export const NumberEmptyInvalid = Template.bind({});
NumberEmptyInvalid.args = {
  type: 'number',
  value: '',
  placeholder: 'Input number invalid placeholder',
  label: 'Input number empty invalid',
  ariaInvalid: true,
};

export const NumberEmptyDisabled = Template.bind({});
NumberEmptyDisabled.args = {
  type: 'number',
  value: '',
  placeholder: 'Input number disabled placeholder',
  label: 'Input number empty disabled',
  disabled: true,
};
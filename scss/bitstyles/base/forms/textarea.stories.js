import Label from './Label';
import Textarea from './Textarea';

export default {
  title: 'Base/Forms/Textarea',
  component: Textarea,
  argTypes: {},
};

const Template = (args) => {
  const wrapper = new DocumentFragment();
  wrapper.append(
    Label({
      htmlFor: args.id,
      ariaInvalid: args.ariaInvalid,
      children: [args.label],
    })
  );
  wrapper.append(Textarea(args));
  return wrapper;
};

// ***** Textareas with values ****************** //

export const WithValue = Template.bind({});
WithValue.args = {
  value: 'Textarea with value',
  placeholder: 'Textarea with value placeholder',
  label: 'Textarea with value',
};
WithValue.parameters = {
  zeplinLink:
    'https://app.zeplin.io/styleguide/63079b90d0bf4a646c46c227/components?coid=6447b1c78993dd3fe66afe6f',
};

export const WithValueInvalid = Template.bind({});
WithValueInvalid.args = {
  value: 'Textarea',
  ariaInvalid: true,
  placeholder: 'Textarea with value invalid placeholder',
  label: 'Textarea with value invalid',
};
WithValueInvalid.parameters = {
  zeplinLink:
    'https://app.zeplin.io/styleguide/63079b90d0bf4a646c46c227/components?coid=645a593bd47c930dfb98ccc0',
};

export const WithValueDisabled = Template.bind({});
WithValueDisabled.args = {
  value: 'Textarea with value disabled',
  disabled: true,
  placeholder: 'Textarea with value disabled placeholder',
  label: 'Textarea with value disabled',
};

// ***** Textareas without values ****************** //

export const Empty = Template.bind({});
Empty.args = {
  value: '',
  placeholder: 'Textarea empty placeholder',
  label: 'Textarea empty',
};
Empty.parameters = {
  zeplinLink:
    'https://app.zeplin.io/styleguide/63079b90d0bf4a646c46c227/components?coid=6447b1c473b2c445226d25da',
};

export const EmptyInvalid = Template.bind({});
EmptyInvalid.args = {
  value: '',
  ariaInvalid: true,
  placeholder: 'Textarea empty invalid placeholder',
  label: 'Textarea empty invalid',
};

export const EmptyDisabled = Template.bind({});
EmptyDisabled.args = {
  value: '',
  disabled: true,
  placeholder: 'Textarea empty disabled placeholder',
  label: 'Textarea empty disabled',
};

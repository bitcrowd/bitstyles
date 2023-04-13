import Textarea from './Textarea';
import { generateLabel } from '../../../../.storybook/helpers';

export default {
  title: 'Base/Forms/Textarea',
  component: Textarea,
  argTypes: {},
};

const Template = (args) => Textarea(args);

// ***** Textareas with values ****************** //

export const Base = Template.bind({});
Base.args = {
  value: generateLabel(['textarea']),
  placeholder: generateLabel(['textarea', 'placeholder']),
};

export const Invalid = Template.bind({});
Invalid.args = {
  value: generateLabel(['textarea']),
  ariaInvalid: true,
  placeholder: generateLabel(['textarea', 'invalid', 'placeholder']),
};

export const Disabled = Template.bind({});
Disabled.args = {
  value: generateLabel(['textarea']),
  disabled: true,
  placeholder: generateLabel(['textarea', 'invalid', 'placeholder']),
};

// ***** Textareas without values ****************** //

export const Empty = Template.bind({});
Empty.args = {
  value: '',
  placeholder: generateLabel(['textarea', 'empty', 'placeholder']),
};

export const InvalidEmpty = Template.bind({});
InvalidEmpty.args = {
  value: '',
  ariaInvalid: true,
  placeholder: generateLabel(['textarea', 'empty', 'placeholder']),
};

export const DisabledEmpty = Template.bind({});
DisabledEmpty.args = {
  value: '',
  disabled: true,
  placeholder: generateLabel(['textarea', 'empty', 'placeholder']),
};

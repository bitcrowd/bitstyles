import Select from './Select';
import { generateLabel } from '../../../../.storybook/helpers';

export default {
  title: 'Base/Forms/Select',
  component: Select,
  argTypes: {},
};

const Template = (args) => Select(args);

// ***** Selects with values ****************** //

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

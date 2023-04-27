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
Base.parameters = {
  zeplinLink: [
    {
      name: 'base',
      link: 'https://app.zeplin.io/styleguide/63079b90d0bf4a646c46c227/components?coid=6447aae722a9183fc59d4449',
    },
    {
      name: 'hover',
      link: 'https://app.zeplin.io/styleguide/63079b90d0bf4a646c46c227/components?coid=6447aae838a4ce3f997a0b0b',
    },
    {
      name: 'active',
      link: 'https://app.zeplin.io/styleguide/63079b90d0bf4a646c46c227/components?coid=6447aaeae8e2b0449814cad5',
    },
  ],
};
Base.parameters = {
  zeplinLink:
    'https://app.zeplin.io/styleguide/63079b90d0bf4a646c46c227/components?coid=6447aae722a9183fc59d4449',
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

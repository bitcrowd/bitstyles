import Label from './Label';
import Select from './Select';
import { generateLabel } from '../../../../.storybook/helpers';

export default {
  title: 'Base/Forms/Select',
  component: Select,
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
  wrapper.append(Select(args));
  return wrapper;
};

// ***** Selects with values ****************** //

export const Base = Template.bind({});
Base.args = {
  label: 'Select',
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
  label: 'Select invalid',
  ariaInvalid: true,
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: 'Select disabled',
  disabled: true,
};

import Link from './Link';

export default {
  title: 'Base/Anchor',
  component: Link,
};

const Template = (args) => Link(args);

// ***** Default size, each shape & color ****************** //

export const Base = Template.bind({});
Base.args = { children: 'link text' };
Base.parameters = {
  zeplinLink: [
    {
      name: 'base',
      link: 'https://app.zeplin.io/styleguide/63079b90d0bf4a646c46c227/components?coid=643d4ab88305482390d7e721',
    },
    {
      name: 'hover',
      link: 'https://app.zeplin.io/styleguide/63079b90d0bf4a646c46c227/components?coid=643d4abb122e2e235ff3ac3d',
    },
    {
      name: 'active',
      link: 'https://app.zeplin.io/styleguide/63079b90d0bf4a646c46c227/components?coid=643d4ab71ceb57241dc28ddb',
    },
    {
      name: 'visited',
      link: 'https://app.zeplin.io/styleguide/63079b90d0bf4a646c46c227/components?coid=643d4ca051e17223d3dd93d0',
    },
    {
      name: 'focus-visible',
      link: 'https://app.zeplin.io/styleguide/63079b90d0bf4a646c46c227/components?coid=643d4ab6d63f6e23f010ba93',
    },
  ],
};

export const Disabled = Template.bind({});
Disabled.args = { children: 'link text disabled', ariaDisabled: true };
Disabled.parameters = {
  zeplinLink:
    'https://app.zeplin.io/styleguide/63079b90d0bf4a646c46c227/components?coid=643d4aba468e962435f34ab9',
};

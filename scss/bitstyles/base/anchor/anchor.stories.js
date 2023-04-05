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
      link: 'https://app.zeplin.io/styleguide/63079b90d0bf4a646c46c227/components?coid=63318432639e6b1c16b8acfe',
    },
    {
      name: 'hover',
      link: 'https://app.zeplin.io/styleguide/63079b90d0bf4a646c46c227/components?coid=63318433c4678715d864a706',
    },
    {
      name: 'active',
      link: 'https://app.zeplin.io/styleguide/63079b90d0bf4a646c46c227/components?coid=633184318a0b2514c945bbd4',
    },
  ],
};

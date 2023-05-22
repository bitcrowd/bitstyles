import Link from '../../base/anchor/Link';

export default {
  title: 'Atoms/Link',
  component: Link,
};

const Template = (args) => Link(args);

// ***** Default links ****************** //

export const ButtonAsLink = Template.bind({});
ButtonAsLink.args = { children: 'Button as link', element: 'button' };
ButtonAsLink.parameters = {
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

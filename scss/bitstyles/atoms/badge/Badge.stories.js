import Badge from './Badge';

export default {
  title: 'Atoms/Badge',
  component: Badge,
  argTypes: {
    theme: {
      description:
        'Specifies the color theme to use for the badge, defined using the global theme system.',
      control: {
        type: 'select',
        options: [
          'grayscale',
          'brand-1',
          'brand-2',
          'danger',
          'positive',
          'warning',
        ],
      },
    },
    sizeVariant: {
      description:
        'Specifies the size of the badge, defined in Sass. Defaults to base, no need to specify',
      control: {
        type: 'select',
        options: ['base', 'small'],
      },
    },
  },
};

const dummyOnClick = () => {};

const Template = (args) => Badge(args);

export const Base = Template.bind({});
Base.args = {};
Base.parameters = {
  zeplinLink:
    'https://app.zeplin.io/styleguide/63079b90d0bf4a646c46c227/components?coid=632c7ba5807b78480a66795c',
};

export const Brand1 = Template.bind({});
Brand1.args = { theme: 'brand-1' };
Brand1.parameters = {
  zeplinLink:
    'https://app.zeplin.io/styleguide/63079b90d0bf4a646c46c227/components?coid=632c7b9a75d61d40cf78c122',
};

export const Brand2 = Template.bind({});
Brand2.args = { theme: 'brand-2' };
Brand2.parameters = {
  zeplinLink:
    'https://app.zeplin.io/styleguide/63079b90d0bf4a646c46c227/components?coid=632c7ba618538e470ca4b512',
};

export const Danger = Template.bind({});
Danger.args = { theme: 'danger' };
Danger.parameters = {
  zeplinLink:
    'https://app.zeplin.io/styleguide/63079b90d0bf4a646c46c227/components?coid=632c7ba44ad6dd3ed29863fa',
};

export const Warning = Template.bind({});
Warning.args = { theme: 'warning' };
Warning.parameters = {
  zeplinLink:
    'https://app.zeplin.io/styleguide/63079b90d0bf4a646c46c227/components?coid=632c7ba496b09f47dd63855f',
};

export const Positive = Template.bind({});
Positive.args = { theme: 'positive' };
Positive.parameters = {
  zeplinLink:
    'https://app.zeplin.io/styleguide/63079b90d0bf4a646c46c227/components?coid=632c7ba1807b78480a66793e',
};

export const BaseSmall = Template.bind({});
BaseSmall.args = { sizeVariant: ['small'] };
BaseSmall.parameters = {
  zeplinLink:
    'https://app.zeplin.io/styleguide/63079b90d0bf4a646c46c227/components?coid=640763d3ab7adf3224b8fc6f',
};

export const Brand1Small = Template.bind({});
Brand1Small.args = { theme: 'brand-1', sizeVariant: ['small'] };
Brand1Small.parameters = {
  zeplinLink:
    'https://app.zeplin.io/styleguide/63079b90d0bf4a646c46c227/components?coid=640763e4ad5fd231f05b9b6c',
};

export const Brand2Small = Template.bind({});
Brand2Small.args = { theme: 'brand-2', sizeVariant: ['small'] };
Brand2Small.parameters = {
  zeplinLink:
    'https://app.zeplin.io/styleguide/63079b90d0bf4a646c46c227/components?coid=640763e60a5a09421249d883',
};

export const DangerSmall = Template.bind({});
DangerSmall.args = { theme: 'danger', sizeVariant: ['small'] };
DangerSmall.parameters = {
  zeplinLink:
    'https://app.zeplin.io/styleguide/63079b90d0bf4a646c46c227/components?coid=640763e077891e40c6ef5624',
};

export const WarningSmall = Template.bind({});
WarningSmall.args = { theme: 'warning', sizeVariant: ['small'] };
WarningSmall.parameters = {
  zeplinLink:
    'https://app.zeplin.io/styleguide/63079b90d0bf4a646c46c227/components?coid=640763e784056140d96d1472',
};

export const PositiveSmall = Template.bind({});
PositiveSmall.args = { theme: 'positive', sizeVariant: ['small'] };
PositiveSmall.parameters = {
  zeplinLink:
    'https://app.zeplin.io/styleguide/63079b90d0bf4a646c46c227/components?coid=640763e03e79f8416e89de11',
};

export const BaseButton = Template.bind({});
BaseButton.args = { onClick: dummyOnClick };
BaseButton.parameters = {
  zeplinLink: [
    {
      name: 'base',
      link: 'https://app.zeplin.io/styleguide/63079b90d0bf4a646c46c227/components?coid=641dcd3b32fe37330986b5b6',
    },
    {
      name: 'hover',
      link: 'https://app.zeplin.io/styleguide/63079b90d0bf4a646c46c227/components?coid=641dcd426add3735ea1ad4b8',
    },
    {
      name: 'active',
      link: 'https://app.zeplin.io/styleguide/63079b90d0bf4a646c46c227/components?coid=641dcd476d5ab82ff4c7a931',
    },
  ],
};

export const Brand1Button = Template.bind({});
Brand1Button.args = { theme: 'brand-1', onClick: dummyOnClick };
Brand1Button.parameters = {
  zeplinLink: [
    {
      name: 'base',
      link: 'https://app.zeplin.io/styleguide/63079b90d0bf4a646c46c227/components?coid=641dcd383c24e12f89e144df',
    },
    {
      name: 'hover',
      link: 'https://app.zeplin.io/styleguide/63079b90d0bf4a646c46c227/components?coid=641dcd3d006ff931a7ce6cfa',
    },
    {
      name: 'active',
      link: 'https://app.zeplin.io/styleguide/63079b90d0bf4a646c46c227/components?coid=641dcd435a5c6132d8df7a4f',
    },
  ],
};

export const Brand2Button = Template.bind({});
Brand2Button.args = { theme: 'brand-2', onClick: dummyOnClick };
Brand2Button.parameters = {
  zeplinLink: [
    {
      name: 'base',
      link: 'https://app.zeplin.io/styleguide/63079b90d0bf4a646c46c227/components?coid=641dcd4218b3d72f822cf2fc',
    },
    {
      name: 'hover',
      link: 'https://app.zeplin.io/styleguide/63079b90d0bf4a646c46c227/components?coid=641dcd49c3503a358c47ce83',
    },
    {
      name: 'active',
      link: 'https://app.zeplin.io/styleguide/63079b90d0bf4a646c46c227/components?coid=641dcd486fcfa1360b6a34f0',
    },
  ],
};

export const DangerButton = Template.bind({});
DangerButton.args = { theme: 'danger', onClick: dummyOnClick };
DangerButton.parameters = {
  zeplinLink: [
    {
      name: 'base',
      link: 'https://app.zeplin.io/styleguide/63079b90d0bf4a646c46c227/components?coid=641dcd3e454d9c3581b82e3c',
    },
    {
      name: 'hover',
      link: 'https://app.zeplin.io/styleguide/63079b90d0bf4a646c46c227/components?coid=641dcd4489756b324ea9f841',
    },
    {
      name: 'active',
      link: 'https://app.zeplin.io/styleguide/63079b90d0bf4a646c46c227/components?coid=641dcd49c3503a358c47ceaa',
    },
  ],
};

export const WarningButton = Template.bind({});
WarningButton.args = { theme: 'warning', onClick: dummyOnClick };
WarningButton.parameters = {
  zeplinLink: [
    {
      name: 'base',
      link: 'https://app.zeplin.io/styleguide/63079b90d0bf4a646c46c227/components?coid=641dcd3b3290ed2f44b203a8',
    },
    {
      name: 'hover',
      link: 'https://app.zeplin.io/styleguide/63079b90d0bf4a646c46c227/components?coid=641dcd40d8beb9354edfa605',
    },
    {
      name: 'active',
      link: 'https://app.zeplin.io/styleguide/63079b90d0bf4a646c46c227/components?coid=641dcd46b5e4e6320601a0ca',
    },
  ],
};

export const PositiveButton = Template.bind({});
PositiveButton.args = { theme: 'positive', onClick: dummyOnClick };
PositiveButton.parameters = {
  zeplinLink: [
    {
      name: 'base',
      link: 'https://app.zeplin.io/styleguide/63079b90d0bf4a646c46c227/components?coid=641dcd41e56a7631ae908b63',
    },
    {
      name: 'hover',
      link: 'https://app.zeplin.io/styleguide/63079b90d0bf4a646c46c227/components?coid=641dcd3ff1ef292fdde3ae80',
    },
    {
      name: 'active',
      link: 'https://app.zeplin.io/styleguide/63079b90d0bf4a646c46c227/components?coid=641dcd45f4c90e32fe52585f',
    },
  ],
};

export const BaseButtonSmall = Template.bind({});
BaseButtonSmall.args = { onClick: dummyOnClick, sizeVariant: ['small'] };

export const Brand1ButtonSmall = Template.bind({});
Brand1ButtonSmall.args = {
  theme: 'brand-1',
  onClick: dummyOnClick,
  sizeVariant: ['small'],
};

export const Brand2ButtonSmall = Template.bind({});
Brand2ButtonSmall.args = {
  theme: 'brand-2',
  onClick: dummyOnClick,
  sizeVariant: ['small'],
};

export const DangerButtonSmall = Template.bind({});
DangerButtonSmall.args = {
  theme: 'danger',
  onClick: dummyOnClick,
  sizeVariant: ['small'],
};

export const WarningButtonSmall = Template.bind({});
WarningButtonSmall.args = {
  theme: 'warning',
  onClick: dummyOnClick,
  sizeVariant: ['small'],
};

export const PositiveButtonSmall = Template.bind({});
PositiveButtonSmall.args = {
  theme: 'positive',
  onClick: dummyOnClick,
  sizeVariant: ['small'],
};

const TemplateBadgeWithLabel = (args) => {
  const wrapper = document.createElement('div');
  const trailingLabel = document.createElement('span');
  trailingLabel.classList.add('u-margin-m-left');
  trailingLabel.innerHTML = 'Trailing label';
  wrapper.append(Badge(args));
  wrapper.append(trailingLabel);
  return wrapper;
};

export const BadgeWithLabel = TemplateBadgeWithLabel.bind({});
BadgeWithLabel.args = {
  theme: 'default',
  sizeVariant: ['small'],
};
BadgeWithLabel.parameters = {
  zeplinLink:
    'https://app.zeplin.io/styleguide/63079b90d0bf4a646c46c227/components?coid=640ef6a6805d9020e491d493',
};

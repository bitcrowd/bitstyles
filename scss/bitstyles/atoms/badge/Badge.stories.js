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

export const Brand1 = Template.bind({});
Brand1.args = { theme: 'brand-1' };

export const Brand2 = Template.bind({});
Brand2.args = { theme: 'brand-2' };

export const Danger = Template.bind({});
Danger.args = { theme: 'danger' };

export const Warning = Template.bind({});
Warning.args = { theme: 'warning' };

export const Positive = Template.bind({});
Positive.args = { theme: 'positive' };

export const BaseSmall = Template.bind({});
BaseSmall.args = { sizeVariant: 'small' };

export const Brand1Small = Template.bind({});
Brand1Small.args = { theme: 'brand-1', sizeVariant: 'small' };

export const Brand2Small = Template.bind({});
Brand2Small.args = { theme: 'brand-2', sizeVariant: 'small' };

export const DangerSmall = Template.bind({});
DangerSmall.args = { theme: 'danger', sizeVariant: 'small' };

export const WarningSmall = Template.bind({});
WarningSmall.args = { theme: 'warning', sizeVariant: 'small' };

export const PositiveSmall = Template.bind({});
PositiveSmall.args = { theme: 'positive', sizeVariant: 'small' };

export const BaseButton = Template.bind({});
BaseButton.args = { onClick: dummyOnClick };

export const Brand1Button = Template.bind({});
Brand1Button.args = { theme: 'brand-1', onClick: dummyOnClick };

export const Brand2Button = Template.bind({});
Brand2Button.args = { theme: 'brand-2', onClick: dummyOnClick };

export const DangerButton = Template.bind({});
DangerButton.args = { theme: 'danger', onClick: dummyOnClick };

export const WarningButton = Template.bind({});
WarningButton.args = { theme: 'warning', onClick: dummyOnClick };

export const PositiveButton = Template.bind({});
PositiveButton.args = { theme: 'positive', onClick: dummyOnClick };

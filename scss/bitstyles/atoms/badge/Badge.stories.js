import Badge from './Badge';

export default {
  title: 'Atoms/Badge',
  component: Badge,
  argTypes: {
    colorVariant: {
      description:
        'Specifies the color set to use for the badge, defined in Sass.',
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

const Template = (args) => Badge(args);

export const Base = Template.bind({});
Base.args = {};

export const Brand1 = Template.bind({});
Brand1.args = { colorVariant: 'brand-1' };

export const Brand2 = Template.bind({});
Brand2.args = { colorVariant: 'brand-2' };

export const Danger = Template.bind({});
Danger.args = { colorVariant: 'danger' };

export const Warning = Template.bind({});
Warning.args = { colorVariant: 'warning' };

export const Positive = Template.bind({});
Positive.args = { colorVariant: 'positive' };

export const BaseSmall = Template.bind({});
BaseSmall.args = { sizeVariant: 'small' };

export const Brand1Small = Template.bind({});
Brand1Small.args = { colorVariant: 'brand-1', sizeVariant: 'small' };

export const Brand2Small = Template.bind({});
Brand2Small.args = { colorVariant: 'brand-2', sizeVariant: 'small' };

export const DangerSmall = Template.bind({});
DangerSmall.args = { colorVariant: 'danger', sizeVariant: 'small' };

export const WarningSmall = Template.bind({});
WarningSmall.args = { colorVariant: 'warning', sizeVariant: 'small' };

export const PositiveSmall = Template.bind({});
PositiveSmall.args = { colorVariant: 'positive', sizeVariant: 'small' };

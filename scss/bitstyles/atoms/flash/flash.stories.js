import Flash from './Flash';

export default {
  title: 'Atoms/Flash',
  component: Flash,
  argTypes: {
    theme: {
      description:
        'Specifies the color set to use for the button, defined in Sass.',
      control: {
        type: 'select',
        options: [
          'base',
          'secondary',
          'transparent',
          'outline',
          'danger',
          'tab',
        ],
      },
    },
    shapeVariant: {
      description:
        'Specifies the shape of the button, defined in Sass. Defaults to base, with no need to specify',
      control: {
        type: 'select',
        options: ['base', 'small', 'square', 'round'],
      },
    },
  },
};

const Template = (args) => Flash(args);

// ***** Theme variants ****************** //

export const Base = Template.bind({});
Base.args = {};
Base.parameters = {
  zeplinLink:
    'https://app.zeplin.io/styleguide/63079b90d0bf4a646c46c227/components?coid=6331bd93290bbf15ece3af28',
};

export const Danger = Template.bind({});
Danger.args = { theme: 'danger' };
Danger.parameters = {
  zeplinLink:
    'https://app.zeplin.io/styleguide/63079b90d0bf4a646c46c227/components?coid=6331bd96738ff61b62c51df3',
};

export const Warning = Template.bind({});
Warning.args = { theme: 'warning' };
Warning.parameters = {
  zeplinLink:
    'https://app.zeplin.io/styleguide/63079b90d0bf4a646c46c227/components?coid=6331bd5c81e8be1bb6c6129f',
};

export const Positive = Template.bind({});
Positive.args = { theme: 'positive' };
Positive.parameters = {
  zeplinLink:
    'https://app.zeplin.io/styleguide/63079b90d0bf4a646c46c227/components?coid=6331bd96d1e9ea1a4033367b',
};

// ***** With icons ****************** //

export const BaseIcon = Template.bind({});
BaseIcon.args = { icon: 'info-circle' };
BaseIcon.parameters = {
  zeplinLink:
    'https://app.zeplin.io/styleguide/63079b90d0bf4a646c46c227/components?coid=6331bd93290bbf15ece3af28',
};

export const DangerIcon = Template.bind({});
DangerIcon.args = { theme: 'danger', icon: 'exclamation' };
DangerIcon.parameters = {
  zeplinLink:
    'https://app.zeplin.io/styleguide/63079b90d0bf4a646c46c227/components?coid=6331bd96738ff61b62c51df3',
};

export const WarningIcon = Template.bind({});
WarningIcon.args = { theme: 'warning', icon: 'question-circle' };
WarningIcon.parameters = {
  zeplinLink:
    'https://app.zeplin.io/styleguide/63079b90d0bf4a646c46c227/components?coid=6331bd5c81e8be1bb6c6129f',
};

export const PositiveIcon = Template.bind({});
PositiveIcon.args = { theme: 'positive', icon: 'check-circle' };
PositiveIcon.parameters = {
  zeplinLink:
    'https://app.zeplin.io/styleguide/63079b90d0bf4a646c46c227/components?coid=6331bd96d1e9ea1a4033367b',
};

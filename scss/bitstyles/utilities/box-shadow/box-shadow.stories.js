import Shadow from './Shadow';

export default {
  title: 'Utilities/shadow',
  component: Shadow,
  argTypes: {
    colorVariant: {
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
  },
};

const Template = (args) => Shadow(args);

// ***** Default size, each shape & color ****************** //

export const Brand1 = Template.bind({});
Brand1.args = { children: 'u-shadow-brand-1', colorVariant: ['brand-1'] };
Brand1.parameters = {
  zeplinLink:
    'https://app.zeplin.io/styleguide/63079b90d0bf4a646c46c227/components?coid=641b023525134b217fa46bf9',
};

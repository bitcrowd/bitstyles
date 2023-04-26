import Shadow from './Shadow';

export default {
  title: 'Design tokens/Shadows',
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
Brand1.args = {
  children: 'Brand 1',
  colorVariant: ['brand-1'],
};
Brand1.parameters = {
  zeplinLink:
    'https://app.zeplin.io/styleguide/63079b90d0bf4a646c46c227/components?coid=641b023525134b217fa46bf9',
};

export const Brand1Center = Template.bind({});
Brand1Center.args = {
  children: 'Brand 1 center',
  colorVariant: ['brand-1-center'],
};
Brand1Center.parameters = {
  zeplinLink:
    'https://app.zeplin.io/styleguide/63079b90d0bf4a646c46c227/components?coid=641b0239ce0e9122c4044219',
};

export const Brand2 = Template.bind({});
Brand2.args = {
  children: 'Brand 2',
  colorVariant: ['brand-2'],
};
Brand2.parameters = {
  zeplinLink:
    'https://app.zeplin.io/styleguide/63079b90d0bf4a646c46c227/components?coid=641b023525134b217fa46bf9',
};

export const Gray = Template.bind({});
Gray.args = {
  children: 'Gray',
  colorVariant: ['gray'],
};
Gray.parameters = {
  zeplinLink:
    'https://app.zeplin.io/styleguide/63079b90d0bf4a646c46c227/components?coid=641b0237790e9921a7aa8ab0',
};

export const GrayCenter = Template.bind({});
GrayCenter.args = {
  children: 'Gray center',
  colorVariant: ['gray-center'],
};
GrayCenter.parameters = {
  zeplinLink:
    'https://app.zeplin.io/styleguide/63079b90d0bf4a646c46c227/components?coid=641b15b8ba6dab2f77b19e38',
};

export const Positive = Template.bind({});
Positive.args = {
  children: 'Positive',
  colorVariant: ['positive'],
};
Positive.parameters = {
  zeplinLink:
    'https://app.zeplin.io/styleguide/63079b90d0bf4a646c46c227/components?coid=641b023be2d7fa21ff82c779',
};

export const Warning = Template.bind({});
Warning.args = {
  children: 'Warning',
  colorVariant: ['warning'],
};
Warning.parameters = {
  zeplinLink:
    'https://app.zeplin.io/styleguide/63079b90d0bf4a646c46c227/components?coid=641b023012835a2313731d7b',
};

export const Danger = Template.bind({});
Danger.args = {
  children: 'Danger',
  colorVariant: ['danger'],
};
Danger.parameters = {
  zeplinLink:
    'https://app.zeplin.io/styleguide/63079b90d0bf4a646c46c227/components?coid=641b0231f6081c220c6e4ea0',
};

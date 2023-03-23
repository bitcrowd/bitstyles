import Button from '../button/Button';
import icons from '../../../../assets/images/icons.svg';

export default {
  title: 'Atoms/Button',
  component: Button,
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

const Template = (args) => Button(args);

// ***** Base shapes ****************** //

export const DefaultPrimary = Template.bind({});
DefaultPrimary.args = {};
DefaultPrimary.parameters = {
  zeplinLink: [
    {
      name: 'base',
      link: 'https://app.zeplin.io/styleguide/63079b90d0bf4a646c46c227/components?coid=6363da7dc51a6528e9b45875',
    },
    {
      name: 'hover',
      link: 'https://app.zeplin.io/styleguide/63079b90d0bf4a646c46c227/components?coid=6363da7e29f7bb28f410993f',
    },
    {
      name: 'active',
      link: 'https://app.zeplin.io/styleguide/63079b90d0bf4a646c46c227/components?coid=6363da791e853730fcd23c66',
    },
  ],
};

export const DefaultSquarePrimary = Template.bind({});
DefaultSquarePrimary.args = {
  shapeVariant: ['square'],
  children: `<svg width="20" height="20" class="a-icon a-icon--m" aria-hidden="true" focusable="false"><use xlink:href="${icons}#icon-plus"></use></svg><span class="u-sr-only">Add</span>`,
};
DefaultSquarePrimary.parameters = {
  zeplinLink: [
    {
      name: 'base',
      link: 'https://app.zeplin.io/styleguide/63079b90d0bf4a646c46c227/components?coid=6363da72602a192ac86f33b4',
    },
    {
      name: 'hover',
      link: 'https://app.zeplin.io/styleguide/63079b90d0bf4a646c46c227/components?coid=6363da7a99d34169bc74e07c',
    },
    {
      name: 'active',
      link: 'https://app.zeplin.io/styleguide/63079b90d0bf4a646c46c227/components?coid=6363da711fde7a3128496618',
    },
  ],
};

export const DefaultRoundPrimary = Template.bind({});
DefaultRoundPrimary.args = {
  shapeVariant: ['round', 'square'],
  children: `<svg width="20" height="20" class="a-icon a-icon--m" aria-hidden="true" focusable="false"><use xlink:href="${icons}#icon-plus"></use></svg><span class="u-sr-only">Add</span>`,
};

// ***** Small shapes ****************** //

export const SmallPrimary = Template.bind({});
SmallPrimary.args = { shapeVariant: ['small'] };
SmallPrimary.parameters = {
  zeplinLink: [
    {
      name: 'base',
      link: 'https://app.zeplin.io/styleguide/63079b90d0bf4a646c46c227/components?coid=6363da7dc51a6528e9b45875',
    },
    {
      name: 'hover',
      link: 'https://app.zeplin.io/styleguide/63079b90d0bf4a646c46c227/components?coid=6363da7e29f7bb28f410993f',
    },
    {
      name: 'active',
      link: 'https://app.zeplin.io/styleguide/63079b90d0bf4a646c46c227/components?coid=6363da791e853730fcd23c66',
    },
  ],
};

export const SmallSecondary = Template.bind({});
SmallSecondary.args = { shapeVariant: ['small'], colorVariant: ['secondary'] };

export const SmallTransparent = Template.bind({});
SmallTransparent.args = {
  shapeVariant: ['small'],
  colorVariant: ['transparent'],
};

export const SmallOutline = Template.bind({});
SmallOutline.args = { shapeVariant: ['small'], colorVariant: ['outline'] };

export const SmallSquarePrimary = Template.bind({});
SmallSquarePrimary.args = {
  shapeVariant: ['square', 'small'],
  children: `<svg width="20" height="20" class="a-icon a-icon--m" aria-hidden="true" focusable="false"><use xlink:href="${icons}#icon-plus"></use></svg><span class="u-sr-only">Add</span>`,
};

export const SmallSquareSecondary = Template.bind({});
SmallSquareSecondary.args = {
  colorVariant: ['secondary'],
  shapeVariant: ['square', 'small'],
  children: `<svg width="20" height="20" class="a-icon a-icon--m" aria-hidden="true" focusable="false"><use xlink:href="${icons}#icon-plus"></use></svg><span class="u-sr-only">Add</span>`,
};

export const SmallSquareTransparent = Template.bind({});
SmallSquareTransparent.args = {
  colorVariant: ['transparent'],
  shapeVariant: ['square', 'small'],
  children: `<svg width="20" height="20" class="a-icon a-icon--m" aria-hidden="true" focusable="false"><use xlink:href="${icons}#icon-plus"></use></svg><span class="u-sr-only">Add</span>`,
};

export const SmallSquareOutline = Template.bind({});
SmallSquareOutline.args = {
  colorVariant: ['outline'],
  shapeVariant: ['square', 'small'],
  children: `<svg width="20" height="20" class="a-icon a-icon--m" aria-hidden="true" focusable="false"><use xlink:href="${icons}#icon-plus"></use></svg><span class="u-sr-only">Add</span>`,
};

export const SmallRoundPrimary = Template.bind({});
SmallRoundPrimary.args = {
  shapeVariant: ['small', 'round', 'square'],
  children: `<svg width="20" height="20" class="a-icon a-icon--m" aria-hidden="true" focusable="false"><use xlink:href="${icons}#icon-plus"></use></svg><span class="u-sr-only">Add</span>`,
};

export const SmallRoundSecondary = Template.bind({});
SmallRoundSecondary.args = {
  colorVariant: ['secondary'],
  shapeVariant: ['small', 'round', 'square'],
  children: `<svg width="20" height="20" class="a-icon a-icon--m" aria-hidden="true" focusable="false"><use xlink:href="${icons}#icon-plus"></use></svg><span class="u-sr-only">Add</span>`,
};

export const SmallRoundTransparent = Template.bind({});
SmallRoundTransparent.args = {
  colorVariant: ['transparent'],
  shapeVariant: ['small', 'round', 'square'],
  children: `<svg width="20" height="20" class="a-icon a-icon--m" aria-hidden="true" focusable="false"><use xlink:href="${icons}#icon-plus"></use></svg><span class="u-sr-only">Add</span>`,
};

export const SmallRoundOutline = Template.bind({});
SmallRoundOutline.args = {
  colorVariant: ['outline'],
  shapeVariant: ['small', 'round', 'square'],
  children: `<svg width="20" height="20" class="a-icon a-icon--m" aria-hidden="true" focusable="false"><use xlink:href="${icons}#icon-plus"></use></svg><span class="u-sr-only">Add</span>`,
};

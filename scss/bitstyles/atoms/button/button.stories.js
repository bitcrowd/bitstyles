import Button from './Button';
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

// ***** Default size, each shape & color ****************** //

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

export const DefaultSecondary = Template.bind({});
DefaultSecondary.args = { colorVariant: ['secondary'] };
DefaultSecondary.parameters = {
  zeplinLink: [
    {
      name: 'base',
      link: 'https://app.zeplin.io/styleguide/63079b90d0bf4a646c46c227/components?coid=6363dd85f80b612af4a6d69f',
    },
    {
      name: 'hover',
      link: 'https://app.zeplin.io/styleguide/63079b90d0bf4a646c46c227/components?coid=6363dd8599875831768d531a',
    },
    {
      name: 'active',
      link: 'https://app.zeplin.io/styleguide/63079b90d0bf4a646c46c227/components?coid=6363dd83d271fe6b0009331c',
    },
  ],
};

export const DefaultTransparent = Template.bind({});
DefaultTransparent.args = { colorVariant: ['transparent'] };
DefaultTransparent.parameters = {
  zeplinLink: [
    {
      name: 'base',
      link: 'https://app.zeplin.io/styleguide/63079b90d0bf4a646c46c227/components?coid=6363dd2e5fb0c62ff0eae3c7',
    },
    {
      name: 'hover',
      link: 'https://app.zeplin.io/styleguide/63079b90d0bf4a646c46c227/components?coid=6363dd3ae8e699685b5fb439',
    },
    {
      name: 'active',
      link: 'https://app.zeplin.io/styleguide/63079b90d0bf4a646c46c227/components?coid=6363dd3125f5f931e3883be6',
    },
  ],
};

export const DefaultOutline = Template.bind({});
DefaultOutline.args = { colorVariant: ['outline'] };
DefaultOutline.parameters = {
  zeplinLink: [
    {
      name: 'base',
      link: 'https://app.zeplin.io/styleguide/63079b90d0bf4a646c46c227/components?coid=6363dcedf088f629b4177135',
    },
    {
      name: 'hover',
      link: 'https://app.zeplin.io/styleguide/63079b90d0bf4a646c46c227/components?coid=6363dcefbb6bd26c10aa702c',
    },
    {
      name: 'active',
      link: 'https://app.zeplin.io/styleguide/63079b90d0bf4a646c46c227/components?coid=6363dcf0cb7dbd2fca515b70',
    },
  ],
};

const baseTabArgs = {
  colorVariant: ['tab'],
  role: 'tab',
};

const TabDecorator = (story) => {
  const decorator = document.createElement('ul');
  decorator.setAttribute('role', 'tablist');
  decorator.appendChild(story());
  return decorator;
};

export const DefaultTab = Template.bind({});
DefaultTab.decorators = [TabDecorator];
DefaultTab.args = { ...baseTabArgs };
DefaultTab.parameters = {
  zeplinLink: [
    {
      name: 'base',
      link: 'https://app.zeplin.io/styleguide/63079b90d0bf4a646c46c227/components?coid=640094a81f046353009612ce',
    },
    {
      name: 'hover',
      link: 'https://app.zeplin.io/styleguide/63079b90d0bf4a646c46c227/components?coid=640094b16e5d7140eb0735c8',
    },
    {
      name: 'active',
      link: 'https://app.zeplin.io/styleguide/63079b90d0bf4a646c46c227/components?coid=640094b2d4c5cc51aff0b511',
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

export const DefaultSquareSecondary = Template.bind({});
DefaultSquareSecondary.args = {
  shapeVariant: ['square'],
  colorVariant: ['secondary'],
  children: `<svg width="20" height="20" class="a-icon a-icon--m" aria-hidden="true" focusable="false"><use xlink:href="${icons}#icon-plus"></use></svg><span class="u-sr-only">Add</span>`,
};
DefaultSquareSecondary.parameters = {
  zeplinLink: [
    {
      name: 'base',
      link: 'https://app.zeplin.io/styleguide/63079b90d0bf4a646c46c227/components?coid=6363dd82c51a6528e9b46d59',
    },
    {
      name: 'hover',
      link: 'https://app.zeplin.io/styleguide/63079b90d0bf4a646c46c227/components?coid=6363dd897a74d86af1a5a542',
    },
    {
      name: 'active',
      link: 'https://app.zeplin.io/styleguide/63079b90d0bf4a646c46c227/components?coid=6363dd834542a728c8ec302a',
    },
  ],
};

export const DefaultSquareTransparent = Template.bind({});
DefaultSquareTransparent.args = {
  shapeVariant: ['square'],
  colorVariant: ['transparent'],
  children: `<svg width="20" height="20" class="a-icon a-icon--m" aria-hidden="true" focusable="false"><use xlink:href="${icons}#icon-plus"></use></svg><span class="u-sr-only">Add</span>`,
};
DefaultSquareTransparent.parameters = {
  zeplinLink: [
    {
      name: 'base',
      link: 'https://app.zeplin.io/styleguide/63079b90d0bf4a646c46c227/components?coid=6363dd33b78eb26789d78c52',
    },
    {
      name: 'hover',
      link: 'https://app.zeplin.io/styleguide/63079b90d0bf4a646c46c227/components?coid=6363dd3971bf8e2f8697ce41',
    },
    {
      name: 'active',
      link: 'https://app.zeplin.io/styleguide/63079b90d0bf4a646c46c227/components?coid=6363dd2d99d34169bc74f62f',
    },
  ],
};

export const DefaultSquareOutline = Template.bind({});
DefaultSquareOutline.args = {
  shapeVariant: ['square'],
  colorVariant: ['outline'],
  children: `<svg width="20" height="20" class="a-icon a-icon--m" aria-hidden="true" focusable="false"><use xlink:href="${icons}#icon-plus"></use></svg><span class="u-sr-only">Add</span>`,
};
DefaultSquareOutline.parameters = {
  zeplinLink: [
    {
      name: 'base',
      link: 'https://app.zeplin.io/styleguide/63079b90d0bf4a646c46c227/components?coid=6363dce87305863282524d1f',
    },
    {
      name: 'hover',
      link: 'https://app.zeplin.io/styleguide/63079b90d0bf4a646c46c227/components?coid=6363dce990b73b2be58d74fd',
    },
    {
      name: 'active',
      link: 'https://app.zeplin.io/styleguide/63079b90d0bf4a646c46c227/components?coid=6363dceaaf1a192f9d8545db',
    },
  ],
};

export const DefaultRoundPrimary = Template.bind({});
DefaultRoundPrimary.args = {
  shapeVariant: ['round', 'square'],
  children: `<svg width="20" height="20" class="a-icon a-icon--m" aria-hidden="true" focusable="false"><use xlink:href="${icons}#icon-plus"></use></svg><span class="u-sr-only">Add</span>`,
};
DefaultRoundPrimary.parameters = {
  zeplinLink: [
    {
      name: 'base',
      link: 'https://app.zeplin.io/styleguide/63079b90d0bf4a646c46c227/components?coid=6422b47e1e3fd922737f2544',
    },
    {
      name: 'hover',
      link: 'https://app.zeplin.io/styleguide/63079b90d0bf4a646c46c227/components?coid=6422b47d52cb6022d9e0e8cd',
    },
    {
      name: 'active',
      link: 'https://app.zeplin.io/styleguide/63079b90d0bf4a646c46c227/components?coid=6422b4841be18d22609be56f',
    },
  ],
};

export const DefaultRoundSecondary = Template.bind({});
DefaultRoundSecondary.args = {
  shapeVariant: ['round', 'square'],
  colorVariant: ['secondary'],
  children: `<svg width="20" height="20" class="a-icon a-icon--m" aria-hidden="true" focusable="false"><use xlink:href="${icons}#icon-plus"></use></svg><span class="u-sr-only">Add</span>`,
};
DefaultRoundSecondary.parameters = {
  zeplinLink: [
    {
      name: 'base',
      link: 'https://app.zeplin.io/styleguide/63079b90d0bf4a646c46c227/components?coid=6422b4bc85fed1220a826c5a',
    },
    {
      name: 'hover',
      link: 'https://app.zeplin.io/styleguide/63079b90d0bf4a646c46c227/components?coid=6422b4b5b2161522b27906c7',
    },
    {
      name: 'active',
      link: 'https://app.zeplin.io/styleguide/63079b90d0bf4a646c46c227/components?coid=6422b4b0044e112200e37c24',
    },
  ],
};

export const DefaultRoundTransparent = Template.bind({});
DefaultRoundTransparent.args = {
  shapeVariant: ['round', 'square'],
  colorVariant: ['transparent'],
  children: `<svg width="20" height="20" class="a-icon a-icon--m" aria-hidden="true" focusable="false"><use xlink:href="${icons}#icon-plus"></use></svg><span class="u-sr-only">Add</span>`,
};
DefaultRoundTransparent.parameters = {
  zeplinLink: [
    {
      name: 'base',
      link: 'https://app.zeplin.io/styleguide/63079b90d0bf4a646c46c227/components?coid=6422b4e7fe5015225116edaf',
    },
    {
      name: 'hover',
      link: 'https://app.zeplin.io/styleguide/63079b90d0bf4a646c46c227/components?coid=6422b4f52b57ee2256c16512',
    },
    {
      name: 'active',
      link: 'https://app.zeplin.io/styleguide/63079b90d0bf4a646c46c227/components?coid=6422b4e23b42d6220b757020',
    },
  ],
};

export const DefaultRoundOutline = Template.bind({});
DefaultRoundOutline.args = {
  shapeVariant: ['round', 'square'],
  colorVariant: ['outline'],
  children: `<svg width="20" height="20" class="a-icon a-icon--m" aria-hidden="true" focusable="false"><use xlink:href="${icons}#icon-plus"></use></svg><span class="u-sr-only">Add</span>`,
};
DefaultRoundOutline.parameters = {
  zeplinLink: [
    {
      name: 'base',
      link: 'https://app.zeplin.io/styleguide/63079b90d0bf4a646c46c227/components?coid=6422b504044e112200e382ee',
    },
    {
      name: 'hover',
      link: 'https://app.zeplin.io/styleguide/63079b90d0bf4a646c46c227/components?coid=6422b4fdd08a97229b35cdec',
    },
    {
      name: 'active',
      link: 'https://app.zeplin.io/styleguide/63079b90d0bf4a646c46c227/components?coid=6422b4fa92fb67224aad2ea3',
    },
  ],
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

// ***** X-Small shapes ****************** //

export const XSmallPrimary = Template.bind({});
XSmallPrimary.args = { shapeVariant: ['x-small'] };
XSmallPrimary.parameters = {
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

export const XSmallSecondary = Template.bind({});
XSmallSecondary.args = {
  shapeVariant: ['x-small'],
  colorVariant: ['secondary'],
};

export const XSmallTransparent = Template.bind({});
XSmallTransparent.args = {
  shapeVariant: ['x-small'],
  colorVariant: ['transparent'],
};

export const XSmallOutline = Template.bind({});
XSmallOutline.args = { shapeVariant: ['x-small'], colorVariant: ['outline'] };

export const XSmallSquarePrimary = Template.bind({});
XSmallSquarePrimary.args = {
  shapeVariant: ['square', 'x-small'],
  children: `<svg width="20" height="20" class="a-icon a-icon--m" aria-hidden="true" focusable="false"><use xlink:href="${icons}#icon-plus"></use></svg><span class="u-sr-only">Add</span>`,
};

export const XSmallSquareSecondary = Template.bind({});
XSmallSquareSecondary.args = {
  colorVariant: ['secondary'],
  shapeVariant: ['square', 'x-small'],
  children: `<svg width="20" height="20" class="a-icon a-icon--m" aria-hidden="true" focusable="false"><use xlink:href="${icons}#icon-plus"></use></svg><span class="u-sr-only">Add</span>`,
};

export const XSmallSquareTransparent = Template.bind({});
XSmallSquareTransparent.args = {
  colorVariant: ['transparent'],
  shapeVariant: ['square', 'x-small'],
  children: `<svg width="20" height="20" class="a-icon a-icon--m" aria-hidden="true" focusable="false"><use xlink:href="${icons}#icon-plus"></use></svg><span class="u-sr-only">Add</span>`,
};

export const XSmallSquareOutline = Template.bind({});
XSmallSquareOutline.args = {
  colorVariant: ['outline'],
  shapeVariant: ['square', 'x-small'],
  children: `<svg width="20" height="20" class="a-icon a-icon--m" aria-hidden="true" focusable="false"><use xlink:href="${icons}#icon-plus"></use></svg><span class="u-sr-only">Add</span>`,
};

export const XSmallRoundPrimary = Template.bind({});
XSmallRoundPrimary.args = {
  shapeVariant: ['x-small', 'round', 'square'],
  children: `<svg width="20" height="20" class="a-icon a-icon--m" aria-hidden="true" focusable="false"><use xlink:href="${icons}#icon-plus"></use></svg><span class="u-sr-only">Add</span>`,
};

export const XSmallRoundSecondary = Template.bind({});
XSmallRoundSecondary.args = {
  colorVariant: ['secondary'],
  shapeVariant: ['x-small', 'round', 'square'],
  children: `<svg width="20" height="20" class="a-icon a-icon--m" aria-hidden="true" focusable="false"><use xlink:href="${icons}#icon-plus"></use></svg><span class="u-sr-only">Add</span>`,
};

export const XSmallRoundTransparent = Template.bind({});
XSmallRoundTransparent.args = {
  colorVariant: ['transparent'],
  shapeVariant: ['x-small', 'round', 'square'],
  children: `<svg width="20" height="20" class="a-icon a-icon--m" aria-hidden="true" focusable="false"><use xlink:href="${icons}#icon-plus"></use></svg><span class="u-sr-only">Add</span>`,
};

export const XSmallRoundOutline = Template.bind({});
XSmallRoundOutline.args = {
  colorVariant: ['outline'],
  shapeVariant: ['x-small', 'round', 'square'],
  children: `<svg width="20" height="20" class="a-icon a-icon--m" aria-hidden="true" focusable="false"><use xlink:href="${icons}#icon-plus"></use></svg><span class="u-sr-only">Add</span>`,
};

// ***** Danger  ****************** //

export const DefaultDangerPrimary = Template.bind({});
DefaultDangerPrimary.args = { colorVariant: ['danger'] };
DefaultDangerPrimary.parameters = {
  zeplinLink: [
    {
      name: 'base',
      link: 'https://app.zeplin.io/styleguide/63079b90d0bf4a646c46c227/components?coid=6363da7dc51a6528e9b45875',
    },
    {
      name: 'hover',
      link: 'https://app.zeplin.io/styleguide/63079b90d0bf4a646c46c227/components?coid=6363dbaea3b9df29ce0e7efe',
    },
    {
      name: 'active',
      link: 'https://app.zeplin.io/styleguide/63079b90d0bf4a646c46c227/components?coid=6363dbab80f8f22f39fd418d',
    },
  ],
};

export const DefaultDangerSecondary = Template.bind({});
DefaultDangerSecondary.args = { colorVariant: ['secondary', 'danger'] };
DefaultDangerSecondary.parameters = {
  zeplinLink: [
    {
      name: 'base',
      link: 'https://app.zeplin.io/styleguide/63079b90d0bf4a646c46c227/components?coid=6363dd85f80b612af4a6d69f',
    },
    {
      name: 'hover',
      link: 'https://app.zeplin.io/styleguide/63079b90d0bf4a646c46c227/components?coid=6363dbaea3b9df29ce0e7efe',
    },
    {
      name: 'active',
      link: 'https://app.zeplin.io/styleguide/63079b90d0bf4a646c46c227/components?coid=6363dbab80f8f22f39fd418d',
    },
  ],
};

export const DefaultDangerTransparent = Template.bind({});
DefaultDangerTransparent.args = { colorVariant: ['transparent', 'danger'] };
DefaultDangerTransparent.parameters = {
  zeplinLink: [
    {
      name: 'base',
      link: 'https://app.zeplin.io/styleguide/63079b90d0bf4a646c46c227/components?coid=6363dd2e5fb0c62ff0eae3c7',
    },
    {
      name: 'hover',
      link: 'https://app.zeplin.io/styleguide/63079b90d0bf4a646c46c227/components?coid=6363dbaea3b9df29ce0e7efe',
    },
    {
      name: 'active',
      link: 'https://app.zeplin.io/styleguide/63079b90d0bf4a646c46c227/components?coid=6363dbab80f8f22f39fd418d',
    },
  ],
};

export const DefaultDangerOutline = Template.bind({});
DefaultDangerOutline.args = { colorVariant: ['outline', 'danger'] };
DefaultDangerOutline.parameters = {
  zeplinLink: [
    {
      name: 'base',
      link: 'https://app.zeplin.io/styleguide/63079b90d0bf4a646c46c227/components?coid=6363dcedf088f629b4177135',
    },
    {
      name: 'hover',
      link: 'https://app.zeplin.io/styleguide/63079b90d0bf4a646c46c227/components?coid=6363dbaea3b9df29ce0e7efe',
    },
    {
      name: 'active',
      link: 'https://app.zeplin.io/styleguide/63079b90d0bf4a646c46c227/components?coid=6363dbab80f8f22f39fd418d',
    },
  ],
};

export const SmallDangerPrimary = Template.bind({});
SmallDangerPrimary.args = { colorVariant: ['danger'], shapeVariant: ['small'] };
SmallDangerPrimary.parameters = {
  zeplinLink: [
    {
      name: 'base',
      link: 'https://app.zeplin.io/styleguide/63079b90d0bf4a646c46c227/components?coid=6363da7dc51a6528e9b45875',
    },
    {
      name: 'hover',
      link: 'https://app.zeplin.io/styleguide/63079b90d0bf4a646c46c227/components?coid=6363dbaea3b9df29ce0e7efe',
    },
    {
      name: 'active',
      link: 'https://app.zeplin.io/styleguide/63079b90d0bf4a646c46c227/components?coid=6363dbab80f8f22f39fd418d',
    },
  ],
};

export const SmallDangerSecondary = Template.bind({});
SmallDangerSecondary.args = {
  colorVariant: ['secondary', 'danger'],
  shapeVariant: ['small'],
};
SmallDangerSecondary.parameters = {
  zeplinLink: [
    {
      name: 'base',
      link: 'https://app.zeplin.io/styleguide/63079b90d0bf4a646c46c227/components?coid=6363dd85f80b612af4a6d69f',
    },
    {
      name: 'hover',
      link: 'https://app.zeplin.io/styleguide/63079b90d0bf4a646c46c227/components?coid=6363dbaea3b9df29ce0e7efe',
    },
    {
      name: 'active',
      link: 'https://app.zeplin.io/styleguide/63079b90d0bf4a646c46c227/components?coid=6363dbab80f8f22f39fd418d',
    },
  ],
};

export const SmallDangerTransparent = Template.bind({});
SmallDangerTransparent.args = {
  colorVariant: ['transparent', 'danger'],
  shapeVariant: ['small'],
};
SmallDangerTransparent.parameters = {
  zeplinLink: [
    {
      name: 'base',
      link: 'https://app.zeplin.io/styleguide/63079b90d0bf4a646c46c227/components?coid=6363dd2e5fb0c62ff0eae3c7',
    },
    {
      name: 'hover',
      link: 'https://app.zeplin.io/styleguide/63079b90d0bf4a646c46c227/components?coid=6363dbaea3b9df29ce0e7efe',
    },
    {
      name: 'active',
      link: 'https://app.zeplin.io/styleguide/63079b90d0bf4a646c46c227/components?coid=6363dbab80f8f22f39fd418d',
    },
  ],
};

export const SmallDangerOutline = Template.bind({});
SmallDangerOutline.args = {
  colorVariant: ['outline', 'danger'],
  shapeVariant: ['small'],
};
SmallDangerOutline.parameters = {
  zeplinLink: [
    {
      name: 'base',
      link: 'https://app.zeplin.io/styleguide/63079b90d0bf4a646c46c227/components?coid=6363dcedf088f629b4177135',
    },
    {
      name: 'hover',
      link: 'https://app.zeplin.io/styleguide/63079b90d0bf4a646c46c227/components?coid=6363dbaea3b9df29ce0e7efe',
    },
    {
      name: 'active',
      link: 'https://app.zeplin.io/styleguide/63079b90d0bf4a646c46c227/components?coid=6363dbab80f8f22f39fd418d',
    },
  ],
};

export const XSmallDangerPrimary = Template.bind({});
XSmallDangerPrimary.args = {
  colorVariant: ['danger'],
  shapeVariant: ['x-small'],
};
XSmallDangerPrimary.parameters = {
  zeplinLink: [
    {
      name: 'base',
      link: 'https://app.zeplin.io/styleguide/63079b90d0bf4a646c46c227/components?coid=6363da7dc51a6528e9b45875',
    },
    {
      name: 'hover',
      link: 'https://app.zeplin.io/styleguide/63079b90d0bf4a646c46c227/components?coid=6363dbaea3b9df29ce0e7efe',
    },
    {
      name: 'active',
      link: 'https://app.zeplin.io/styleguide/63079b90d0bf4a646c46c227/components?coid=6363dbab80f8f22f39fd418d',
    },
  ],
};

export const XSmallDangerSecondary = Template.bind({});
XSmallDangerSecondary.args = {
  colorVariant: ['secondary', 'danger'],
  shapeVariant: ['x-small'],
};
XSmallDangerSecondary.parameters = {
  zeplinLink: [
    {
      name: 'base',
      link: 'https://app.zeplin.io/styleguide/63079b90d0bf4a646c46c227/components?coid=6363dd85f80b612af4a6d69f',
    },
    {
      name: 'hover',
      link: 'https://app.zeplin.io/styleguide/63079b90d0bf4a646c46c227/components?coid=6363dbaea3b9df29ce0e7efe',
    },
    {
      name: 'active',
      link: 'https://app.zeplin.io/styleguide/63079b90d0bf4a646c46c227/components?coid=6363dbab80f8f22f39fd418d',
    },
  ],
};

export const XSmallDangerTransparent = Template.bind({});
XSmallDangerTransparent.args = {
  colorVariant: ['transparent', 'danger'],
  shapeVariant: ['x-small'],
};
XSmallDangerTransparent.parameters = {
  zeplinLink: [
    {
      name: 'base',
      link: 'https://app.zeplin.io/styleguide/63079b90d0bf4a646c46c227/components?coid=6363dd2e5fb0c62ff0eae3c7',
    },
    {
      name: 'hover',
      link: 'https://app.zeplin.io/styleguide/63079b90d0bf4a646c46c227/components?coid=6363dbaea3b9df29ce0e7efe',
    },
    {
      name: 'active',
      link: 'https://app.zeplin.io/styleguide/63079b90d0bf4a646c46c227/components?coid=6363dbab80f8f22f39fd418d',
    },
  ],
};

export const XSmallDangerOutline = Template.bind({});
XSmallDangerOutline.args = {
  colorVariant: ['outline', 'danger'],
  shapeVariant: ['x-small'],
};
XSmallDangerOutline.parameters = {
  zeplinLink: [
    {
      name: 'base',
      link: 'https://app.zeplin.io/styleguide/63079b90d0bf4a646c46c227/components?coid=6363dcedf088f629b4177135',
    },
    {
      name: 'hover',
      link: 'https://app.zeplin.io/styleguide/63079b90d0bf4a646c46c227/components?coid=6363dbaea3b9df29ce0e7efe',
    },
    {
      name: 'active',
      link: 'https://app.zeplin.io/styleguide/63079b90d0bf4a646c46c227/components?coid=6363dbab80f8f22f39fd418d',
    },
  ],
};

// ***** Pressed ****************** //

export const PrimaryPressed = Template.bind({});
PrimaryPressed.args = { ariaPressed: true };
PrimaryPressed.parameters = {
  zeplinLink:
    'https://app.zeplin.io/styleguide/63079b90d0bf4a646c46c227/components?coid=6363da7b401b672c2a7cb08d',
};

export const SecondaryPressed = Template.bind({});
SecondaryPressed.args = { colorVariant: ['secondary'], ariaPressed: true };
SecondaryPressed.parameters = {
  zeplinLink:
    'https://app.zeplin.io/styleguide/63079b90d0bf4a646c46c227/components?coid=6363dd8115d8bf68ad26d9e1',
};

export const TransparentPressed = Template.bind({});
TransparentPressed.args = { colorVariant: ['transparent'], ariaPressed: true };
TransparentPressed.parameters = {
  zeplinLink:
    'https://app.zeplin.io/styleguide/63079b90d0bf4a646c46c227/components?coid=6363dd2e865da36902f4226d',
};

export const OutlinePressed = Template.bind({});
OutlinePressed.args = { colorVariant: ['outline'], ariaPressed: true };
OutlinePressed.parameters = {
  zeplinLink:
    'https://app.zeplin.io/styleguide/63079b90d0bf4a646c46c227/components?coid=6363dced0256a5332e8267bb',
};

export const TabPressed = Template.bind({});
TabPressed.decorators = [TabDecorator];
TabPressed.args = { ...baseTabArgs, ariaCurrent: 'page' };
TabPressed.parameters = {
  zeplinLink:
    'https://app.zeplin.io/styleguide/63079b90d0bf4a646c46c227/components?coid=640094b52890b84043f89ba4',
};

export const DangerPressed = Template.bind({});
DangerPressed.args = { colorVariant: ['danger'], ariaPressed: true };
DangerPressed.parameters = {
  zeplinLink:
    'https://app.zeplin.io/styleguide/63079b90d0bf4a646c46c227/components?coid=6363dba67305863282523fe5',
};

// ***** Disabled colors ****************** //

export const PrimaryDisabled = Template.bind({});
PrimaryDisabled.args = { disabled: true };
PrimaryDisabled.parameters = {
  zeplinLink:
    'https://app.zeplin.io/styleguide/63079b90d0bf4a646c46c227/components?coid=6363da6e0256a5332e825860',
};

export const SecondaryDisabled = Template.bind({});
SecondaryDisabled.args = { colorVariant: ['secondary'], disabled: true };
SecondaryDisabled.parameters = {
  zeplinLink:
    'https://app.zeplin.io/styleguide/63079b90d0bf4a646c46c227/components?coid=6363dd80e878552bb9626bbd',
};

export const TransparentDisabled = Template.bind({});
TransparentDisabled.args = { colorVariant: ['transparent'], disabled: true };
TransparentDisabled.parameters = {
  zeplinLink:
    'https://app.zeplin.io/styleguide/63079b90d0bf4a646c46c227/components?coid=6363dd3b0c9d21330ce88c79',
};

export const OutlineDisabled = Template.bind({});
OutlineDisabled.args = { colorVariant: ['outline'], disabled: true };
OutlineDisabled.parameters = {
  zeplinLink:
    'https://app.zeplin.io/styleguide/63079b90d0bf4a646c46c227/components?coid=6363dcf429f7bb28f410acbc',
};

export const TabDisabled = Template.bind({});
TabDisabled.decorators = [TabDecorator];
TabDisabled.args = { ...baseTabArgs, disabled: true };
TabDisabled.parameters = {
  zeplinLink:
    'https://app.zeplin.io/styleguide/63079b90d0bf4a646c46c227/components?coid=640094b30ee0b5408ad023fd',
};

export const DangerPrimaryDisabled = Template.bind({});
DangerPrimaryDisabled.args = {
  colorVariant: ['danger'],
  disabled: true,
};
DangerPrimaryDisabled.parameters = {
  zeplinLink:
    'https://app.zeplin.io/styleguide/63079b90d0bf4a646c46c227/components?coid=6363dba53abcdd2942217d94',
};

export const DangerSecondaryDisabled = Template.bind({});
DangerSecondaryDisabled.args = {
  colorVariant: ['secondary', 'danger'],
  disabled: true,
};
DangerSecondaryDisabled.parameters = {
  zeplinLink:
    'https://app.zeplin.io/styleguide/63079b90d0bf4a646c46c227/components?coid=6363dba53abcdd2942217d94',
};

export const DangerTransparentDisabled = Template.bind({});
DangerTransparentDisabled.args = {
  colorVariant: ['secondary', 'danger'],
  disabled: true,
};
DangerTransparentDisabled.parameters = {
  zeplinLink:
    'https://app.zeplin.io/styleguide/63079b90d0bf4a646c46c227/components?coid=6363dba53abcdd2942217d94',
};

// ***** Anchor elements ****************** //

export const PrimaryAnchor = Template.bind({});
PrimaryAnchor.args = { element: 'anchor' };
PrimaryAnchor.parameters = {
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

export const SecondaryAnchor = Template.bind({});
SecondaryAnchor.args = { colorVariant: ['secondary'], element: 'anchor' };
SecondaryAnchor.parameters = {
  zeplinLink: [
    {
      name: 'base',
      link: 'https://app.zeplin.io/styleguide/63079b90d0bf4a646c46c227/components?coid=6363dd85f80b612af4a6d69f',
    },
    {
      name: 'hover',
      link: 'https://app.zeplin.io/styleguide/63079b90d0bf4a646c46c227/components?coid=6363dd8599875831768d531a',
    },
    {
      name: 'active',
      link: 'https://app.zeplin.io/styleguide/63079b90d0bf4a646c46c227/components?coid=6363dd83d271fe6b0009331c',
    },
  ],
};

export const TransparentAnchor = Template.bind({});
TransparentAnchor.args = { colorVariant: ['transparent'], element: 'anchor' };
TransparentAnchor.parameters = {
  zeplinLink: [
    {
      name: 'base',
      link: 'https://app.zeplin.io/styleguide/63079b90d0bf4a646c46c227/components?coid=6363dd2e5fb0c62ff0eae3c7',
    },
    {
      name: 'hover',
      link: 'https://app.zeplin.io/styleguide/63079b90d0bf4a646c46c227/components?coid=6363dd3ae8e699685b5fb439',
    },
    {
      name: 'active',
      link: 'https://app.zeplin.io/styleguide/63079b90d0bf4a646c46c227/components?coid=6363dd3125f5f931e3883be6',
    },
  ],
};

export const OutlineAnchor = Template.bind({});
OutlineAnchor.args = { colorVariant: ['outline'], element: 'anchor' };
OutlineAnchor.parameters = {
  zeplinLink: [
    {
      name: 'base',
      link: 'https://app.zeplin.io/styleguide/63079b90d0bf4a646c46c227/components?coid=6363dcedf088f629b4177135',
    },
    {
      name: 'hover',
      link: 'https://app.zeplin.io/styleguide/63079b90d0bf4a646c46c227/components?coid=6363dcefbb6bd26c10aa702c',
    },
    {
      name: 'active',
      link: 'https://app.zeplin.io/styleguide/63079b90d0bf4a646c46c227/components?coid=6363dcf0cb7dbd2fca515b70',
    },
  ],
};

export const TabAnchor = Template.bind({});
TabAnchor.decorators = [TabDecorator];
TabAnchor.args = { ...baseTabArgs, element: 'anchor' };
TabAnchor.parameters = {
  zeplinLink: [
    {
      name: 'base',
      link: 'https://app.zeplin.io/styleguide/63079b90d0bf4a646c46c227/components?coid=640094a81f046353009612ce',
    },
    {
      name: 'hover',
      link: 'https://app.zeplin.io/styleguide/63079b90d0bf4a646c46c227/components?coid=640094b16e5d7140eb0735c8',
    },
    {
      name: 'active',
      link: 'https://app.zeplin.io/styleguide/63079b90d0bf4a646c46c227/components?coid=640094b2d4c5cc51aff0b511',
    },
  ],
};

export const TabAnchorPressed = Template.bind({});
TabAnchorPressed.decorators = [TabDecorator];
TabAnchorPressed.args = {
  ...baseTabArgs,
  element: 'anchor',
  ariaCurrent: 'page',
};
TabAnchorPressed.parameters = {
  zeplinLink:
    'https://app.zeplin.io/styleguide/63079b90d0bf4a646c46c227/components?coid=640094b52890b84043f89ba4',
};

export const DangerPrimaryAnchor = Template.bind({});
DangerPrimaryAnchor.args = { colorVariant: ['danger'], element: 'anchor' };
DangerPrimaryAnchor.parameters = {
  zeplinLink: [
    {
      name: 'base',
      link: 'https://app.zeplin.io/styleguide/63079b90d0bf4a646c46c227/components?coid=6363da7dc51a6528e9b45875',
    },
    {
      name: 'hover',
      link: 'https://app.zeplin.io/styleguide/63079b90d0bf4a646c46c227/components?coid=6363dbaea3b9df29ce0e7efe',
    },
    {
      name: 'active',
      link: 'https://app.zeplin.io/styleguide/63079b90d0bf4a646c46c227/components?coid=6363dbab80f8f22f39fd418d',
    },
  ],
};

export const DangerSecondaryAnchor = Template.bind({});
DangerSecondaryAnchor.args = {
  colorVariant: ['danger', 'secondary'],
  element: 'anchor',
};
DangerSecondaryAnchor.parameters = {
  zeplinLink: [
    {
      name: 'base',
      link: 'https://app.zeplin.io/styleguide/63079b90d0bf4a646c46c227/components?coid=6363dd85f80b612af4a6d69f',
    },
    {
      name: 'hover',
      link: 'https://app.zeplin.io/styleguide/63079b90d0bf4a646c46c227/components?coid=6363dbaea3b9df29ce0e7efe',
    },
    {
      name: 'active',
      link: 'https://app.zeplin.io/styleguide/63079b90d0bf4a646c46c227/components?coid=6363dbab80f8f22f39fd418d',
    },
  ],
};

export const DangerTransparentAnchor = Template.bind({});
DangerTransparentAnchor.args = {
  colorVariant: ['danger', 'transparent'],
  element: 'anchor',
};
DangerTransparentAnchor.parameters = {
  zeplinLink: [
    {
      name: 'base',
      link: 'https://app.zeplin.io/styleguide/63079b90d0bf4a646c46c227/components?coid=6363dd2e5fb0c62ff0eae3c7',
    },
    {
      name: 'hover',
      link: 'https://app.zeplin.io/styleguide/63079b90d0bf4a646c46c227/components?coid=6363dbaea3b9df29ce0e7efe',
    },
    {
      name: 'active',
      link: 'https://app.zeplin.io/styleguide/63079b90d0bf4a646c46c227/components?coid=6363dbab80f8f22f39fd418d',
    },
  ],
};

export const DangerOutlineAnchor = Template.bind({});
DangerOutlineAnchor.args = {
  colorVariant: ['danger', 'outline'],
  element: 'anchor',
};
DangerOutlineAnchor.parameters = {
  zeplinLink: [
    {
      name: 'base',
      link: 'https://app.zeplin.io/styleguide/63079b90d0bf4a646c46c227/components?coid=6363dcedf088f629b4177135',
    },
    {
      name: 'hover',
      link: 'https://app.zeplin.io/styleguide/63079b90d0bf4a646c46c227/components?coid=6363dbaea3b9df29ce0e7efe',
    },
    {
      name: 'active',
      link: 'https://app.zeplin.io/styleguide/63079b90d0bf4a646c46c227/components?coid=6363dbab80f8f22f39fd418d',
    },
  ],
};

// ***** Disabled anchor elements ****************** //

export const PrimaryAnchorDisabled = Template.bind({});
PrimaryAnchorDisabled.args = { ariaDisabled: true, element: 'a' };
PrimaryAnchorDisabled.parameters = {
  zeplinLink:
    'https://app.zeplin.io/styleguide/63079b90d0bf4a646c46c227/components?coid=6363da6e0256a5332e825860',
};

export const SecondaryAnchorDisabled = Template.bind({});
SecondaryAnchorDisabled.args = {
  colorVariant: ['secondary'],
  ariaDisabled: true,
  element: 'a',
};
SecondaryAnchorDisabled.parameters = {
  zeplinLink:
    'https://app.zeplin.io/styleguide/63079b90d0bf4a646c46c227/components?coid=6363dd80e878552bb9626bbd',
};

export const TransparentAnchorDisabled = Template.bind({});
TransparentAnchorDisabled.args = {
  colorVariant: ['transparent'],
  ariaDisabled: true,
  element: 'a',
};
TransparentAnchorDisabled.parameters = {
  zeplinLink:
    'https://app.zeplin.io/styleguide/63079b90d0bf4a646c46c227/components?coid=6363dd3b0c9d21330ce88c79',
};

export const OutlineAnchorDisabled = Template.bind({});
OutlineAnchorDisabled.args = {
  colorVariant: ['outline'],
  ariaDisabled: true,
  element: 'a',
};
OutlineAnchorDisabled.parameters = {
  zeplinLink:
    'https://app.zeplin.io/styleguide/63079b90d0bf4a646c46c227/components?coid=6363dcf429f7bb28f410acbc',
};

export const TabAnchorDisabled = Template.bind({});
TabAnchorDisabled.decorators = [TabDecorator];
TabAnchorDisabled.args = {
  ...baseTabArgs,
  ariaDisabled: true,
  element: 'a',
};
TabAnchorDisabled.parameters = {
  zeplinLink:
    'https://app.zeplin.io/styleguide/63079b90d0bf4a646c46c227/components?coid=640094b30ee0b5408ad023fd',
};

export const DangerPrimaryAnchorDisabled = Template.bind({});
DangerPrimaryAnchorDisabled.args = {
  colorVariant: ['danger'],
  ariaDisabled: true,
  element: 'a',
};
DangerPrimaryAnchorDisabled.parameters = {
  zeplinLink:
    'https://app.zeplin.io/styleguide/63079b90d0bf4a646c46c227/components?coid=6363dba53abcdd2942217d94',
};

export const DangerSecondaryAnchorDisabled = Template.bind({});
DangerSecondaryAnchorDisabled.args = {
  colorVariant: ['danger', 'secondary'],
  ariaDisabled: true,
  element: 'a',
};
DangerSecondaryAnchorDisabled.parameters = {
  zeplinLink:
    'https://app.zeplin.io/styleguide/63079b90d0bf4a646c46c227/components?coid=6363dba53abcdd2942217d94',
};

export const DangerTransparentAnchorDisabled = Template.bind({});
DangerTransparentAnchorDisabled.args = {
  colorVariant: ['danger', 'secondary'],
  ariaDisabled: true,
  element: 'a',
};
DangerTransparentAnchorDisabled.parameters = {
  zeplinLink:
    'https://app.zeplin.io/styleguide/63079b90d0bf4a646c46c227/components?coid=6363dba53abcdd2942217d94',
};

export const DangerOutlineAnchorDisabled = Template.bind({});
DangerOutlineAnchorDisabled.args = {
  colorVariant: ['danger', 'secondary'],
  ariaDisabled: true,
  element: 'a',
};
DangerOutlineAnchorDisabled.parameters = {
  zeplinLink:
    'https://app.zeplin.io/styleguide/63079b90d0bf4a646c46c227/components?coid=6363dba53abcdd2942217d94',
};

// ***** Icon-only tab buttons ****************** //

export const TabIconOnlyBase = Template.bind({});
TabIconOnlyBase.decorators = [TabDecorator];
TabIconOnlyBase.args = {
  ...baseTabArgs,
  shapeVariant: ['square'],
  children: `<svg width="20" height="20" class="a-icon a-icon--m" aria-hidden="true" focusable="false"><use xlink:href="${icons}#icon-plus"></use></svg><span class="u-sr-only">Add</span>`,
};
TabIconOnlyBase.parameters = {
  zeplinLink: [
    {
      name: 'base',
      link: 'https://app.zeplin.io/styleguide/63079b90d0bf4a646c46c227/components?coid=640094a9a2dc7d52db2d8834',
    },
    {
      name: 'hover',
      link: 'https://app.zeplin.io/styleguide/63079b90d0bf4a646c46c227/components?coid=640094af9a3e7840645a63a9',
    },
    {
      name: 'active',
      link: 'https://app.zeplin.io/styleguide/63079b90d0bf4a646c46c227/components?coid=640094b06c8c26529c784569',
    },
  ],
};

export const TabIconOnlySelected = Template.bind({});
TabIconOnlySelected.decorators = [TabDecorator];
TabIconOnlySelected.args = {
  ...baseTabArgs,
  shapeVariant: ['square'],
  children: `<svg width="20" height="20" class="a-icon a-icon--m" aria-hidden="true" focusable="false"><use xlink:href="${icons}#icon-plus"></use></svg><span class="u-sr-only">Add</span>`,
  ariaSelected: true,
};
TabIconOnlySelected.parameters = {
  zeplinLink:
    'https://app.zeplin.io/styleguide/63079b90d0bf4a646c46c227/components?coid=640094ac4e82263ff99ce71b',
};

export const TabIconOnlyDisabled = Template.bind({});
TabIconOnlyDisabled.decorators = [TabDecorator];
TabIconOnlyDisabled.args = {
  ...baseTabArgs,
  shapeVariant: ['square'],
  children: `<svg width="20" height="20" class="a-icon a-icon--m" aria-hidden="true" focusable="false"><use xlink:href="${icons}#icon-plus"></use></svg><span class="u-sr-only">Add</span>`,
  disabled: true,
};
TabIconOnlyDisabled.parameters = {
  zeplinLink:
    'https://app.zeplin.io/styleguide/63079b90d0bf4a646c46c227/components?coid=640094ad19b55352bac88778',
};

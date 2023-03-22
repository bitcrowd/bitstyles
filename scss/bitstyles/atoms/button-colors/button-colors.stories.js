import Button from '../button/Button';

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

// ***** Base colors ****************** //

export const Primary = Template.bind({});
Primary.args = {};
Primary.parameters = {
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

export const Secondary = Template.bind({});
Secondary.args = { colorVariant: ['secondary'] };
Secondary.parameters = {
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

export const Transparent = Template.bind({});
Transparent.args = { colorVariant: ['transparent'] };
Transparent.parameters = {
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

export const Outline = Template.bind({});
Outline.args = { colorVariant: ['outline'] };
Outline.parameters = {
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

export const Tab = Template.bind({});
Tab.args = { colorVariant: ['tab'] };
Tab.parameters = {
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

// ***** Danger  ****************** //

export const DangerPrimary = Template.bind({});
DangerPrimary.args = { colorVariant: ['danger'] };
DangerPrimary.parameters = {
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

export const DangerSecondary = Template.bind({});
DangerSecondary.args = { colorVariant: ['secondary', 'danger'] };
DangerSecondary.parameters = {
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

export const DangerTransparent = Template.bind({});
DangerTransparent.args = { colorVariant: ['transparent', 'danger'] };
DangerTransparent.parameters = {
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

export const DangerOutline = Template.bind({});
DangerOutline.args = { colorVariant: ['outline', 'danger'] };
DangerOutline.parameters = {
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
TabPressed.args = { colorVariant: ['tab'], ariaCurrent: 'page' };
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
OutlineDisabled.args = { colorVariant: ['transparent'], disabled: true };
OutlineDisabled.parameters = {
  zeplinLink:
    'https://app.zeplin.io/styleguide/63079b90d0bf4a646c46c227/components?coid=6363dcf429f7bb28f410acbc',
};

export const TabDisabled = Template.bind({});
TabDisabled.args = { colorVariant: ['tab'], disabled: true };
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
TabAnchor.args = { colorVariant: ['tab'], element: 'anchor' };
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
TabAnchorDisabled.args = {
  colorVariant: ['tab'],
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

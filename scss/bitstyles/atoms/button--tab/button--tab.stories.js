import Button from '../button/Button';
import icons from '../../../../assets/images/icons.svg';

export default {
  title: 'Atoms/Button/Tab',
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

export const Base = Template.bind({});
Base.args = { colorVariant: ['tab'] };
Base.parameters = {
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

export const Selected = Template.bind({});
Selected.args = { colorVariant: ['tab'], ariaSelected: true };
Selected.parameters = {
  zeplinLink:
    'https://app.zeplin.io/styleguide/63079b90d0bf4a646c46c227/components?coid=640094b52890b84043f89ba4',
};

export const Disabled = Template.bind({});
Disabled.args = { colorVariant: ['tab'], disabled: true };
Disabled.parameters = {
  zeplinLink:
    'https://app.zeplin.io/styleguide/63079b90d0bf4a646c46c227/components?coid=640094b30ee0b5408ad023fd',
};

// ***** Anchor elements ****************** //

export const BaseElement = Template.bind({});
BaseElement.args = { colorVariant: ['tab'], element: 'a' };
BaseElement.parameters = {
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

export const SelectedElement = Template.bind({});
SelectedElement.args = {
  colorVariant: ['tab'],
  element: 'a',
  ariaSelected: true,
};
SelectedElement.parameters = {
  zeplinLink:
    'https://app.zeplin.io/styleguide/63079b90d0bf4a646c46c227/components?coid=640094b52890b84043f89ba4',
};

export const DisabledElement = Template.bind({});
DisabledElement.args = {
  colorVariant: ['tab'],
  element: 'a',
  ariaDisabled: true,
};
DisabledElement.parameters = {
  zeplinLink:
    'https://app.zeplin.io/styleguide/63079b90d0bf4a646c46c227/components?coid=640094b30ee0b5408ad023fd',
};

// ***** Icon-only tab buttons ****************** //

export const IconOnlyBase = Template.bind({});
IconOnlyBase.args = {
  colorVariant: ['tab'],
  shapeVariant: ['square'],
  children: `<svg width="20" height="20" class="a-icon a-icon--m" aria-hidden="true" focusable="false"><use xlink:href="${icons}#icon-plus"></use></svg><span class="u-sr-only">Add</span>`,
};
IconOnlyBase.parameters = {
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

export const IconOnlySelected = Template.bind({});
IconOnlySelected.args = {
  colorVariant: ['tab'],
  shapeVariant: ['square'],
  children: `<svg width="20" height="20" class="a-icon a-icon--m" aria-hidden="true" focusable="false"><use xlink:href="${icons}#icon-plus"></use></svg><span class="u-sr-only">Add</span>`,
  ariaSelected: true,
};
IconOnlySelected.parameters = {
  zeplinLink:
    'https://app.zeplin.io/styleguide/63079b90d0bf4a646c46c227/components?coid=640094ad19b55352bac88778',
};

export const IconOnlyDisabled = Template.bind({});
IconOnlyDisabled.args = {
  colorVariant: ['tab'],
  shapeVariant: ['square'],
  children: `<svg width="20" height="20" class="a-icon a-icon--m" aria-hidden="true" focusable="false"><use xlink:href="${icons}#icon-plus"></use></svg><span class="u-sr-only">Add</span>`,
  disabled: true,
};
IconOnlyDisabled.parameters = {
  zeplinLink:
    'https://app.zeplin.io/styleguide/63079b90d0bf4a646c46c227/components?coid=640094ad19b55352bac88778',
};

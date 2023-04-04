import Button from '../button/Button';
import Dropdown from './Dropdown';

export default {
  title: 'Atoms/Dropdown',
  component: Dropdown,
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

const topDecorator = (story) => {
  const decorator = document.createElement('div');
  decorator.style.height = '20rem';
  decorator.className = 'u-flex u-items-end';
  const inner = document.createElement('div');
  inner.style.position = 'relative';
  inner.style.width = '30rem';
  inner.className = 'u-bg-grayscale-light-3 u-padding-m';
  inner.appendChild(story());
  decorator.appendChild(inner);
  return decorator;
};

const bottomDecorator = (story) => {
  const decorator = document.createElement('div');
  decorator.style.height = '20rem';
  const inner = document.createElement('div');
  inner.style.position = 'relative';
  inner.style.width = '30rem';
  inner.className = 'u-bg-grayscale-light-3 u-padding-m';
  inner.appendChild(story());
  decorator.appendChild(inner);
  return decorator;
};

const menu = `
  <ul class="u-list-none">
    <li>
      ${
        Button({
          colorVariant: ['transparent'],
          shapeVariant: ['menu'],
          children: 'Settings',
          element: 'a',
        }).outerHTML
      }
    </li>
    <li>
      ${
        Button({
          colorVariant: ['transparent'],
          shapeVariant: ['menu'],
          children: 'Help',
          element: 'a',
        }).outerHTML
      }
    </li>
    <li>
      ${
        Button({
          colorVariant: ['transparent'],
          shapeVariant: ['menu'],
          children: 'Privacy',
          element: 'a',
        }).outerHTML
      }
    </li>
    <li role="separator"></li>
    <li>
      ${
        Button({
          colorVariant: ['transparent'],
          shapeVariant: ['menu'],
          children: 'Sign out',
          element: 'a',
        }).outerHTML
      }
    </li>
  </ul>
`;

const Template = (args) => Dropdown(args);

// ***** Alignments ****************** //

export const Base = Template.bind({});
Base.args = {
  children: menu,
};
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
Base.decorators = [bottomDecorator];

export const Right = Template.bind({});
Right.args = {
  alignment: ['right'],
  children: menu,
};
Right.decorators = [bottomDecorator];

export const Top = Template.bind({});
Top.args = {
  alignment: ['top'],
  children: menu,
};
Top.decorators = [topDecorator];

export const TopRight = Template.bind({});
TopRight.args = {
  alignment: ['top', 'right'],
  children: menu,
};
TopRight.decorators = [topDecorator];

export const BottomFullWidth = Template.bind({});
BottomFullWidth.args = {
  alignment: ['full-width'],
  children: menu,
};
BottomFullWidth.decorators = [bottomDecorator];

export const TopFullWidth = Template.bind({});
TopFullWidth.args = {
  alignment: ['top', 'full-width'],
  children: menu,
};
TopFullWidth.decorators = [topDecorator];

export const MaxHeight = Template.bind({});
MaxHeight.args = {
  children: menu + menu + menu + menu,
};
MaxHeight.parameters = {
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
MaxHeight.decorators = [bottomDecorator];

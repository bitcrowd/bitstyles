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

// ***** Base colors ****************** //

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
Base.decorators = [
  (story) => {
    const decorator = document.createElement('div');
    decorator.style.position = 'relative';
    decorator.style.height = '2rem';
    decorator.style.width = '30rem';
    decorator.className = 'u-bg-grayscale-light-3 u-padding-m';
    decorator.appendChild(story());
    return decorator;
  },
];

export const Right = Template.bind({});
Right.args = {
  alignment: ['right'],
  children: menu,
};
Right.decorators = [
  (story) => {
    const decorator = document.createElement('div');
    decorator.style.position = 'relative';
    decorator.style.height = '2rem';
    decorator.style.width = '30rem';
    decorator.className = 'u-bg-grayscale-light-3 u-padding-m';
    decorator.appendChild(story());
    return decorator;
  },
];

export const Top = Template.bind({});
Top.args = {
  alignment: ['top'],
  children: menu,
};
Top.decorators = [
  (story) => {
    const decorator = document.createElement('div');
    decorator.style.height = '20rem';
    decorator.style.width = '30rem';
    decorator.className = 'u-flex u-items-end';
    const inner = document.createElement('div');
    inner.style.position = 'relative';
    inner.style.width = '18rem';
    inner.className = 'u-bg-grayscale-light-3 u-padding-m';
    inner.appendChild(story());
    decorator.appendChild(inner);
    return decorator;
  },
];

export const TopRight = Template.bind({});
TopRight.args = {
  alignment: ['top', 'right'],
  children: menu,
};

export const BottomFullwidth = Template.bind({});
BottomFullwidth.args = {
  alignment: ['full-width'],
  children: menu,
};

export const TopFullwidth = Template.bind({});
TopFullwidth.args = {
  alignment: ['top', 'full-width'],
  children: menu,
};

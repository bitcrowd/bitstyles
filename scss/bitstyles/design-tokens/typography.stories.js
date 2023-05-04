export default {
  title: 'Design tokens/typography',
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

const Template = ({ textVariant, element = 'h1' }) => {
  const text = document.createElement(element);
  text.classList.add(`u-${textVariant}`);
  text.innerText = `${textVariant || element} Lorem ipsum dolor sit amet`;
  return text;
};

// ***** Default size, each shape & color ****************** //

export const H1Element = Template.bind({});
H1Element.args = {};

export const H2Element = Template.bind({});
H2Element.args = { element: 'h2' };

export const H3Element = Template.bind({});
H3Element.args = { element: 'h3' };

export const H4Element = Template.bind({});
H4Element.args = { element: 'h4' };

export const H5Element = Template.bind({});
H5Element.args = { element: 'h5' };

export const H6Element = Template.bind({});
H6Element.args = { element: 'h6' };

export const H7Class = Template.bind({});
H7Class.args = { element: 'p', textVariant: 'h7' };

export const H8Class = Template.bind({});
H8Class.args = { element: 'p', textVariant: 'h8' };

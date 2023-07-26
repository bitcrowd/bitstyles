import PageHeader, { breadCrumbsMenu, header } from './PageHeader';

export default {
  title: 'Organisms/PageHeader',
  component: PageHeader,
  argTypes: {
    topLeft: {
      description: 'The top left area of the header',
    },
    topRight: {
      description: 'The top right area of the header',
    },
    centerLeft: {
      description: 'The center left of the header',
    },
    centerRight: {
      description: 'The top left area of the header',
    },
    bottomLeft: {
      description: 'The top left area of the header',
    },
    bottomRight: {
      description: 'The top left area of the header',
    },
  },
};

const Template = (args) => PageHeader(args);

export const Default = Template.bind({});
Default.args = {
  topLeft: breadCrumbsMenu,
  centerLeft: header,
  //   centerRight: `<p>centerRight</p>`,
  //   bottomLeft: `<p>bottomLeft</p>`,
  //   bottomRight: `<p>bottomRight</p>`,
};

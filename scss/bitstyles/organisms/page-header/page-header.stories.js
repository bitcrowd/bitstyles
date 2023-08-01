import PageHeader, { breadCrumbsMenu, header, tabs } from './PageHeader';

export default {
  title: 'Organisms/Page Header',
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
  topRight: breadCrumbsMenu.cloneNode(true),
  centerLeft: header,
  bottomLeft: tabs,
};
Default.parameters = {
  zeplinLink: [
    {
      name: 'default',
      link: 'https://app.zeplin.io/styleguide/63079b90d0bf4a646c46c227/components?coid=6407627ec0507f42b9eec653',
    },
  ],
};

export const NoBottomSlot = Template.bind({});
NoBottomSlot.args = {
  topLeft: breadCrumbsMenu.cloneNode(true),
  centerLeft: header.cloneNode(true),
};

export const OnlyTopSlot = Template.bind({});
OnlyTopSlot.args = {
  topLeft: header.cloneNode(true),
  topRight: breadCrumbsMenu.cloneNode(true),
};

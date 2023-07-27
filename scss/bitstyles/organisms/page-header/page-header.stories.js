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

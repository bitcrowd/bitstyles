import Sidebar, { logoImg, buttonList, bottom } from './Sidebar';

export default {
  title: 'Organisms/Sidebar',
  component: Sidebar,
  argTypes: {
    topSlot: {
      description:
        'It is the top area of the sidebar, can be a compony logo for example',
    },
  },
};

const Template = (args) => Sidebar(args);

export const DefaultPrimary = Template.bind({});
DefaultPrimary.args = {
  topSlot: logoImg,
  children: buttonList,
  bottomSlot: bottom,
};

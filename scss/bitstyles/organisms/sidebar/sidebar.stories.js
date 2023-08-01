import Sidebar, { logoImg, buttonList, bottom } from './Sidebar';

export default {
  title: 'Organisms/Sidebar',
  component: Sidebar,
  argTypes: {
    topSlot: {
      description:
        'The top area of the sidebar, can be a compony logo for example',
    },
    children: {
      description:
        'All the items that will go on the center of the sidebar, a list of buttons for example',
    },
    bottomSlot: {
      description:
        'The bottom area of the sidebar, a footer, or avatar link for example ',
    },
    mainContent: {
      description:
        'Content that goes on the main area, not part of the sidebar',
    },
  },
};

const mainContent = `Cotton candy chupa chups gummi bears cupcake candy canes sweet gummi bears macaroon lollipop. Danish toffee cheesecake chocolate bar jelly-o chocolate cake. Candy canes gummi bears pie fruitcake candy canes powder cheesecake. Jelly marshmallow marzipan apple pie jelly cupcake. Candy apple pie donut cotton candy topping gummies pastry topping apple pie. Gummies ice cream cookie pudding caramels candy canes pie. Ice cream macaroon halvah pastry lemon drops cheesecake.</p>`;

const Template = (args) => Sidebar(args);

export const Default = Template.bind({});
Default.args = {
  topSlot: logoImg,
  children: buttonList,
  bottomSlot: bottom,
  mainContent,
};

export const Minimal = Template.bind({});
Minimal.args = {
  children: buttonList.cloneNode(true),
  mainContent,
};

import Readme from './flex.md';
import dummyImage from '../../../../test/assets/images/placeholder-300x300.svg';

export default {
  title: 'Layout/Flex',
  parameters: {
    readme: {
      sidebar: Readme,
    },
  },
};

export const flex = () => `
  <ul class="l-flex o-list-reset">
    <li>List item one</li>
    <li class="l-flex__primary u-background-color--secondary">Important content here</li>
    <li>List item three</li>
    <li>List item four</li>
  </ul>
`;

export const flexWithLongContent = () => `
  <ul class="l-flex o-list-reset">
    <li>Gingerbread topping tart. Bear claw cake icing cotton candy cheesecake biscuit pudding. Macaroon gummi bears chocolate bar lollipop. Caramels marzipan halvah fruitcake chocolate cake cake tart pudding. Bonbon sweet roll fruitcake soufflé topping fruitcake sesame snaps muffin. Pudding dragée marzipan ice cream topping chocolate cake fruitcake bear claw muffin.</li>
    <li class="l-flex__primary u-background-color--secondary">Important content here - Gingerbread topping tart. Bear claw cake icing cotton candy cheesecake biscuit pudding. Macaroon gummi bears chocolate bar lollipop. Caramels marzipan halvah fruitcake chocolate cake cake tart pudding. Bonbon sweet roll fruitcake soufflé topping fruitcake sesame snaps muffin. Pudding dragée marzipan ice cream topping chocolate cake fruitcake bear claw muffin.</li>
    <li>Gingerbread topping tart. Bear claw cake icing cotton candy cheesecake biscuit pudding. Macaroon gummi bears chocolate bar lollipop. Caramels marzipan halvah fruitcake chocolate cake cake tart pudding. Bonbon sweet roll fruitcake soufflé topping fruitcake sesame snaps muffin. Pudding dragée marzipan ice cream topping chocolate cake fruitcake bear claw muffin.</li>
    <li>Gingerbread topping tart. Bear claw cake icing cotton candy cheesecake biscuit pudding. Macaroon gummi bears chocolate bar lollipop. Caramels marzipan halvah fruitcake chocolate cake cake tart pudding. Bonbon sweet roll fruitcake soufflé topping fruitcake sesame snaps muffin. Pudding dragée marzipan ice cream topping chocolate cake fruitcake bear claw muffin.</li>
  </ul>
`;

export const flexWrapWithLongContent = () => `
  <ul class="l-flex l-flex--wrap o-list-reset">
    <li>Gingerbread topping tart. Bear claw cake icing cotton candy cheesecake biscuit pudding. Macaroon gummi bears chocolate bar lollipop. Caramels marzipan halvah fruitcake chocolate cake cake tart pudding. Bonbon sweet roll fruitcake soufflé topping fruitcake sesame snaps muffin. Pudding dragée marzipan ice cream topping chocolate cake fruitcake bear claw muffin.</li>
    <li class="l-flex__primary u-background-color--secondary">Important content here - Gingerbread topping tart. Bear claw cake icing cotton candy cheesecake biscuit pudding. Macaroon gummi bears chocolate bar lollipop. Caramels marzipan halvah fruitcake chocolate cake cake tart pudding. Bonbon sweet roll fruitcake soufflé topping fruitcake sesame snaps muffin. Pudding dragée marzipan ice cream topping chocolate cake fruitcake bear claw muffin.</li>
    <li>Gingerbread topping tart. Bear claw cake icing cotton candy cheesecake biscuit pudding. Macaroon gummi bears chocolate bar lollipop. Caramels marzipan halvah fruitcake chocolate cake cake tart pudding. Bonbon sweet roll fruitcake soufflé topping fruitcake sesame snaps muffin. Pudding dragée marzipan ice cream topping chocolate cake fruitcake bear claw muffin.</li>
    <li>Gingerbread topping tart. Bear claw cake icing cotton candy cheesecake biscuit pudding. Macaroon gummi bears chocolate bar lollipop. Caramels marzipan halvah fruitcake chocolate cake cake tart pudding. Bonbon sweet roll fruitcake soufflé topping fruitcake sesame snaps muffin. Pudding dragée marzipan ice cream topping chocolate cake fruitcake bear claw muffin.</li>
  </ul>
`;

export const flexWrapWithIntrinsicWidthContent = () => `
  <ul class="l-flex l-flex--wrap o-list-reset">
    <li><img src="${dummyImage}" width="300" height="300" class="l-block" /></li>
    <li class="l-flex__primary u-background-color--secondary">Important content here</li>
    <li><img src="${dummyImage}" width="300" height="300" class="l-block" /></li>
    <li><img src="${dummyImage}" width="300" height="300" class="l-block" /></li>
  </ul>
`;

export const flexWithIntrinsicWidthContent = () => `
  <ul class="l-flex o-list-reset">
    <li><img src="${dummyImage}" width="300" height="300" class="l-block" /></li>
    <li class="l-flex__primary u-background-color--secondary">Important content here</li>
    <li><img src="${dummyImage}" width="300" height="300" class="l-block" /></li>
    <li><img src="${dummyImage}" width="300" height="300" class="l-block" /></li>
  </ul>
`;

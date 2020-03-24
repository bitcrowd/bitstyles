import Readme from './grid.md';

export default {
  title: 'Layout/Grid',
  parameters: {
    readme: {
      sidebar: Readme,
    },
  },
};

export const grid = () => `
  <ul class="l-grid">
    <li class="l-grid__item l-width--1-of-12">
      <div class="u-background-color--secondary">1-of-12</div>
    </li><!--
    --><li class="l-grid__item l-width--11-of-12">
      <div>11-of-12</div>
    </li><!--
    --><li class="l-grid__item l-width--2-of-12">
      <div class="u-background-color--secondary">2-of-12</div>
    </li><!--
    --><li class="l-grid__item l-width--10-of-12">
      <div>10-of-12</div>
    </li><!--
    --><li class="l-grid__item l-width--3-of-12">
      <div class="u-background-color--secondary">3-of-12</div>
    </li><!--
    --><li class="l-grid__item l-width--9-of-12">
      <div>9-of-12</div>
    </li><!--
    --><li class="l-grid__item l-width--4-of-12">
      <div class="u-background-color--secondary">4-of-12</div>
    </li><!--
    --><li class="l-grid__item l-width--8-of-12">
      <div>8-of-12</div>
    </li><!--
    --><li class="l-grid__item l-width--5-of-12">
      <div class="u-background-color--secondary">5-of-12</div>
    </li><!--
    --><li class="l-grid__item l-width--7-of-12">
      <div>7-of-12</div>
    </li><!--
    --><li class="l-grid__item l-width--6-of-12">
      <div class="u-background-color--secondary">6-of-12</div>
    </li><!--
    --><li class="l-grid__item l-width--6-of-12">
      <div>6-of-12</div>
    </li><!--
    --><li class="l-grid__item l-width--7-of-12">
      <div class="u-background-color--secondary">7-of-12</div>
    </li><!--
    --><li class="l-grid__item l-width--5-of-12">
      <div>5-of-12</div>
    </li><!--
    --><li class="l-grid__item l-width--8-of-12">
      <div class="u-background-color--secondary">8-of-12</div>
    </li><!--
    --><li class="l-grid__item l-width--4-of-12">
      <div>4-of-12</div>
    </li><!--
    --><li class="l-grid__item l-width--9-of-12">
      <div class="u-background-color--secondary">9-of-12</div>
    </li><!--
    --><li class="l-grid__item l-width--3-of-12">
      <div>3-of-12</div>
    </li><!--
    --><li class="l-grid__item l-width--10-of-12">
      <div class="u-background-color--secondary">10-of-12</div>
    </li><!--
    --><li class="l-grid__item l-width--2-of-12">
      <div>2-of-12</div>
    </li><!--
    --><li class="l-grid__item l-width--11-of-12">
      <div class="u-background-color--secondary">11-of-12</div>
    </li><!--
    --><li class="l-grid__item l-width--1-of-12">
      <div>1-of-12</div>
    </li><!--
    --><li class="l-grid__item l-width--12-of-12">
      <div class="u-background-color--secondary">12-of-12</div>
    </li><!--
    --><li class="l-grid__item l-width--3-of-12">
      <div class="u-background-color--secondary">3-of-12</div>
    </li><!--
    --><li class="l-grid__item l-width--3-of-12">
      <div>3-of-12</div>
    </li><!--
    --><li class="l-grid__item l-width--3-of-12">
      <div class="u-background-color--secondary">3-of-12</div>
    </li><!--
    --><li class="l-grid__item l-width--3-of-12">
      <div>3-of-12</div>
    </li>
  </ul>
`;

export const gridResponsive = () => `
  <ul class="l-grid">
    <li class="l-grid__item l-width--6-of-12 l-width--4-of-12@medium">
      <div class="u-background-color--secondary">6-of-12 / 4-of-12@medium</div>
    </li><!--
    --><li class="l-grid__item l-width--6-of-12 l-width--4-of-12@medium">
      <div>6-of-12 / 4-of-12@medium</div>
    </li><!--
    --><li class="l-grid__item l-width--6-of-12 l-width--4-of-12@medium">
      <div class="u-background-color--secondary">6-of-12 / 4-of-12@medium</div>
    </li><!--
    --><li class="l-grid__item l-width--12-of-12 l-width--6-of-12@medium">
      <div class="u-background-color--secondary">12-of-12 / 6-of-12@medium</div>
    </li><!--
    --><li class="l-grid__item l-width--12-of-12 l-width--6-of-12@medium">
      <div>12-of-12 / 6-of-12@medium</div>
    </li>
  </ul>
`;

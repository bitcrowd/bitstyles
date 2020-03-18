import Readme from './typography.md';

export default {
  title: 'Base/Typography',
  parameters: {
    readme: {
      sidebar: Readme,
    },
  },
};

export const headings = () => `
  <h1>Jelly cake marshmallow</h1>
  <h2>Jelly cake marshmallow</h2>
  <h3>Jelly cake marshmallow</h3>
  <h4>Jelly cake marshmallow</h4>
  <h5>Jelly cake marshmallow</h5>
  <h6>Jelly cake marshmallow</h6>
`;

export const paragraph = () => `
  <p>Jelly cake marshmallow</p>
`;

export const address = () => `
  <address>Pie cotton candy chupa chups marzipan liquorice cheesecake wafer.</address>
`;

export const dl = () => `
 <dl>
   <dt>Gummies cheesecake oat cake sugar plum icing cupcake tiramisu bonbon.</dt>
   <dd>Gummies cheesecake oat cake sugar plum icing cupcake tiramisu bonbon.</dd>
 </dl>
`;

export const ListUnordered = () => `
  <ul>
    <li>Pie cotton candy chupa chups.</li>
    <li>Liquorice cheesecake wafer.</li>
    <li>Gummies cheesecake oat cake sugar.</li>
  </ul>
`;

export const ListOrdered = () => `
  <ol>
    <li>Pie cotton candy chupa chups.</li>
    <li>Liquorice cheesecake wafer.</li>
    <li>Gummies cheesecake oat cake sugar.</li>
  </ol>
`;

export const blockquote = () => `
<blockquote>
  <p>Jelly cake marshmallow. Pie cotton candy chupa chups marzipan liquorice cheesecake wafer. Gummies cheesecake oat cake sugar plum icing cupcake tiramisu bonbon. Cotton candy chupa chups tootsie roll chupa chups cotton candy liquorice jelly
  <cite>Jelly cake marshmallow</cite>
</blockquote>
`;

export const cite = () => `
  <cite>Jelly cake marshmallow</cite>
`;

export const strong = () => `
  <strong>Jelly cake marshmallow</strong>
`;

export const em = () => `
  <em>Jelly cake marshmallow</em>
`;

export const i = () => `
  <i>Jelly cake marshmallow</i>
`;

export const b = () => `
  <b>Jelly cake marshmallow</b>
`;

export const small = () => `
  <small>Jelly cake marshmallow</small>
`;

export const big = () => `
  <big>Jelly cake marshmallow</big>
`;

export const sub = () => `
  <sub>Jelly cake marshmallow</sub>
`;

export const sup = () => `
  <sup>Jelly cake marshmallow</sup>
`;

export const abbr = () => `
  <abbr>Jelly cake marshmallow</abbr>
`;

export const pre = () => `
  <pre>Jelly cake marshmallow</pre>
`;

export const code = () => `
  <code>Jelly cake marshmallow</code>
`;

export const q = () => `
  <q>Jelly cake marshmallow</q>
`;

export const strike = () => `
  <strike>Jelly cake marshmallow</strike>
`;

export const time = () => `
  <time>Jelly cake marshmallow</time>
`;

export const kbd = () => `
  <kbd>Jelly cake marshmallow</kbd>
`;

export const samp = () => `
  <samp>Jelly cake marshmallow</samp>
`;

export const varEl = () => `
  <var>Jelly cake marshmallow</var>
`;

varEl.story = {
  name: 'var',
};

export const ins = () => `
  <ins>Jelly cake marshmallow</ins>
`;

export const del = () => `
  <del>Jelly cake marshmallow</del>
`;

export const dfn = () => `
  <dfn>Jelly cake marshmallow</dfn>
`;

export const s = () => `
  <s>Jelly cake marshmallow</s>
`;

export const table = () => `
  <table>
    <caption>Awesome caption</caption>
    <thead>
      <tr>
        <th>Header content 1</th>
        <th>Header content 2</th>
      </tr>
    </thead>
    <tfoot>
      <tr>
        <td>Footer content 1</td>
        <td>Footer content 2</td>
      </tr>
    </tfoot>
    <tbody>
      <tr>
        <td>Body content 1</td>
        <td>Body content 2</td>
      </tr>
    </tbody>
  </table>
`;

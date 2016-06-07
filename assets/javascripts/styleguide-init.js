/* eslint-disable prefer-arrow-callback */

window.addEventListener('styleguide:onRendered', function onStyleguideRendered() {
  // informs Backstop.js (visual regression test runner) that content is rendered.
  console.log('styleguideRendered'); // eslint-disable-line no-console
});

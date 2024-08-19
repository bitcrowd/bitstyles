const { getStoryContext } = require('@storybook/test-runner');
const { injectAxe, checkA11y } = require('axe-playwright');
/*
 * See https://storybook.js.org/docs/writing-tests/test-runner#test-hook-api
 * to learn more about the test-runner hooks API.
 */
module.exports = {
  async preVisit(page) {
    await injectAxe(page);
  },
  async postVisit(page, context) {
    // Get the entire context of a story, including parameters, args, argTypes, etc.
    const storyContext = await getStoryContext(page, context);

    // Do not run a11y tests on disabled stories.
    if (storyContext.parameters?.a11y?.disable) {
      return;
    }
    await checkA11y(
      page,
      '#root',
      {
        axeOptions: {
          rules: {
            // TODO: enable this rule again once all color contrast issues are fixed
            'color-contrast': {
              enabled: false,
            },
          },
        },
        detailedReport: true,
        verbose: false,
      },
      false,
      'v2'
    );
  },
};

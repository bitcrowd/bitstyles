// TODO: try to make axe-playwright work or uninstall
const { injectAxe, checkA11y, configureAxe } = require('axe-playwright');
const { getStoryContext } = require('@storybook/test-runner');
const { AxeBuilder } = require('@axe-core/playwright');
/*
 * See https://storybook.js.org/docs/writing-tests/test-runner#test-hook-api
 * to learn more about the test-runner hooks API.
 */
module.exports = {
  async postVisit(page, context) {
    // Get the entire context of a story, including parameters, args, argTypes, etc.
    const storyContext = await getStoryContext(page, context);

    // Do not run a11y tests on disabled stories.
    if (storyContext.parameters?.a11y?.disable) {
      return;
    }

    const results = await new AxeBuilder({ page }).options({
      // those rules fail for every story
      rules: {
        "region": { "enabled": false },
        "landmark-one-main": { "enabled": false },
        "page-has-heading-one": { "enabled": false }
      }
    }).analyze();

    if (results.violations.length > 0) {
      const storyId = `'${storyContext.title} ${storyContext.name}' (id: ${storyContext.id})`
      console.error(`Story ${storyId} did not pass axe-core checks.\n\n`, JSON.stringify(results.violations, null, 2));

      throw `Story ${storyId} did not pass axe-core checks. See test error logs for details.`
    }
  },
};

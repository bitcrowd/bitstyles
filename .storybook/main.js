module.exports = {
  "stories": [
    "../scss/**/*.stories.mdx",
    "../scss/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-a11y",
    "@storybook/addon-postcss",
    {
      name: "@storybook/addon-essentials",
      options: {
        actions: false,
        controls: false,
      }
    }
  ]
};

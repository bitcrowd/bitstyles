module.exports = {
  "stories": [
    "../scss/**/*.stories.mdx",
    "../scss/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    {
      name: "@storybook/addon-essentials",
      options: {
        actions: false,
        controls: false,
      }
    }
  ]
}

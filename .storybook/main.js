const path = require('path');

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
  ],
  webpackFinal: async (config) => {
    // Make whatever fine-grained changes you need
    config.module.rules.push({
      test: /\.scss$/,
      use: ['style-loader', 'css-loader', 'sass-loader'],
      include: path.resolve(__dirname, '../'),
    });

    // Return the altered config
    return config;
  },
};

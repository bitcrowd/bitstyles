const path = require('path');

module.exports = {
  stories: [
    '../scss/**/*.stories.mdx',
    '../scss/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  features: { buildStoriesJson: true },
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-a11y',
    {
      name: '@storybook/addon-postcss',
      options: {
        postcssLoaderOptions: {
          implementation: require('postcss'),
        },
      },
    },
    {
      name: '@storybook/addon-essentials',
      options: {
        actions: false,
      },
    },
    'storybook-zeplin/register',
    'storybook-addon-pseudo-states',
  ],
  webpackFinal: async (config) => {
    // Make whatever fine-grained changes you need
    config.module.rules.push({
      test: /\.scss$/,
      use: [
        {
          loader: 'style-loader',
        },
        {
          loader: 'css-loader',
          options: {
            importLoaders: 1,
            modules: {
              mode: 'icss',
            },
          },
        },
        {
          loader: 'postcss-loader',
          options: {
            postcssOptions: {
              plugins: [['autoprefixer']],
            },
          },
        },
        {
          loader: 'sass-loader',
        },
      ],
      include: path.resolve(__dirname, '../scss'),
    }); // Return the altered config

    return config;
  },
  core: {
    builder: 'webpack5',
  },
};

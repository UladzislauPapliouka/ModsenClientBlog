const path = require('path');
module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [],
  framework: {
    name: '@storybook/react-webpack5',
    options: { fastRefresh: true },
  },
  webpackFinal: async (config) => {
    config.resolve.alias['@'] = path.resolve(__dirname, '../src');
    config.resolve.alias['@constants'] = path.resolve(
      __dirname,
      '../src/constants',
    );
    config.resolve.alias['@components'] = path.resolve(
      __dirname,
      '../src/components',
    );
    config.resolve.alias['@hooks'] = path.resolve(__dirname, '../src/hooks');
    config.resolve.alias['@service'] = path.resolve(
      __dirname,
      '../src/service',
    );
    config.resolve.alias['@utils'] = path.resolve(__dirname, '../src/utils');
    return config;
  },
};

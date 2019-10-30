const path = require('path');

// Export a function. Accept the base config as the only param.
module.exports = async ({ config, mode }) => {
  // console.dir(config, { depth: null }) || config;
  config.module.rules = config.module.rules.filter(rule => !rule.test.test(".scss"));

  // Make whatever fine-grained changes you need
  config.module.rules.push({
    test: /\.scss$/,
    use: ['node-sass', 'sass-loader'],
    include: path.resolve(__dirname, '../src/style'),
  });
  // console.warn(config)
  // Return the altered config
  return config;
};

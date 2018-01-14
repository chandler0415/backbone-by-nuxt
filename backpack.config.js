/* eslint no-unused-vars:1 */
module.exports = {
  webpack: (config, options, webpack) => {
    config.entry.main = './server/index.js';
    return config;
  },
};

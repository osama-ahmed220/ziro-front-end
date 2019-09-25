const withTypescript = require("@zeit/next-typescript");
const withCSS = require('@zeit/next-css');
require('dotenv').config();

const path = require('path');
const Dotenv = require('dotenv-webpack');

const withDotEnv = (nextConfig = {}) => ({
  ...nextConfig, webpack: config => {
    config.plugins = config.plugins || []

    config.plugins = [
      ...config.plugins,

      // Read the .env file
      new Dotenv({
        path: path.join(__dirname, '.env'),
        systemvars: true
      })
    ]

    return config
  }
});


module.exports = withTypescript(withDotEnv(withCSS()));

const paths = require('./paths');
const webpack = require('webpack');

module.exports = {
  //must set target 'electron-rendere' to avoid require,process error on render process  
  target: 'electron-main',
  // Don't attempt to continue if there are any errors.
  bail: true,
  entry: [paths.appPublic + '/electron.js'],
  output: {
    path: paths.appBuild,
    filename: 'electron.js',
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'production'),
      'process.env.DEBUG_PROD': JSON.stringify(process.env.DEBUG_PROD || 'false')
    }),
  ],
  /**
   * Disables webpack processing of __dirname and __filename.
   * If you run the bundle in node.js it falls back to these values of node.js.
   * https://github.com/webpack/webpack/issues/2010
   */
  node: {
    __dirname: false,
    __filename: false
  },
};

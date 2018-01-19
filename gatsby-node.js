/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
var webpack = require('webpack');
exports.modifyWebpackConfig = ({config, stage}) => {
  config.plugin("webpack-ignore-moment", webpack.IgnorePlugin, [/^\.\/locale$/, /moment$/]);
};
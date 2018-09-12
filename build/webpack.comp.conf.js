'use strict'
const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const baseWebpackConfig = require('./webpack.base.conf')

const webpackConfig = merge(baseWebpackConfig, {
  entry:{
    app: './packages/index.js'
  },
  output: {
    libraryTarget: 'umd',
    path: path.resolve(__dirname, '../packages/lib'),
    filename: '[name].js'
  },
  plugins: [
    // http://vuejs.github.io/vue-loader/en/workflow/production.html
    new webpack.DefinePlugin({
      'process.env': {}
    })
  ]
})


module.exports = webpackConfig

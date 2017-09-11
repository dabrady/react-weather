const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

var config = {
  entry: './app/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index_bundle.js',
    publicPath: '/'
  },
  module: {
    rules: [
      { test: /\.js$/, use: 'babel-loader' },
      { test: /\.css$/, use: ['style-loader', 'css-loader'] }
    ]
  },
  devServer: {
    // For react-router: in conjunction with 'publicPath' above, ensures routes
    // can be navigated to directly during development.
    historyApiFallback: true
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: 'app/index.html'
    })
  ]
};

if (process.env.NODE_ENV === 'production') {
  config.plugins.push(
    new webpack.DefinePlugin({
      'process.env': {
        // Ensure production build is actually built for production.
        'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
      }
    }),
    // Minify production builds
    new webpack.optimize.UglifyJsPlugin()
  );
}

module.exports = config;

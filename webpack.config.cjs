const path = require('path');
const createAppPath = appName => path.resolve(__dirname, 'front', 'js', 'apps', `${appName}.js`);

const getJSConfig = (env = { mode: 'development' }) => {
  const config = {
    mode: 'development',
    entry: {
      home: createAppPath('home'),
    },
    output: {
      path: path.join(__dirname, '/static/js'),
      filename: '[name].bundle.js',
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: ['babel-loader']
        }
      ]
    },
    resolve: {
      extensions: ['.js', '.jsx'],
      enforceExtension: false,
      modules: [
        path.resolve(__dirname, 'assets', 'js'),
        path.resolve(__dirname, 'node_modules'),
        path.resolve(__dirname, 'assets', 'js', 'ui')
      ]
    }
  }

  return config;
};

module.exports = [getJSConfig];
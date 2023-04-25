const path = require('path');
const createAppPath = appName => path.resolve(__dirname, 'front', 'js', 'apps', `${appName}.js`);

const getJSConfig = (env = { mode: 'development' }) => {
  const config = {
    mode: 'development',
    entry: {
      home: createAppPath('home'),
      dashboard: createAppPath('dashboard'),
      costCenter: createAppPath('costCenter'),
      user: createAppPath('user'),
      mining: createAppPath('mining'),
      dashboardrh: createAppPath('dashboardRH'),
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
        path.resolve(__dirname, 'node_modules'),
        path.resolve(__dirname, 'front', 'js'),
        path.resolve(__dirname, 'front', 'js', 'ui'),
        path.resolve(__dirname, 'front', 'js', 'services')
      ]
    }
  }

  return config;
};

module.exports = [getJSConfig];

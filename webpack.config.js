const path = require('path');

module.exports = {
  entry: './static/app.js',
  output: {
    filename: 'app.min.js',
    path: path.resolve(__dirname, 'static'),
  },
};
const postCssLoader = require('postcss-loader');
const autoPrefixer  = require('autoprefixer');
module.exports = () => ({
  plugins: [
    autoPrefixer,
  ],
});

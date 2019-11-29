const pkg = require('./package.json');

module.exports = ({ file, options, env }) => ({
  plugins: {
    autoprefixer: {
      Browserslist: pkg.browserslist
    },
    pixrem: {},
    'pleeease-filters': {},
    'postcss-advanced-variables': {},
    'postcss-calc': {},
    'postcss-color-function': {},
    'postcss-custom-media': {},
    'postcss-custom-properties': {},
    'postcss-custom-selectors': {},
    'postcss-extend': {},
    'postcss-flexbugs-fixes': {},
    'postcss-global-import': {},
    'postcss-hexrgba': {},
    'postcss-import': {},
    'postcss-media-minmax': {},
    'postcss-mixins': {},
    'postcss-nested': {},
    'postcss-nesting': {},
    'postcss-percentage': {},
    'postcss-selector-matches': {},
    'postcss-selector-not': {},
    'postcss-simple-vars': {}
  }
});

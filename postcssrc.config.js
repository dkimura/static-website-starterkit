const { NODE_ENV } = process.env;
const config = {
  input: './src/css/*.pcss',
  output: './dist/css/style.css',
  use: [
    'stylelint',
    'postcss-easy-import',
    'postcss-browser-reporter',
    'postcss-reporter',
    'postcss-bem',
    'autoprefixer',
  ],
  'local-plugins': true,
  'postcss-reporter': {
    clearMessages: true,
  },
  precss: {
    extension: 'pcss',
  },
  'postcss-easy-import': {
    extensions: ['.pcss', '.scss', '.css'],
    onImport: sources => {
      global.watchCSS(sources);
    },
  },
  'postcss-bem': {
    separators: {
      descendent: '__',
      modifier: '--',
    },
  },
};

if (NODE_ENV === 'production') {
  config.use.push('cssnano');
}

module.exports = config;

const { NODE_ENV } = process.env;
const config = {
  parser: 'postcss-scss',
  input: './src/css/*.pcss',
  output: './dist/css/style.css',
  use: [
    'stylelint',
    'postcss-reporter',
    'precss',
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

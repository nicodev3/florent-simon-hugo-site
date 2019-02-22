module.exports = {
  plugins: {
    'tailwindcss': './custom-tailwind.js',
    'postcss-import': {},
    'postcss-preset-env': {
      browsers: 'last 2 versions'
    },
    autoprefixer: {}
  }
};

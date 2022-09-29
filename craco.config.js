const CracoAlias = require('craco-alias');
// const TailwindCSS = require('tailwindcss');
// const AutoPreFixer = require('autoprefixer');

module.exports = {
  plugins: [
    {
      plugin: CracoAlias,
      options: {
        source: 'tsconfig',
        tsConfigPath: 'tsconfig.paths.json',
      },
    },
  ],
};

const path = require('path')
module.exports = {
  stories: ['../src/components/**/stories.tsx'],
  addons: ['@storybook/addon-essentials'],
  webpackFinal: (config) => {
    config.resolve.modules.push(`${process.cwd()}/src`)
    config.resolve.alias = {
      '@': path.resolve(__dirname, '..', 'src')
    }
    return config
  }
}

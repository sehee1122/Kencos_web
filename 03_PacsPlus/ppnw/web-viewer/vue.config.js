const path = require('path')
module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        '@': path.join(__dirname, 'src/')
      }
    }
  },

  devServer: {
    host: 'localhost',
    watchOptions: {
      poll: 1000
    },
    proxy: {
      '/api': {
        target: 'http://localhost:3000'
      }
    }
  },

  chainWebpack: (config) => {
    config.module
      .rule('storysource')
      .test(/\.stories\.js?$/)
      .post()
      .use('storysource')
      .loader(require.resolve('@storybook/addon-storysource/loader'))
  }
}

const { environment } = require('@rails/webpacker')

const webpack = require('webpack')
environment.plugins.prepend('Provide',
  new webpack.ProvidePlugin({
      s: 'jquery/scr/jquery',
      jQuery: 'jquery/src/jquery',
      Popper: ['popper.js', 'default']
  })
)

module.exports = environment

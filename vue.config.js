module.exports = {
  publicPath: '/mod/spam/static/',
  outputDir: 'dist',
  chainWebpack: config => {
    config.performance
      .maxEntrypointSize(4000000)
      .maxAssetSize(4000000)
  }
}

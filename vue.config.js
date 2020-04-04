module.exports = {
  publicPath: './',
  // lintOnSave: false,
  pwa: {
    name: '北科監控雲',
    themeColor: '#4DBA87',
    msTileColor: '#000000',
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: 'black',
    start_url: 'https://ianchen0119.github.io/FinalProjectNtut/dist/',
    // configure the workbox plugin
    workboxPluginMode: 'InjectManifest',
    workboxOptions: {
      // swSrc is required in InjectManifest mode.
      swSrc: 'src/ServiceWorker.js',
    }
  }
}
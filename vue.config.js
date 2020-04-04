module.exports = {
  // lintOnSave: false,
  pwa: {
    name: '北科監控雲',
    // manifestOptions:{
    //   name: pwa.name,
    //   short_name: pwa.name,
    //   start_url: '.',
    //   display: 'standalone',
    //   theme_color: pwa.themeColor
    // },
    themeColor: '#4DBA87',
    msTileColor: '#000000',
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: 'black',
    start_url: 'http://localhost:8080/#/',
    // configure the workbox plugin
    workboxPluginMode: 'InjectManifest',
    workboxOptions: {
      // swSrc is required in InjectManifest mode.
      swSrc: 'src/sw.js',
    }
  }
}
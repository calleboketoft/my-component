exports.config = {
  namespace: 'mypluginnrtwo',
  outputTargets:[
    {
      type: 'dist'
    },
    {
      type: 'www',
      serviceWorker: false,
      buildDir: '../..'
    }
  ]
};

exports.devServer = {
  root: 'www',
  watchGlob: '**/**'
}

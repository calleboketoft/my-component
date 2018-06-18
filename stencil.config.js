exports.config = {
  namespace: 'mypluginnrtwo',
  outputTargets:[
    {
      type: 'dist'
    },
    {
      type: 'www',
      serviceWorker: false
    }
  ],
  copy: [
    {
      src: 'lwc-manifest.json'
    }
  ]
};

exports.devServer = {
  root: 'www',
  watchGlob: '**/**'
}

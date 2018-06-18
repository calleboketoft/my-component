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
      src: 'lime-web-component.manifest.json'
    }
  ]
};

exports.devServer = {
  root: 'www',
  watchGlob: '**/**'
}

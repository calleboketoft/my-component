import { Component } from '@stencil/core';

@Component({
  tag: 'my-plugin-nr-two',
  shadow: true
})
export class MyPluginNrTwo {
  render() {
    return (
      <div>
        Plugin nr two &nbsp;&nbsp;
        <button onClick={ () => this.sendDataToPlatform() }>
          Send data to platform
        </button>
      </div>
    );
  }

  componentDidLoad() {
    console.log('registering plugin callback')
    window['platformPluginComm'].registerPluginDataCallback('my-plugin-nr-two', this.dataFromPlatform.bind(this))
  }

  dataFromPlatform (data) {
    console.log('Data received from platform', data)
  }

  sendDataToPlatform () {
    const dataForPlatform = {someData: 'from plugin to platform'}
    window['platformPluginComm'].sendDataToPlatform(dataForPlatform)
  }
}

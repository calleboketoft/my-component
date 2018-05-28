import { Component, State } from '@stencil/core';
import { pluginComm } from 'plugin-comm'
@Component({
  tag: 'my-plugin-nr-two',
  shadow: true
})
export class MyPluginNrTwoComponent {
  @State() pluginId

  render() {
    return (
      <div>
        Plugin nr two, id: { this.pluginId }
        <br />
        <button onClick={ () => this.sendDataToPlatform() }>
          Send data to platform
        </button>
      </div>
    );
  }

  componentDidLoad() {
    this.pluginId = pluginComm.pluginRegisterDataCallback('my-plugin-nr-two', this.dataFromPlatform.bind(this))
    console.log('registering plugin callback for "my-plugin-nr-two"')
    console.log(this.pluginId)
  }

  componentDidUnload(){
    console.log('Plugin nr two: removed from DOM and now unregistering')
    pluginComm.pluginUnregisterDataCallback(this.pluginId)
  }

  dataFromPlatform (data) {
    console.log('Data received from platform in plugin two', data)
  }

  sendDataToPlatform () {
    const dataForPlatform = {someData: 'from plugin nr two to platform'}
    pluginComm.pluginSendDataToPlatform(dataForPlatform)
  }
}

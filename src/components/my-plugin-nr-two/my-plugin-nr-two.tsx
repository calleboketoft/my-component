import { Component, State, Prop } from '@stencil/core';
import { pluginComm } from 'plugin-comm'
@Component({
  tag: 'my-plugin-nr-two',
  shadow: true
})
export class MyPluginNrTwoComponent {
  @Prop() pluginId
  @State() messageFromPlatform

  render() {
    return (
      <div>
        Plugin nr two, id: { this.pluginId }
        <br />
        Message from platform: { this.messageFromPlatform }
        <br />
        <button onClick={ () => this.sendDataToPlatform() }>
          Send data to platform
        </button>
      </div>
    );
  }

  componentDidLoad() {
    pluginComm.pluginRegisterDataCallback(this.pluginId, this.dataFromPlatform.bind(this))
    console.log('registering plugin callback for "my-plugin-nr-two"')
    console.log(this.pluginId)
  }

  componentDidUnload(){
    console.log('Plugin nr two: removed from DOM and now unregistering')
    pluginComm.pluginUnregisterDataCallback(this.pluginId)
  }

  dataFromPlatform (data) {
    console.log('Data received from platform in plugin two', data)
    this.messageFromPlatform = JSON.stringify(data);
  }

  sendDataToPlatform () {
    const dataForPlatform = {someData: 'from plugin nr two to platform'}
    pluginComm.pluginSendDataToPlatform(dataForPlatform)
  }
}

import { Component, Prop, State } from '@stencil/core';
import { LimeWebComponentPlatform } from 'lime-web-component-platform/lime-web-component-platform.interface'

@Component({
  tag: 'my-plugin-nr-two',
  shadow: true
})
export class MyPluginNrTwoComponent {
  @State() pluginName = 'my-plugin-nr-two'
  @Prop() limeWebComponentPlatform: LimeWebComponentPlatform
  render() {
    return (
      <button onClick={ () => this.logSomethingOnPlatform() }>
        Make platform log something
      </button>
    );
  }

  public logSomethingOnPlatform () {
    this.limeWebComponentPlatform.logMessage(this.pluginName)
  }
}

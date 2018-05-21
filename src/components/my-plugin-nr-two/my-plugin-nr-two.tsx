import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'my-plugin-nr-two',
  shadow: true
})
export class MyPluginNrTwo {

  @Prop() first: string;
  @Prop() last: string;

  render() {
    return (
      <div>
        Plugin nr twox {this.first} {this.last}
        <button onClick={ () => this.handleClick() }>
          Send data to platform
        </button>
      </div>
    );
  }

  handleClick () {
    const dataForPlatform = 'some data for parent'
    console.log(window['platformPluginComm'])
    window['platformPluginComm'].sendDataToPlatform(dataForPlatform)
  }
}

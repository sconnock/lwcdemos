import { LightningElement, track } from "lwc";

export default class App extends LightningElement {
  @track property1;

  handleSampleEvent(event) {
    this.property1 = event.detail.payload;
  }
}

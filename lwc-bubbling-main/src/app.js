import { LightningElement, track, api } from "lwc";

export default class App extends LightningElement {
  handleNotify(event) {
    console.log("The parent component has been notified");
    if (event.target) {
      console.log("Event sent by " + event.target.localName);
    }
  }

  parentDivNotify(event) {
    console.log("parentDivNotify");
    if (event.target) {
      console.log("Event sent by " + event.target.localName);
    }
  }
}

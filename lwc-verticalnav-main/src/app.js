import { LightningElement, track } from "lwc";

export default class App extends LightningElement {
  
  handleSelectItem(event) {
    let selectedItemName = event.detail.name;
    console.log("You selected " + selectedItemName);
  }
}

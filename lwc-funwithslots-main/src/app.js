import { LightningElement } from "lwc";

export default class App extends LightningElement {
  message = "Hello World";

  handleClick() {
    console.log("Parent");
  }
}

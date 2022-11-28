import { LightningElement, track } from "lwc";

export default class App extends LightningElement {
  greeting = "Hello";
  name = { first: "John", last: "Doe" };

  handleClick() {
    //this.greeting = "Goodbye"; // primitive property change: rerender!
    //this.name.first = "Jane";  // nested object property change: no rerender.
    this.name = { first: "Simon", last: "Doe" };
  }
}

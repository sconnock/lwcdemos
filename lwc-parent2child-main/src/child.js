import { LightningElement, api } from "lwc";

export default class Child extends LightningElement {
  message;

  @api childFunction(argument) {
    this.message = "Hello " + argument;
    return "Got message";
  }
}

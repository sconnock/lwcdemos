import { LightningElement } from "lwc";

export default class App extends LightningElement {
  property1;

  constructor() {
    super();
    // this.template.addEventListener(
    //   "sampleevent",
    //   this.handleSampleEvent
    // );         
  }

  connectedCallback() {
    this.template.addEventListener(
      "sampleevent",
      this.handleSampleEvent
    );   
  }

  // renderedCallback() {
  //   const child1 = this.template.querySelector("c-child1");
  //   child1.addEventListener("sampleevent", this.handleSampleEvent);
  //   const child2 = this.template.querySelector("c-child2");
  //   child2.addEventListener("sampleevent", this.handleSampleEvent);
  // }  

  handleSampleEvent = (event) => {
    this.property1 = event.detail.payload + " sent by " + event.target.localName;
  }
}

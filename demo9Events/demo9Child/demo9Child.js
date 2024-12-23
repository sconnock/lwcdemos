import { LightningElement } from 'lwc';

export default class Demo9Child extends LightningElement {
    message = "Hello World";

    handleChange(event) {
      this.message = event.target.value;
    }
  
    handleClick() {
      // Send a custom event
      const evt = new CustomEvent("sampleevent", { // Event name must be lowercase
        detail: { payload: this.message }, // Must use the 'detail' keyword here
      });
  
      this.dispatchEvent(evt);
    }
  }
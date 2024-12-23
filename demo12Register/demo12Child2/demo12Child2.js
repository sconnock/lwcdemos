import { LightningElement } from 'lwc';

export default class Demo12Child2 extends LightningElement {
    message = "Hello World";

    handleChange(event) {
        this.message = event.target.value;
    }

    handleClick() {
        // Send a custom event
        const evt = new CustomEvent("sampleevent", { // Event name must be lowercase
            // bubbles: true,  // Need bubbling if parent programatically
            // composed: true, // registering listener on the template
            detail: { payload: this.message }, // Must use the 'detail' keyword here
        });

        this.dispatchEvent(evt);
    }
}
import { LightningElement } from 'lwc';

export default class Demo12Register extends LightningElement {
    property1;
    registered = false;

    // constructor() {
    //   super();
    //   this.template.addEventListener(
    //     "sampleevent",
    //     this.handleSampleEvent
    //   );         
    // }

    connectedCallback() {
        this.template.addEventListener(
            "sampleevent",
            this.handleSampleEvent
        );
    }

    // renderedCallback() {
    //   if (!this.registered) {
    //     const child1 = this.template.querySelector("c-child1");
    //     child1.addEventListener("sampleevent", this.handleSampleEvent);
    //     const child2 = this.template.querySelector("c-child2");
    //     child2.addEventListener("sampleevent", this.handleSampleEvent);
    //     this.registered = true;
    //   }
    // }  

    handleSampleEvent = (event) => {
        this.property1 = event.detail.payload + " sent by " + event.target.localName;
    }
}
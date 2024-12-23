import { LightningElement } from "lwc";

export default class SourceComponent extends LightningElement {
    sourceMessage;

    handleChange(event) {
        this.sourceMessage = event.target.value;
    }

    handleClick() {

        // Send a custom event
        const evt = new CustomEvent("sourceevent", {
            detail: { payload: this.sourceMessage }
        });

        this.dispatchEvent(evt);
    }
}
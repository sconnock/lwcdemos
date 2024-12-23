import { LightningElement } from 'lwc';

export default class Demo9Events extends LightningElement {
    property1;

    handleSampleEvent(event) {
        this.property1 = event.detail.payload;
    }
}
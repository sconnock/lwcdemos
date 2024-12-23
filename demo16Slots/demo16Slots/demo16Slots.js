import { LightningElement } from 'lwc';

export default class Demo16Slots extends LightningElement {
    message = "Hello World";

    handleClick() {
        console.log("Parent");
    }
}

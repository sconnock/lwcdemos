import { LightningElement } from 'lwc';

export default class Demo10Func extends LightningElement {
    property1;
    property2;

    handleChange(event) {
        this.property1 = event.target.value;
    }

    handleClick() {
        // Pass argument and get response
        this.property2 = this.template
            .querySelector("c-child")
            .childFunction(this.property1);
    }
}
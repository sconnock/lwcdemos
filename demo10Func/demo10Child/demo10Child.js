import { LightningElement, api } from 'lwc';

export default class Demo10Child extends LightningElement {
    message;

    @api childFunction(argument) {
        this.message = "Hello " + argument;
        return "Got message";
    }
}
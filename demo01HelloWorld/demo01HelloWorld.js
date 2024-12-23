import { LightningElement } from 'lwc';

export default class Demo01HelloWorld extends LightningElement {
    greeting = "World";

    handleChange(event) {
        this.greeting = event.target.value;
    }

    count() {
        alert(this.greeting.length + " letters");
    }
}
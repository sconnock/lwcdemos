import { LightningElement } from 'lwc';

export default class Demo11Bubbling extends LightningElement {

    handleNotify(event) {
        console.log("Parent: Event sent by " + event.target.localName);
    }
    

    parentDivNotify(event) {
        console.log("parentDiv: Event sent by " + event.target.localName);
    }
}

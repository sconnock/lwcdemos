import { LightningElement } from 'lwc';

export default class Demo11Child extends LightningElement {
    outerDivNotify(event) {
        console.log("outerDivNotify: Event sent by " + event.target.localName);
        //event.stopPropagation();
    }

    middleDivNotify(event) {
        console.log("middleDivNotify: Event sent by " + event.target.localName);
    }

    innerDivNotify(event) {
        console.log("innerDivNotify: Event sent by " + event.target.localName);
    }

    childClick() {
        var innerDiv = this.template.querySelector(".innerDiv");
        var evt = new CustomEvent("notify", { bubbles: true, composed: true });
        innerDiv.dispatchEvent(evt);
    }
}
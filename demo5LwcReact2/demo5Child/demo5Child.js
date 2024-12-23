import { LightningElement, api } from 'lwc';

export default class Demo5Child extends LightningElement {
    privateChildProp = 0;
    @api childProp = 0;
    _message = "";

    handleClick(event) {
        this.privateChildProp = this.privateChildProp + 1;
        this.childProp = this.childProp + 1;
    }

    @api
    get childMessage() {
        return this._message;
    }

    set childMessage(value) {
        this._message = value.toUpperCase();
    }
}

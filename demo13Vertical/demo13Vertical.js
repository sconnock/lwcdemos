import { LightningElement } from 'lwc';

export default class Demo13Vertical extends LightningElement {

    handleSelectItem(event) {
        let selectedItemName = event.detail.name;
        console.log("You selected " + selectedItemName);
    }
}
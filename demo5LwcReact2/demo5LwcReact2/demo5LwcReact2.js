import { LightningElement } from 'lwc';

export default class Demo5LwcReact2 extends LightningElement {
    parentPrivateProp = 1;

    parentMessage = "hello from parent";

    handleClick(event) {
        this.parentPrivateProp = this.parentPrivateProp + 1;
    }

    handleChange(event) {
        this.parentMessage = event.target.value;
    }
}
import { LightningElement, track } from 'lwc';

export default class Demo3LwcTrack extends LightningElement {
    @track student = { first: "John", last: "Doe" };
    classes = ["DEX450", "CCD102"];

    updateProps() {
        // reassignments trigger rerender with or without @track
        //this.student = { first: "Jane", last: "Doe" };
        //this.classes = ["DEX601", "DEX602"];

        // the next two lines only trigger rerender because of @track
        this.student.first = "Jane";
        this.classes.push("DEX470");
        console.log(this.classes);
    }
}
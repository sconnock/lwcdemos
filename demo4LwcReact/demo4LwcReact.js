import { LightningElement, track } from 'lwc';

export default class Demo4LwcReact extends LightningElement {
    counter = 3;

    myPrivateIDs = [1, 2, 3];
    @track myTrackedIDs = [1, 2, 3];
  
    changePrivate() {
      this.counter++;
      this.myPrivateIDs.push(this.counter);
      console.log(this.counter);
    }
  
    changeReactive() {
      this.counter++;
      this.myTrackedIDs.push(this.counter);
    }
  }
import { LightningElement, track } from 'lwc';

export default class Child extends LightningElement {

    @track recordId;
    @track objectApiName = 'Contact';
    @track showRecordEditForm = false;
    @track showRecordViewForm = false;
    @track showRecordForm = false;

    fields = ['FirstName', 'LastName', 'AccountId', 'LeadSource'];

    handleChange(event) {
        if ( event.target.label === 'Record ID') {
            this.recordId = event.target.value;
        } else {
            this.objectApiName = event.target.value;
        }
    }

    handleClick(event) {
        this.showRecordEditForm = false;
        this.showRecordViewForm = false;
        this.showRecordForm = false;   

        switch(event.target.label) {
            case 'lightning-record-form':
                this.showRecordForm = true;
                break;
            case 'lightning-record-edit-form':
                this.showRecordEditForm = true;
                break;
            case 'lightning-record-view-form':
                this.showRecordViewForm = true;
                break;                              
        }
    }

    handleSuccess(event) {
        this.recordId = event.detail.id;
        alert('Record ID is ' + this.recordId);
    }
}
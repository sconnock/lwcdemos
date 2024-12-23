import { LightningElement, api, wire } from 'lwc';
import { getRecord, updateRecord, notifyRecordUpdateAvailable, getRecordNotifyChange } from 'lightning/uiRecordApi';
import updateContact from '@salesforce/apex/Contacts.updateContact';

import CONTACT_FIRSTNAME_FIELD from '@salesforce/schema/Contact.FirstName';
import CONTACT_LASTNAME_FIELD from '@salesforce/schema/Contact.LastName';

export default class LdsDemo extends LightningElement {
    @api recordId;
    firstname;
    lastname;
    message;
    errorMessage;

    handleChange(event) {
        if (event.target.name === 'recordid') {
            this.recordId = event.target.value;
        } else if (event.target.name === 'firstname') {
            this.firstname = event.target.value;
        } else {
            this.lastname = event.target.value;
        }
    }

    // Retrieve the record based on the input record ID
    @wire(getRecord, { recordId: '$recordId', fields: [CONTACT_FIRSTNAME_FIELD, CONTACT_LASTNAME_FIELD] })
    wiredContact({ error, data }) {
        if (data) {
            this.firstname = data.fields.FirstName.value;
            this.lastname = data.fields.LastName.value;
            this.errorMessage = undefined;
        } else if (error) {
            this.errorMessage = error.body[0].message;
        }
    }

    // Update the record for the given ID using LDS
    updateContactRecordLDS() {
        let record = {
            fields: {
                Id: this.recordId,
                FirstName: this.firstname,
                LastName: this.lastname
            },
        };

        updateRecord(record)
            .then(() => {
                this.message = 'Record updated by UI API';
            })
            .catch(error => {
                this.message = error.body.message;
            });
    }

    // Update the record for the given ID using Imperative Apex
    updateContactRecordApex() {
        updateContact({ Id: this.recordId, FirstName: this.firstname, LastName: this.lastname })
            .then(result => {
                this.message = result;
                //getRecordNotifyChange([{recordId: this.recordId}]); // Deprecated 
                notifyRecordUpdateAvailable([{ recordId: this.recordId }]);
            })
            .catch(error => {
                this.message = error.body.message;
            })
    }

    // async updateContactRecordApex() {
    //     try {
    //         const result = await updateContact( {Id: this.recordId, FirstName: this.firstname, LastName: this.lastname});
    //         this.message = result;  
    //         notifyRecordUpdateAvailable([{recordId: this.recordId}]);        
    //     } catch(error) {
    //         this.message = error.body.message;
    //     }
    // }
}
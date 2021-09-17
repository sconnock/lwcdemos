import { LightningElement, api, wire } from 'lwc';
import { getRecord } from 'lightning/uiRecordApi';
import CONTACT_EMAIL_FIELD from '@salesforce/schema/Contact.Email';
//import CONTACT_STATUS_FIELD from '@salesforce/schema/Contact.Status__c';

export default class Child extends LightningElement {
	@api recordId;
	record;
	errorMessage;
	
	@wire(getRecord, { recordId: '$recordId', fields: [CONTACT_EMAIL_FIELD] })
	record;
	
	get email() {
		let output = "Not loaded yet...";
		if (this.record.data) {
			output = this.record.data.fields.Email.value;
		}
		if (this.record.error) {
			this.errorMessage = this.record.error.body.message;
		}		
		return output;
	}
	
	/*
	when wiring a property: The property is assigned a default value after component 
	construction and before any other lifecycle event.   
	
		when wiring a function: The function is invoked whenever a value is available,  
		which can be before or after the component is connected or rendered. 
	*/
	// @wire(getRecord, { recordId: "$recordId", fields: [{fieldApiName: "Email", objectApiName: "Contact"},
	//                                                   {fieldApiName: "Status__c", objectApiName: "Contact"}] })
	// @wire(getRecord, { recordId: "$recordId", fields: [{fieldApiName: "Email", objectApiName: "Contact"}] })
	//@wire(getRecord, { recordId: "$recordId", fields: [CONTACT_EMAIL_FIELD] })
	// @wire(getRecord, { recordId: '$recordId', fields: [CONTACT_EMAIL_FIELD, CONTACT_STATUS_FIELD] })
	// wiredContact({ error, data }) {
	// 	if (data) {
	// 		this.record = data; 
	// 		this.errorMessage = undefined;
	// 	} else if (error) {
	// 		this.record = undefined; 
	// 		this.errorMessage = error.body.message;
	// 	}
	// }

	// get email() {
	// 	let output = "Not loaded yet...";
	// 	if (this.record && this.record.fields) {
	// 		output = this.record.fields.Email.value;
	// 		//console.log('Record fields:' + this.record.fields);
	// 		//console.log(this.record.fields.Status__c.value);
	// 	}
	// 	return output;
	// }

}
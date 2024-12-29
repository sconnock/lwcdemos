import { LightningElement } from 'lwc';

export default class Demo17Child2 extends LightningElement {

	constructor() {
		super();
		console.log("Child 2: constructor");
	}

	connectedCallback() {
		console.log("Child 2: connectedCallback");
	}

	renderedCallback() {
		console.log("Child 2: renderedCallback");
	}

	disconnectedCallback() {
		console.log("Child 2: disconnectedCallback");
	}    
}
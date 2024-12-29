import { LightningElement } from "lwc";

export default class Demo17Child1 extends LightningElement {
    
	constructor() {
		super();
		console.log("Child 1: constructor");
	}

	connectedCallback() {
		console.log("Child 1: connectedCallback");
	}

	renderedCallback() {
		console.log("Child 1: renderedCallback");
	}

	disconnectedCallback() {
		console.log("Child 1: disconnectedCallback");
	}
}

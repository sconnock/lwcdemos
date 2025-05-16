import { LightningElement, api } from 'lwc';

export default class Demo17Child2 extends LightningElement {
	@api publicProp;

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

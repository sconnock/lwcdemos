import { LightningElement, api } from 'lwc';

export default class Demo7Child extends LightningElement {
    @api property1 = 0;
    _message;

    handleClick(event) {
        this.property1 = this.property1 + 1;
    }

    // Component Lifecycle Hooks
    /*
     * The constructor is executed when the component instantiated. This hook flows from parent to child.
     * You can’t access child elements in the component body because they don’t exist yet.
     * Properties are assigned to the component after construction and before the connectedCallback() hook.
     */
    constructor() {
        super();
        console.log("Child: constructor");
    }

    /*
     * Called when the element is inserted into the DOM. Hook flows from parent to child.
     */
    connectedCallback() {
        console.log("Child: connectedCallback");
    }

    /*
     * Called after every render of the component. This lifecycle hook is specific to Lightning Web
     * Components, it isn’t from the HTML custom elements specification. This hook flows from child to parent.
     */
    renderedCallback() {
        console.log("Child: renderedCallback");
    }

    /*
     * Called when the element is removed from a document. This hook flows from parent to child.
     */
    disconnectedCallback() {
        console.log("Child: disconnectedCallback");
    }
}
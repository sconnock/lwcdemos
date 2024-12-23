import { LightningElement, api } from 'lwc';

export default class Demo7Parent extends LightningElement {
    @api property1 = 0;
    @api showchild;
  
    handleClick(event) {
      this.property1 = this.property1 + 1;
    }
  
    handleChange(event) {
      this.showchild = event.target.checked;
    }
  
    // Component Lifecycle Hooks
    /*
     * The constructor is executed when the component instantiated. This hook flows from parent to child.
     * You can’t access child elements in the component body because they don’t exist yet.
     * Properties are assigned to the component after construction and before the connectedCallback() hook.
     */
    constructor() {
      super();
      console.log("Parent: constructor");
    }
  
    /*
     * Called when the element is inserted into the DOM. Hook flows from parent to child.
     */
    connectedCallback() {
      console.log("Parent: connectedCallback");
    }
  
    /*
     * Called after every render of the component. This lifecycle hook is specific to Lightning Web
     * Components, it isn’t from the HTML custom elements specification. This hook flows from child to parent.
     */
    renderedCallback() {
      console.log("Parent: renderedCallback");
    }
  
    /*
     * Called when the element is removed from a document. This hook flows from parent to child.
     */
    disconnectedCallback() {
      console.log("Parent: disconnectedCallback");
    }
  
    /*
     * Called when a descendant component throws an error in one of its lifecycle hooks.
     * The error argument is a JavaScript native error object, and the stack argument is a string.
     * This lifecycle hook is specific to Lightning Web Components, it isn’t from the HTML custom
     * elements specification.
     *
     * Implement this hook to create an error boundary component that captures errors in all the
     * descendent components in its tree. The error boundary component can log stack information
     * and render an alternative view to tell users what happened and what to do next. The method
     * works like a JavaScript catch{} block for components that throw errors in their lifecycle hooks.
     * It’s important to note that an error boundary component catches errors only from its children,
     * and not from itself.
     */
    errorCallback(error, stack) {
      console.log("Parent: errorCallback");
    }
  }
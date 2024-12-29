import { LightningElement } from 'lwc';

export default class Demo17Dynamic extends LightningElement {
    componentConstructor;

    // handleClick() {
    //     import("c/demo17Child1")
    //     .then(({default: ctor}) => (this.componentConstructor = ctor))
    //     .catch((error) => console.log("Error importing component"));
    // }

    async handleClick() {
        if (this.refs.toggle.checked) {
            const { default: ctor } = await import("c/demo17Child1");
            this.componentConstructor = ctor;
        } else {
            const { default: ctor } = await import("c/demo17Child2");
            this.componentConstructor = ctor;
        }
    }
}

import { LightningElement } from 'lwc';

export default class Demo17Dynamic extends LightningElement {
    componentConstructor1;
    componentConstructor2;
    privateProp = "Boo";

    // handleClick() {
    //     import("c/demo17Child1")
    //     .then(({default: ctor}) => (this.componentConstructor1 = ctor))
    //     .catch((error) => console.log("Error importing component"));
    // }

    async handleClick() {
        if (this.refs.toggle.checked) {
            const { default: ctor } = await import("c/demo17Child1");
            this.componentConstructor1 = ctor;
        } else {
            const { default: ctor } = await import("c/demo17Child2");
            this.componentConstructor2 = ctor;
        }
    }
}

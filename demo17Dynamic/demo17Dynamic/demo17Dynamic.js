import { LightningElement } from 'lwc';

export default class Demo17Dynamic extends LightningElement {
    componentConstructor;

    // handleClick() {
    //     import("c/demo17Child")
    //     .then(({default: ctor}) => (this.componentConstructor = ctor))
    //     .catch((error) => console.log("Error importing component"));
    // }

    async handleClick() {
        const { default: ctor } = await import("c/demo17Child");
        this.componentConstructor = ctor;
    }
}
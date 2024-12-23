import { LightningElement } from 'lwc';

export default class Demo14Groups extends LightningElement {
    selectedButton = "View Map";
    selectedRadioButton = "View Map";

    handleClick(event) {
        // The event object allows as to get information about what was clicked on
        //console.log(event.target.dataset.btnid);
        //console.log(event.target.variant);
        //console.log(event.target.label);

        // Set all the buttons to neutral
        // for (let i = 1; i <= 3; i++) {
        //     let btn = 'btn' + i;
        //     this.template.querySelector('[data-btnid=' + btn + ']').variant = 'neutral';
        // }

        // Set all the buttons to neutral
        let btns = this.template.querySelectorAll("lightning-button");
        btns.forEach((btn) => {
            btn.variant = "neutral";
        });

        // Store and highlight the selected button
        //this.selectedButton = event.target.getAttribute('data-btnid');
        this.selectedButton = event.target.label;
        event.target.variant = "brand";
    }

    get directionTypes() {
        return [
            { label: "View Map", value: "View Map" },
            { label: "Walking Directions", value: "Walking Directions" },
            { label: "Driving Directions", value: "Driving Directions" },
        ];
    }

    handleChange(event) {
        this.selectedRadioButton = event.detail.value;
    }
}
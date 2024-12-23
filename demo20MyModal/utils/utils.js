import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import { getFieldValue, getFieldDisplayValue } from 'lightning/uiRecordApi';
import MyModal from 'c/myModal';

export default class Utils {

    static showToast = (firingComponent, toastTitle, toastBody, variant) => {
        const evt = new ShowToastEvent({
            title: toastTitle,
            message: toastBody,
            variant: variant
        });
        firingComponent.dispatchEvent(evt);
    }

    // static showModal = (firingComponent, header, content)  => {
    //     const evt = new CustomEvent('showmodal', {
    //         detail: {
    //             header,
    //             content
    //         },
    //         bubbles:true,
    //         composed:true
    //     });
    //     firingComponent.dispatchEvent(evt);
    // }

    static showModal = async (firingComponent, header, content) => {
        const result = await MyModal.open({
            size: 'small',
            description: 'Accessible description of modal\'s purpose',
            heading: header,
            content: content,
        });
        // if modal closed with X button, promise returns result = 'undefined'
        // if modal closed with OK button, promise returns result = 'okay'
        console.log(result);
    }

    static getDisplayValue(data, field) {
        return getFieldDisplayValue(data, field) ? getFieldDisplayValue(data, field) : getFieldValue(data, field);
    }
}
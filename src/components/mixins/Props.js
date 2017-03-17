import ImagePickerProps from './ImagePickerProps';
export default {

    mixins: [ ImagePickerProps ],
     
    props: {
        'adaptor': {
            type: Function,
            default( images ) {
                return images;
            },
        },
        name: {
            type: String,
            required: true,
        },
        'value-adaptor': {
            type: Function,
            default( value ) {
                return value;
            },
        }
    },
}

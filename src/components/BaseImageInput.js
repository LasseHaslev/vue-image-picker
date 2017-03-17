import ImagePicker from '@lassehaslev/vue-image-picker';
export default {

    data() {
        return{

            selectedImage: null,

        }
    },

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

    methods: {
        open() {
            this.$refs.imagePicker.open();
        },
        selectImage( image ) {
            this.selectedImage = image;
        },
    },

    components: {
        ImagePicker,
    }
}

import ImagePicker from '@lassehaslev/vue-image-picker';
import Props from './mixins/Props';
export default {

    mixins: [ Props ],

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
        value: {
            type: Object,
            default: null,
        },
        'value-adaptor': {
            type: Function,
            default( value ) {
                return value;
            },
        }
    },

    mounted() {
        var newObject = JSON.parse( JSON.stringify( this.value ) );
        this.selectedImage = newObject;
    },

    methods: {
        open() {
            this.$refs.imagePicker.open();
        },
        selectImage( image ) {
            this.selectedImage = image;
            if (!image) {
                this.$emit( 'image-removed' );
            }
        },
    },

    components: {
        ImagePicker,
    }
}

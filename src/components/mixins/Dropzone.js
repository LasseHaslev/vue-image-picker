import { Dropzone } from '@lassehaslev/vue-dropzone';
export default {

    props: {

        dropzone: {
            type:Boolean,
            default: false,
        },

        'dropzone-url': {
            type: String,
            default() {
                return this.url;
            },
        },

        'dropzone-name': {
            type: String,
            default: 'image',
        },
    },

    data() {
        return{
            isHover: false,
        }
    },

    methods: {
        onStateChanged( state ) {
            this.isHover = state;
        },
        onUpload( response ) {
            this.uploaded( response.data );
        },
    },

    mounted() {
        console.log(this.dropzoneUrl);
    },

    components: {
        Dropzone,
    }
}

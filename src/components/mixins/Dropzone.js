import { Dropzone } from '@lassehaslev/vue-dropzone';
import DropzoneProps from './DropzoneProps';
export default {

    mixins: [ DropzoneProps ],

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

    components: {
        Dropzone,
    }
}

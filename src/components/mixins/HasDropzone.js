export default {

    props: {
        'upload-url': {
            type: String,
            default: null,
        },
    },

    methods: {
        onUpload( response, image ) {
            this.add( response.data );
        },
    }

}

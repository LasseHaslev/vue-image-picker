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
}

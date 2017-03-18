import ImageInputElement from './ImageInputElement';
import Props from './mixins/Props';
export default {

    mixins: [ Props ],

    props: {
        multiple: {
            type: Boolean,
            default: false,
        },

        values: {
            type: Array,
            default() {
                return [];
            }
        },

        value: {
            type: Object,
            default: null,
        },
    },

    data() {
        return {
            value_: null,
            values_: [],
        }
    },

    mounted() {
        this.values_ = this.values;
        this.value_ = this.value;
    },

    methods: {
        addImage() {
            this.values_.push({
                url: '',
            });
        },

        removeImage( index ) {
            this.$nextTick( function() {
                this.values_.splice( index, 1 );
            } );
        }
    },

    components: {
        ImageInputElement,
    }
}

import BaseItemPicker from '@lassehaslev/vue-item-picker';
import ImagePickerItem from './ImagePickerItem';
import axios from 'axios';

import DropzoneLogic from './mixins/Dropzone';
import Props from './mixins/Props';

export default {

    mixins: [
        BaseItemPicker,

        Props,
        DropzoneLogic,
    ],


    methods: {
        uploaded( item ) {
            var item = this.add( item );
            if (
                !this.selected ||
                this.selected.length == 0
            ) {
                this.select( item );
            }
            return item;
        },
        select( item ) {
            this.onItemSelect( item );
        },
        onModalOpen() {
            this.loadImages();
        },
        loadImages() {
            var self = this;
            axios.get( this.url ).then( function( response ) {
                self.removeAll();
                self.add( response.data );
            } );
        }
    },

    components: {
        ImagePickerItem,
    }

}

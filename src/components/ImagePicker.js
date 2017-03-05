import BaseItemPicker from '@lassehaslev/vue-item-picker';
import ImagePickerItem from './ImagePickerItem';
import axios from 'axios';
export default {

    mixins: [ BaseItemPicker ],

    template: `
        <div class="modal"
             :class="{ 'is-active': isShowingModal }">
            <div class="modal-background" @click="close"></div>
            <div class="modal-content">
                <div class="box">
                    <slot>
                        <h4 class="title">Please select an image</h4>
                    </slot>
                    <div class="columns is-mobile is-multiline">
                        <image-picker-item v-for="item in items" :show-adaptor="showAdaptor" :selected="selectedItems" @confirm="confirm" @select="onItemSelect" :item="item"></image-picker-item>
                    </div>
                    <div class="button is-primary" @click="confirm">Confirm</div>
                    <div class="button is-default" @click="cancel">Cancel</div>
                </div>
            </div>
            <button class="modal-close" @click="close"></button>
        </div>
    `,

    props: {
        url: {
            type: String,
            required: true,
        },

        'show-adaptor': {
            type: Function,
            default( item ) {
                return item;
            },
        }
    },

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

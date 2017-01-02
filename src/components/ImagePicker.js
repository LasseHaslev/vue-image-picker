import BaseItemPicker from '@lassehaslev/vue-item-picker';
import ImagePickerItem from './ImagePickerItem';
import axios from 'axios';
import { Dropzone } from '@lassehaslev/vue-dropzone';
import HasDropzone from './mixins/HasDropzone';
export default {

    mixins: [ BaseItemPicker, HasDropzone ],

    template: `
        <div class="modal"
             :class="{ 'is-active': isShowingModal }">
            <div class="modal-background" @click="close"></div>
            <div class="modal-content">
                <div class="box">
                    <slot>
                        <h4 class="title">Please select an image</h4>
                    </slot>
                    <dropzone v-if="uploadUrl" :url="uploadUrl" name="image" @upload="onUpload">
        <div class="has-text-centered" style="
    padding: 32px;
    cursor:pointer;
    border: 2px dashed #ccc;
    ">
        <span class="icon"><i class="fa fa-cloud-upload"></i></span> Drop files here to upload
        </div>
        </dropzone>
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

    mounted() {
        this.open();
    },

    methods: {
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
        Dropzone,
    }
}

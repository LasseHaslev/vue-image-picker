import BaseImagePicker from './BaseImagePicker';
export default {

    mixins: [ BaseImagePicker ],

    template: `
        <div class="modal"
             :class="{ 'is-active': isShowingModal }">
            <div class="modal-background" @click="close"></div>
            <div class="modal-content">
                <div class="box">
                    <dropzone v-if="dropzone" :url="dropzoneUrl" @upload="onUpload" @state-change="onStateChanged" :name="dropzoneName">
                        <div class="hero" style="cursor:pointer;" :class="[ isHover ? 'is-warning' : 'is-info' ]">
                            <div class="hero-body has-text-centered"><span class="icon"><i class="fa fa-cloud-upload"></i></span> Drop files here to upload</div>
                        </div>
                    </dropzone>
                    <h4 v-else class="title">Please select an image</h4>
                    <div class="columns is-mobile is-multiline">
                        <image-picker-item v-for="item in items" :key="item.url" :show-adaptor="showAdaptor" :selected="selectedItems" @confirm="confirm" @select="onItemSelect" :item="item"></image-picker-item>
                    </div>
                    <div class="button is-primary" @click="confirm">Confirm</div>
                    <div class="button is-default" @click="cancel">Cancel</div>
                </div>
            </div>
            <button class="modal-close" @click="close"></button>
        </div>
    `,
}

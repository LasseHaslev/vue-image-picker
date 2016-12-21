import BaseItemPicker from '@lassehaslev/vue-item-picker';
import ImagePickerItem from './ImagePickerItem';
export default {
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
                        <image-picker-item v-for="item in pickerItems" :selected="selectedItems" @confirm="confirm" @select="onItemSelect" :picker-item="item" :itemAdaptor="itemAdaptor"></image-picker-item>
                    </div>
                    <div class="button is-primary" @click="confirm">Confirm</div>
                    <div class="button is-default" @click="cancel">Cancel</div>
                </div>
            </div>
            <button class="modal-close" @click="close"></button>
        </div>
    `,

    mixins: [ BaseItemPicker ],

    components: {
        ImagePickerItem,
    }
}

import BaseImageInput from './BaseImageInputElement';
export default {

    mixins: [ BaseImageInput ],

    template: `
    <div>
        <div style="padding-bottom: 100%"
            @click="open"
            :style="{
                'background-image': selectedImage ? 'url(' + selectedImage.url + ')' : '',
                'background-size':'contain',
                'background-position':'center',
                'background-repeat': 'no-repeat',
                'background-color': '#ccc',
                'cursor':'pointer',
            }"></div>
        <div class="has-text-centered">
            <a @click.prevent="selectImage(null)" class="button is-fullwidth is-warning" href="#">Remove image</a>
        </div>
        <image-picker :url="url"
            :adaptor="adaptor"
            :selected="selectedImage"
            @confirm="selectImage"
            ref="imagePicker"></image-picker>
        <input type="hidden" :name="name" :value="selectedImage ? valueAdaptor( selectedImage ) : ''">
    </div>
    `,
}

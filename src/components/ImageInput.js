import BaseImageInput from './BaseImageInput';
export default {

    mixins: [ BaseImageInput ],

    template: `
        <image-input-element :url="url" v-if="!multiple" :value="value" :adaptor="imagesAdaptor" :name="name" :value-adaptor="valueAdaptor"></image-input-element>
        <div v-else class="columns is-mobile is-multiline">
            <div v-for="( value, index ) in values_" :key="value.url" class="column is-2">
                <image-input-element
                    :url="url"
                    @image-removed="removeImage( index )"
                    :value="value"
                    :images-adaptor="imagesAdaptor"
                    :name="name + '[]'"
                    :value-adaptor="valueAdaptor"
                ></image-input-element>
            </div>
            <div class="column is-2">
                <div style="padding-bottom: 100%"
                    @click="addImage"
                    :style="{
                        'background-size':'contain',
                        'background-position':'center',
                        'background-repeat': 'no-repeat',
                        'background-color': '#666',
                        'cursor':'pointer',
                    }"></div>
            </div>
        </div>
    `,
}

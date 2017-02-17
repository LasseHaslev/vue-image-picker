import { Dropzone } from '@lassehaslev/vue-dropzone';
import ImagePicker from '../index';
export default {
    template: `
        <div>
            <section class="section">
                <div class="container">
                    <h3 class="title is-2">
                        Dropzoned image picker
                    </h3>
                    <h4 class="subtitle is-4">Image picker with posibility to upload new images</h4>
                    <br>

                </div>
            </section>
            <section class="hero is-light">
                <div class="hero-body">
                    <div class="columns is-mobile">
                        <div class="column is-2 is-offset-5">
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
                        </div>
                    </div>

                    <div class="has-text-centered">
                        <a @click="open" class="button is-primary is-large" href="#">Open image picker</a>
                    </div>
                    <image-picker url="http://localhost:1337/api/images"
                    :adaptor="imagesAdaptor"
                    :selected="selectedImage"
                    @confirm="selectImage"
                    ref="imagePicker">
    <dropzone url="http://localhost:1337/api/images" @upload="onUpload" @state-change="onStateChanged" name="image">
        <div class="hero" :class="[ isHover ? 'is-warning' : 'is-info' ]">
            <div class="hero-body has-text-centered"><span class="icon"><i class="fa fa-cloud-upload"></i></span> Drop files here to upload</div>
        </div>
    </dropzone>
                    </image-picker>
                </div>
            </section>
        </div>
    `,

    data() {
        return{

            selectedImage: null,

            isHover: false,

        }
    },

    methods: {
        open() {
            this.$refs.imagePicker.open();
        },
        imagesAdaptor( images ) {
            return images.data;
        },
        selectImage( image ) {
            this.selectedImage = image;
        },

        onStateChanged( state ) {
            this.isHover = state;
        },
        onUpload( response ) {
            this.$refs.imagePicker.add( response.data );
        },
    },

    components: {
        ImagePicker,
        Dropzone,
    }
}

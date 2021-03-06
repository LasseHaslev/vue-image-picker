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
                    :dropzone="true"
                    ref="imagePicker">
                    </image-picker>
                </div>
            </section>
        </div>
    `,

    data() {
        return{

            selectedImage: null,
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
            this.$refs.imagePicker.uploaded( response.data );
        },
    },

    components: {
        ImagePicker,
    }
}

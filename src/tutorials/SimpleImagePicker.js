import ImagePicker from '../index';
export default {
    template: `
        <div>
            <section class="section">
                <div class="container">
                    <h3 class="title is-2">
                        Image picker
                    </h3>
                    <h4 class="subtitle is-4">Open a image picker</h4>
        <p>We have created a image picker with the logic of the @lassehaslev/vue-item-picker</p>

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
                    <image-picker url="https://jsonplaceholder.typicode.com/photos?limit=10"
                    :adaptor="imageAdaptor"
                    :selected="selectedImage"
                    @confirm="selectImage"
                    ref="imagePicker"></image-picker>
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
        imageAdaptor( images ) {
            // return images;
            return images.slice( 0, 20 );
        },
        selectImage( image ) {
            this.selectedImage = image;
        }
    },

    components: {
        ImagePicker,
    }
}

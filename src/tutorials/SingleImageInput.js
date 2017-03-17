import { ImageInput } from '../index';
console.log(ImageInput);
export default {
    template: `
        <div>
            <section class="section">
                <div class="container">
                    <h3 class="title is-2">Single image input</h3>
                    <h4 class="subtitle is-4">Open a image picker</h4>
                    <p>We have created a image picker with the logic of the @lassehaslev/vue-item-picker</p>
                </div>
            </section>
            <section class="hero is-light">
                <div class="hero-body">
                    <div class="columns is-mobile">
                        <div class="column is-2 is-offset-5">
                            <image-input name="image" :adaptor="imageAdaptor" :value-adaptor="valueAdaptor"></image-input>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    `,

    methods: {
        imageAdaptor( images ) {
            // return images;
            return images.slice( 0, 20 );
        },
        valueAdaptor( value ) {
            return value.id;
        }
    },

    components: {
        ImageInput,
    }
}

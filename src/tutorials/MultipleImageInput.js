import { ImageInput } from '../index';
export default {
    template: `
        <div>
            <section class="section">
                <div class="container">
                    <h3 class="title is-2">Multiple image input</h3>
                    <h4 class="subtitle is-4">Open a image picker</h4>
                    <p>We have created a image picker with the logic of the @lassehaslev/vue-item-picker</p>
                </div>
            </section>
            <section class="hero is-light">
                <div class="hero-body">
                    <div class="container">
                        <image-input :multiple="true" url="https://jsonplaceholder.typicode.com/photos?limit=10" :values="images" name="images" :adaptor="imageAdaptor" :value-adaptor="valueAdaptor"></image-input>
                    </div>
                </div>
            </section>
        </div>
    `,

    data() {
        return {
            images: [
                {
                    id: 10,
                    thumbnailUrl: "http://placehold.it/150/92c952",
                    title: "accusamus beatae ad facilis cum similique qui sunt",
                    url: "http://placehold.it/600/92c952",
                },
                {
                    id: 20,
                    thumbnailUrl: "http://placehold.it/150/920000",
                    title: "accusamus beatae ad facilis cum similique qui sunt",
                    url: "http://placehold.it/600/920000",
                },
            ]
        }
    },

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

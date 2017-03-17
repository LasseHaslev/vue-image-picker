<template>
    <div id="app">
        <section class="section">
            <div class="container">
                <h3 class="title is-1">
                    <a href="https://github.com/LasseHaslev/vue-item-input">
                        @lassehaslev/vue-item-input
                    </a>
                </h3>
            </div>
        </section>

            <single-image-input></single-image-input>

            <div class="hero is-primary">
                <div class="hero-body">
                    <div class="container is-fluid">
                    </div>
                </div>
            </div>
    </div>
</template>

<script>
import SingleImageInput from './tutorials/SingleImageInput';
export default {
    name: 'app',
    data () {
        return {
        }
    },
    components: {
        SingleImageInput,
    }
}
</script>

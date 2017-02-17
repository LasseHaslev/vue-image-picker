import { BaseItemPickerItem } from '@lassehaslev/vue-item-picker';
export default {
    template: `
        <div class="column is-3">
            <div v-if="adaptoredItem.url"
                style="padding-bottom: 100%"
                @dblclick.prevent="confirm"
                @click="select"
                :style="{
                    'background-image': 'url(' + adaptoredItem.url + ')',
                    'background-size':'contain',
                    'background-position':'center',
                    'background-repeat': 'no-repeat',
                    'background-color': '#ccc',
                    'cursor':'pointer',
                    'outline': isSelected ? '5px solid #0762D9' : '',
            }">
            </div>
        </div>
    `,

    mixins: [ BaseItemPickerItem ],

    props: {
        'show-adaptor': {
            type: Function,
            default( item ) {
                return item;
            },
        }
    },

    computed: {
        adaptoredItem() {
            return this.showAdaptor( this.item );
        }
    }
}

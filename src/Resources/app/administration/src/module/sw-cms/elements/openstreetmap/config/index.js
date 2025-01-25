import template from './sw-cms-el-config-openstreetmap.html.twig';
import './sw-cms-el-config-openstreetmap.scss';

Shopware.Component.register('sw-cms-el-config-openstreetmap', {
    template,

    mixins: [
        'cms-element'
    ],

    computed: {
        longitude: {
            get() {
                return this.element.config.longitude.value;
            },

            set(value) {
                this.element.config.longitude.value = value;
            }
        },
        latitude: {
            get() {
                return this.element.config.latitude.value;
            },

            set(value) {
                this.element.config.latitude.value = value;
            }
        },
        zoom: {
            get() {
                return this.element.config.zoom.value;
            },

            set(value) {
                this.element.config.zoom.value = value;
            }
        },
        name: {
            get() {
                return this.element.config.name.value;
            },

            set(value) {
                this.element.config.name.value = value;
            }
        },
        street: {
            get() {
                return this.element.config.street.value;
            },

            set(value) {
                this.element.config.street.value = value;
            }
        },
        city: {
            get() {
                return this.element.config.city.value;
            },

            set(value) {
                this.element.config.city.value = value;
            }
        },
        logo: {
            get() {
                return this.element.config.logo.value;
            },

            set(value) {
                this.element.config.logo.value = value;
            }
        }
    },

    created() {
        this.createdComponent();
    },

    methods: {
        createdComponent() {
            this.initElementConfig('openstreetmap');
        },

        onElementUpdate(key, value) {
            if (this.element.config[key]) {
                this.element.config[key].value = value;
            }
    
            this.$emit('element-update', this.element);
        }
    }
});
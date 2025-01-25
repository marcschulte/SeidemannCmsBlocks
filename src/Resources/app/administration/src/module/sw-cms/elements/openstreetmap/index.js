import './component';
import './config';
import './preview';

Shopware.Service('cmsService').registerCmsElement({
    name: 'openstreetmap',
    label: 'sweb-cms-blocks.elements.customOpenStreetMapElement.label',
    component: 'sw-cms-el-openstreetmap',
    configComponent: 'sw-cms-el-config-openstreetmap',
    previewComponent: 'sw-cms-el-preview-openstreetmap',
    defaultConfig: {
        latitude: {
           source: 'static',
            value: 48.487671
        },
        longitude: {
            source: 'static',
            value: 9.220115
        },
        zoom: {
            source: 'static',
            value: 11
        },
        name: {
            source: 'static',
            value: 'Seidemann Web GmbH'
        },
        street: {
            source: 'static',
            value: 'Albstra&szlig;e 52'
        },
        city: {
            source: 'static',
            value: '72764 Reutlingen'
        },
        logo: {
            source: 'static',
            value: 'https://seidemann.com/_Resources/Persistent/c/a/b/c/cabcf66af29f711fffa1d97769c64ec502d38896/Logo%20Seidemann%20Web-2560x560.jpg'
        }
    }
});
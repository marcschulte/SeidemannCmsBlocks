const PluginManager = window.PluginManager;

PluginManager.register('SwebOpenstreetmap', () => import('./sweb-openstreetmap/sweb-openstreetmap.plugin'), '[data-sweb-openstreetmap]');
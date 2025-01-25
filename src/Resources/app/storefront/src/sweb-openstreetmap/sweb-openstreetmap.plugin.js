const { PluginBaseClass } = window;

export default class SwebOpenstreetmap extends PluginBaseClass {
    init() {
        const mapData = this.el.getAttribute('data-sweb-openstreetmap');
        
        this._displayMap(JSON.parse(mapData));
    }

    _displayMap(mapData) {
        var layer_mapnik;
        var layer_markers;

        var popuptext = `
            <font color="black">
                <b>${mapData.name.value}</b><br>
                ${mapData.street.value}<br>
                ${mapData.city.value}<br>
                <img src="${mapData.logo.value}">
            </font>
        `;

        OpenLayers.Lang.setCode('de');
        
        var lon = parseFloat(mapData.longitude.value);
        var lat = parseFloat(mapData.latitude.value);

        var zoom = mapData.zoom.value;

        this.map = new OpenLayers.Map('map', {
            projection: new OpenLayers.Projection("EPSG:900913"),
            displayProjection: new OpenLayers.Projection("EPSG:4326"),
            controls: [
                new OpenLayers.Control.Navigation(),
                new OpenLayers.Control.LayerSwitcher(),
                new OpenLayers.Control.PanZoomBar()],
            maxExtent:
                new OpenLayers.Bounds(-20037508.34,-20037508.34,
                                        20037508.34, 20037508.34),
            numZoomLevels: 18,
            maxResolution: 156543,
            units: 'meters'
        });

        layer_mapnik = new OpenLayers.Layer.OSM.Mapnik("Mapnik");
        layer_markers = new OpenLayers.Layer.Markers("Address", { 
            projection: new OpenLayers.Projection("EPSG:4326"), 
            visibility: true, 
            displayInLayerSwitcher: false 
        });

        this.map.addLayers([layer_mapnik, layer_markers]);
        this._jumpTo(lon, lat, zoom);
    
        this._addMarker(layer_markers, lon, lat, popuptext);
    }

    _jumpTo(lon, lat, zoom) {
        var x = this._lon2Merc(lon);
        var y = this._lat2Merc(lat);
        this.map.setCenter(new OpenLayers.LonLat(x, y), zoom);
        return false;
    }

    _lon2Merc(lon) {
        return 20037508.34 * lon / 180;
    }
    
    _lat2Merc(lat) {
        var PI = 3.14159265358979323846;
        lat = Math.log(Math.tan( (90 + lat) * PI / 360)) / (PI / 180);
        return 20037508.34 * lat / 180;
    }
    
    _addMarker(layer, lon, lat, popupContentHTML) {
        var ll = new OpenLayers.LonLat(this._lon2Merc(lon), this._lat2Merc(lat));
        var feature = new OpenLayers.Feature(layer, ll); 
        feature.closeBox = true;
        feature.popupClass = OpenLayers.Class(OpenLayers.Popup.FramedCloud, {minSize: new OpenLayers.Size(300, 180) } );
        feature.data.popupContentHTML = popupContentHTML;
        feature.data.overflow = "hidden";
                
        var marker = new OpenLayers.Marker(ll);
        marker.feature = feature;
    
        var markerClick = function(evt) {
            if (this.popup == null) {
                this.popup = this.createPopup(this.closeBox);
                this.map.addPopup(this.popup);
                this.popup.show();
            } else {
                this.popup.toggle();
            }
            OpenLayers.Event.stop(evt);
        };
        marker.events.register("mousedown", feature, markerClick);
    
        layer.addMarker(marker);
        this.map.addPopup(feature.createPopup(feature.closeBox));
    }
}
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["sweb-openstreetmap.plugin"],{715:(e,a,n)=>{n.r(a),n.d(a,{default:()=>t});let{PluginBaseClass:s}=window;class t extends s{init(){let e=this.el.getAttribute("data-sweb-openstreetmap");this._displayMap(JSON.parse(e))}_displayMap(e){console.log("displayMap"),console.log("displayMap",e),OpenLayers.Lang.setCode("de");var a,n,s,t=e.longitude.value,r=e.latitude.value,o=e.zoom.value;a=new OpenLayers.Map("map",{projection:new OpenLayers.Projection("EPSG:900913"),displayProjection:new OpenLayers.Projection("EPSG:4326"),controls:[new OpenLayers.Control.Navigation,new OpenLayers.Control.LayerSwitcher,new OpenLayers.Control.PanZoomBar],maxExtent:new OpenLayers.Bounds(-20037508.34,-20037508.34,20037508.34,20037508.34),numZoomLevels:18,maxResolution:156543,units:"meters"}),n=new OpenLayers.Layer.OSM.Mapnik("Mapnik"),s=new OpenLayers.Layer.Markers("Address",{projection:new OpenLayers.Projection("EPSG:4326"),visibility:!0,displayInLayerSwitcher:!1}),a.addLayers([n,s]),jumpTo(t,r,o),addMarker(s,e.longitude.value,e.latitude.value,'<font color="black"><b>Thomas Heiles<br>Stra&szlig;e 123<br>54290 Trier</b><p><img src="test.jpg" width="180" height="113"></p></font>')}}}}]);
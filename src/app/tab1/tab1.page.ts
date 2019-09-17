declare var L: any;

import { Component } from '@angular/core';
import { Map, latLng, tileLayer, Layer, marker } from 'leaflet';
import L from 'leaflet/dist/leaflet';
import 'leaflet-routing-machine';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  map: Map;

  ionViewDidEnter() { this.leafletMap(); }

  leafletMap() {
    // In setView add latLng and zoom
    this.map = new Map('mapId').setView([50.872914499008225, 4.415795803070068], 16);
    tileLayer('http://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}').addTo(this.map);

    marker([50.872914499008225, 4.415795803070068]).addTo(this.map)
          .bindPopup('<b>OneBill Global.</b><br /><br />┏(＾0＾)┛┗(＾0＾) ┓')
          .openPopup();

    L.Routing.control({
      waypoints: [
        L.latLng(50.872914499008225, 4.415795803070068),
        L.latLng(51.2247134, 4.4330142)
      ]
    }).addTo(this.map);

  }

  /** Remove map when we have multiple map object */
  ionViewWillLeave() {
    this.map.remove();
  }
}

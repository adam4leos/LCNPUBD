import React, { Component } from 'react'
import { Map, Marker, Popup, TileLayer } from 'react-leaflet'
import L from 'leaflet'
import icon from '../assets/images/marker-icon.png'

export const pointerIcon = new L.Icon({
    iconUrl: icon,
    iconSize:    [25, 41],
    iconAnchor:  [12, 41],
    popupAnchor: [1, -34],
    tooltipAnchor: [16, -28],
    shadowSize:  [41, 41]
});

export default class LeafletMap extends Component {
  state = {
    lat: 49.837291,
    lng: 24.043328,
    zoom: 13,
  };

  render() {
    const position = [this.state.lat, this.state.lng];

    return (
      <Map center={position} zoom={this.state.zoom}>
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position} icon={pointerIcon}>
          <Popup>
            Вулиця Пекарська, 41, Львів, Львівська область, 79000
          </Popup>
        </Marker>
      </Map>
    )
  }
}

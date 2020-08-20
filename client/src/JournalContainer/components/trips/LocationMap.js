import React from "react";
import { Map, TileLayer } from "react-leaflet";

const LocationMap = ({position}) => {
  return (
    <div className="leaflet-container">
      <Map center={position} zoom={12}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
      </Map>
    </div>
  )
}

export default LocationMap;

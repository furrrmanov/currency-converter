import React from 'react'
import { useSelector } from 'react-redux'

import L from 'leaflet'
import { Map, TileLayer, Marker } from 'react-leaflet'

import { iconUrl } from '@/utils/mapMarkerIconUrl'

import { MapWrapper } from './styles'

const myIcon = L.icon(iconUrl)


export default function WorldMap() {
  const position = useSelector(
    (state) => state.directory.selectedCountry.coordinates
  )

  return (
    <MapWrapper className="map">
      <Map
        className="leaflet-map"
        center={position}
        zoom={6}>
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position} icon={myIcon}></Marker>
      </Map>
    </MapWrapper>
  )
}

import React, { useState } from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import './leaflet.css'

const TrainsOnMap = ({ trains }) => {

    const [center, setCenter] = useState({ lat: 60.1738483, lng: 24.9253346 })
    const ZOOM_LEVEL = 14
    return (
        <div>
            <div id='map'>
                <MapContainer center={center} zoom={ZOOM_LEVEL} >
                    <TileLayer url={'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'} attribution={'<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'} />
                    {trains.map(train =>
                        <Marker position={{ lat: train.coordinates[0], lng: train.coordinates[1] }} key={train.id}>
                            <Popup>Train: {train.name} <br /> Destination: {train.destination} <br /> Speed: {train.speed} km/h</Popup>
                        </Marker>
                    )}
                </MapContainer>
            </div>
        </div>
    )
}

export default TrainsOnMap
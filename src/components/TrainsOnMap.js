//Component handles showing trains and their information on map
//Using openstreetmap 

import React, { useState } from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import './leaflet.css'

const TrainsOnMap = ({ trains }) => {

    //Setting the center of the map
    const [center, setCenter] = useState({ lat: 60.1738483, lng: 24.9253346 })
    
    //Showing the map box and marking trains with marker and including their information there
    return (
        <div>
            <div id='map'>
                <MapContainer center={center} zoom='10' >
                    <TileLayer url={'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'} attribution={'&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'} />
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
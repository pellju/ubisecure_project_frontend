//Component is about showing trains and their information as a HTML-table
import React from "react"

const TrainList = ({ trains }) => {

    return (
        <div>
            <center>
                <h1>Trains:</h1>
                <table>
                    <thead>
                        <tr>
                            <th>Name: </th>
                            <th>Destination: </th>
                            <th>Speed: </th>
                            <th>Coordinates: </th>
                        </tr>
                    </thead>
                    <tbody>
                        {trains.map(train =>
                            <tr key={train.id}>
                                <td>{train.name}</td>
                                <td>{train.destination}</td>
                                <td>{train.speed}</td>
                                <td>{train.coordinates[0]}, {train.coordinates[1]}</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </center>
        </div>
    )
}

export default TrainList
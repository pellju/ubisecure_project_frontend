//Component is about listing trains
import React, {useEffect, useState} from "react"
import trainservice from "../services/trainservice"

const TrainList = () => {

    const [trains, setTrains] = useState([])

    useEffect(() => {
        const timeOutedInterval = setInterval(() => {
            trainservice.getTrainData().then(trainList => {
                setTrains(trainList)
                console.log(trains)
            })
        }, 1000)
        return () => clearInterval(timeOutedInterval)

    })

    return (
        <div>
            <h2>Trains:</h2>
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
        </div>
    )
}

export default TrainList
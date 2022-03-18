//Trainservice handles the connection between backend and frontend, basically gets the train data to the frontend
import axios from 'axios'

const getTrainData = async() => {
    const response = await axios.get('http://localhost:3001/trains')
    return response.data
}

export default { getTrainData }
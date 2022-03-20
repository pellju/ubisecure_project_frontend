//The backbone of frontend of the application

//Importing components and dependencies used in the frontend
import React, { useState, useEffect } from "react"

import userservice from "./services/userservice"
import Registration from "./components/Registration"
import Login from "./components/Login"
import ShowData from "./components/AfterLogin"
import TrainList from "./components/Trains"
import TrainsOnMap from "./components/TrainsOnMap"
import Message from "./components/Message"

//Websocket server
const ws = new WebSocket('ws://localhost:8082')

//The frontend application
function App() {
  //Initializing useStates for login/registration and trains
  //Using different values for registration fields to not showing the same input on login-fields
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [registrationUsername, setRegistrationUsername] = useState('')
  const [registrationPassword, setRegistrationPassword] = useState('')
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [user, setUser] = useState(null)
  const [trains, setTrains] = useState([])
  const [message, setMessage] = useState('')

  //Getting trains using websocket, updating trains everytime something happens 
  useEffect(() => {
    ws.onmessage = function(data) {
      setTrains(JSON.parse(data.data))
    }
    //
    return () => ws.onmessage = null
  }, [])

  //Registration handler
  //ToDo: an error message if fails / succeedes
  const handleRegistration = async (event) => {
    event.preventDefault()

    try {
      await userservice.register({ username: registrationUsername, password: registrationPassword, name, email })
      setRegistrationUsername('')
      setRegistrationPassword('')
      setName('')
      setEmail('')
      setMessage('Registration done successfully')
    } catch (e) {
      setMessage(e.response.data.error)
      setRegistrationUsername('')
      setRegistrationPassword('')
      setName('')
      setEmail('')
    }
  }

  //Login handler
  //ToDo: an error message if fails
  const handleLogin = async (event) => {
    event.preventDefault()

    try {
      const userData = await userservice.login({ username, password })
      setUser(userData)
      setUsername('')
      setPassword('')
    } catch (e) {
      setMessage(e.response.data.error)
      setUsername('')
      setPassword('')
    }
  }

  //Checking if the user has logged in
  //If not logged in, showing registration and login forms
  //If logged in, showing personal data and train data
  if (user === null) {
    return (
      <div className="App">
        <Message message={message} />
        <h1>Registration:</h1>
        <Registration username={registrationUsername} setUsername={setRegistrationUsername} password={registrationPassword} setPassword={setRegistrationPassword} email={email} setEmail={setEmail} name={name} setName={setName} handleRegistration={handleRegistration} /> 
        <h1>Login:</h1>
        <Login username={username} setUsername={setUsername} password={password} setPassword={setPassword} handleLogin={handleLogin} />
      </div>
    );
  } else {
    return (
      <div>
        <ShowData user={user} />
        <br />
        <TrainList trains={trains} />
        <br />
        <TrainsOnMap trains={trains} />
      </div>
    );
  }  
}

export default App;

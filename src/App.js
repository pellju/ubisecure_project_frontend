import React, {useState} from "react"

import userservice from "./services/userservice"
import Registration from "./compnents/Registration"
import Login from "./compnents/Login"
import ShowData from "./compnents/AfterLogin"

function App() {

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [user, setUser] = useState(null)

  const handleRegistration = async (event) => {
    event.preventDefault()

    try {
      await userservice.register({ username, password, name, email })
      setUsername('')
      setPassword('')
      setName('')
      setEmail('')
      console.log('Registration done successfully!')
    } catch (e) {
      console.log('Error occured while registration: ', e)
    }
  }

  const handleLogin = async (event) => {
    event.preventDefault()

    try {
      const userData = await userservice.login({ username, password })
      setUser(userData)
      setUsername('')
      setPassword('')
      console.log('Logging in successfully!')
    } catch (e) {
      console.log('Error occured while logging in: ', e)
    }
  }

  if (user === null) {
    return (
      <div className="App">
        <h1>Registration:</h1>
        <Registration username={username} setUsername={setUsername} password={password} setPassword={setPassword} email={email} setEmail={setEmail} name={name} setName={setName} handleRegistration={handleRegistration} /> 
        <h1>Login:</h1>
        <Login username={username} setUsername={setUsername} password={password} setPassword={setPassword} handleLogin={handleLogin} />
      </div>
    );
  } else {
    return (
      <div>
        <ShowData user={user} />
      </div>
    );
  }

  
}

export default App;

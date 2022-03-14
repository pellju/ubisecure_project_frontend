import React from "react"

const Registration = ({ username, setUsername, password, setPassword, email, setEmail, name, setName, handleRegistration }) => {
    return (
      <div>
        <form onSubmit={handleRegistration}>
        <div>
            Username:
            <input type='text' value={username} name='Username' id='Username' onChange={({target}) => setUsername(target.value)} /> 
          </div>
          <div>
            Name:
            <input type='text' value={name} name='Name' id='Name' onChange={({target}) => setName(target.value)} /> 
          </div>
          <div>
            Email:
            <input type='text' value={email} name='Email' id='Email' onChange={({target}) => setEmail(target.value)} /> 
          </div>
          <div>
            Password:
            <input type='password' vaLogging inlue={password} name='Password' id='Password' onChange={({target}) => setPassword(target.value)} /> 
          </div>
          <button type='submit'>Register</button>
        </form>
      </div>
    )
}

export default Registration
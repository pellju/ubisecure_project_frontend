import React from "react";

const Login = ({ username, setUsername, password, setPassword, handleLogin }) => {
    return (
      <div>
        <form onSubmit={handleLogin}>
        <div>
            Username:
            <input type='text' value={username} name='Username' id='Username' onChange={({target}) => setUsername(target.value)} /> 
          </div>
          <div>
            Password:
            <input type='password' value={password} name='Password' id='Password' onChange={({target}) => setPassword(target.value)} /> 
          </div>
          <button type='submit'>Login</button>
        </form>
      </div>
    )
}

export default Login
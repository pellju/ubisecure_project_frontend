import React from "react";

const Login = ({ username, setUsername, password, setPassword, handleLogin }) => {
    return (
      <div>
        <form onSubmit={handleLogin}>
        <div>
            Username:
            <input type='text' value={username} name='LoginUsername' id='LoginUsername' onChange={({target}) => setUsername(target.value)} /> 
          </div>
          <div>
            Password:
            <input type='password' value={password} name='LoginPassword' id='LoginPassword' onChange={({target}) => setPassword(target.value)} /> 
          </div>
          <button type='submit'>Login</button>
        </form>
      </div>
    )
}

export default Login
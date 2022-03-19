//Component is related to showing the user data

import React from "react";

const ShowData = ({ user }) => {

    return (
        <div>
            <center><h1>User data:</h1></center>
            <center>Username: {user.username}</center>
            <center>Name: {user.name}</center>
            <center>Email: {user.email}</center>
      </div>
    )
}

export default ShowData
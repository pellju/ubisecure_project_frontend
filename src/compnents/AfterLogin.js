//Component is about showing the user data and showing the train locations

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
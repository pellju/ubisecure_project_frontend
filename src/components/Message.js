//Component is related to showing (error) messages when registering or logging in

import React from "react";

const Message = ({ message }) => {
    
    if (!message) {
        return (
            <div></div>
        )
    } else {
        return (
            <div>
                <b>Error: {message}</b>
            </div>
        )
    }
}

export default Message
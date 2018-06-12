import React, { Component } from 'react'

//stateless functional componenent, simpler than making an entire class component
const ChatHeader = () => {
    return(
        <div className="ChatHeader">
            <div className ="roomInfo">
                <h2>#general</h2>
                <p>Announcements and general chat</p>
            </div>
        </div>
    )
}



export default ChatHeader
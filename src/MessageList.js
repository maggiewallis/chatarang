import React, { Component } from 'react'


const MessageList = () => {
    const messages = [
        { id: 1, userName: 'dstrus', body: 'Chatting up a storm, yo!'},
        { id: 2, userName: 'dpalazzo', bosy: 'This guy is so annoying. I hate my job.'},
    ]
    
    return (
        <div className = 'MessageList'>
            { messages.map(message => (
                <div key={message.id}>
                    {message.userName}: {message.body} 
                </div>
            ))
            
            }
        </div>
    )
}

export default MessageList
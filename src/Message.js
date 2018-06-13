import React from 'react'

const Message = (props) => {
  return (
    <div className="Message" style = {styles.message}>
       <div
            className="Avatar"
            style= {styles.avatarPhoto}
          ></div>
          <div className="details" style = {styles.details}>
            <div className="Metadata" style = {styles.metadata}>
              <div className="user" style = {styles.user}>{props.message.userName}</div>
              <div className="time" style = {styles.time}>1:10 PM</div>
            </div>
            <div className="body">
              {props.message.body}
            </div>
          </div>
    </div>
  )
}

export default Message


const styles = {

  message: {
    display: "flex",
    marginTop: "1rem",
    padding: "0 1rem",
  },

  details: {
    flex: "1",
    paddingLeft: "0.5rem",
  },

  metadata: {
    display: "flex",
    alignItems: "baseline",
  },
  
  user: {
    fontWeight: "bold",
    marginRight: "0.5rem",
  },
  
  time: {
    color: "#999",
    fontSize: "0.8rem",
  },

  avatarPhoto: {
    width: "40px",
    height: "40px",
    backgroundImage: "url(https://api.adorable.io/avatars/285/bob@adorable.io)",
    backgroundSize: "cover",
    borderRadius: "20px",
},
}
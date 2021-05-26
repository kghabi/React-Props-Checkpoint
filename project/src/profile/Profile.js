import React from 'react'
import '../App.css'
const Profile = (props) => {
  
    return (
        <div>
        
        <p style={{textAlign:'justify', color: 'green', fontFamily:'cursive'}}> {props.fullName} <br/> {props.profession} <br/> {props.Bio}</p>
        <div  className="img">{props.children}</div>
        </div>
        
        
    )
}

export default Profile

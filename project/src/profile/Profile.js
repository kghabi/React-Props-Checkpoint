import React from 'react'
import '../App.css'
const Profile = (props) => {
  
    return (
        <div>
        <div  className="img">  {props.children}</div> 
        <p style={{textAlign:'justify', color: 'green', fontFamily:'cursive'}}> Nom Prenom: {props.fullName} <br/> Profession: {props.profession} <br/>Bio: {props.Bio}</p>
        
        </div>
        
        
    )
}

export default Profile

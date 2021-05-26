import React from 'react'

const HandleName = (props) => {
    return (
        <div>
            <button style={{color:'red', backgroundColor:'pink'}} onClick={() => props.alertMyInput("Ghabi Karim")}>
     ClickMe
   </button>
        </div>
    )
}

export default HandleName

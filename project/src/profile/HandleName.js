import React from 'react'

const HandleName = (props) => {
    return (
        <div>
            <button style={{color:'red', backgroundColor:'pink'}} onClick={() => props.alertMyInput(props.fullName)}>
     ClickMe
   </button>
        </div>
    )
}

export default HandleName

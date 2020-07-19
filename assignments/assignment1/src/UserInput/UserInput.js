import React from 'react';
import './UserInput.css'

const UserInput = (props) => {
    return (
      <input 
        className="UserInput"
        onChange={props.changed}
        value={props.currentname}/>
    )
}

export default UserInput
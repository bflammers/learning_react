import React from 'react';

const UserOutput = (props) => {

    const style = {
        width: '20%',
        margin: '16px auto',
        border: '1px solid #eee',
        'box-shadow': '2px 2px 3px #ccc',
        padding: '8px'
    };

    return (
      <div className="UserOutput" style={style}>
        <p>Hallo</p>
        <p>{props.username}</p>
      </div>
    )
  }

export default UserOutput
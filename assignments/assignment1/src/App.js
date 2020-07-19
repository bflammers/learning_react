import React, { useState } from 'react';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

function App() {

  const [userNameState, setUserNameState] = useState({
    users: [
      {username: 'bartlammers'}, 
      {username: 'mettevisser'}
    ]
  })

  const userNameChangedHandler = (event) => {
    setUserNameState({
      users: [
        {username: event.target.value}, 
        {username: 'mcvisser'}
      ]
    })
  }

  return (
    <div className="App">
      <UserInput 
        changed={userNameChangedHandler} 
        currentname={userNameState.users[0].username}/>
      <UserOutput 
        username='bflammers'/>
      <UserOutput 
        username={userNameState.users[0].username}/>
      <UserOutput 
        username={userNameState.users[1].username}/>
    </div>
  );
}

export default App;

import React, { useState } from 'react';
import ValidationComponent from './ValidationComponent/ValidationComponent'
import CharComponent from './CharComponent/CharComponent'


function App() {

  const [textState, setTextState] = useState({
    text: '1234567890'
  })

  const textChangeHandler = (event) => {
    setTextState({
      text: event.target.value
    })
  }

  const delCharHandler = (index) => {
    // const newText = textState.text.slice(0, index) + textState.text.slice(index + 1);
    const textArray = textState.text.split('')
    textArray.splice(index, 1)
    const newText = textArray.join('')
    setTextState({
      text: newText
    })
  }

  const style = {
    width: '80%',
    margin: 'auto',
    cursor: 'pointer'
  };

  return (
    <div style={style}>
      <input
        type='text'
        value={textState.text}
        onChange={textChangeHandler}/>
      <p>Text length: {textState.text.length}</p>
      <ValidationComponent 
        textLength={textState.text.length}/>
      {textState.text.split('').map((letter, index) => {
        return (
          <CharComponent
            letter={letter}
            key={index}
            click={() => delCharHandler(index)}/>
        )
      })}
    </div>
  );
}

export default App;

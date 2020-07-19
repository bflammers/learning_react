import React, { useState, useCallback } from 'react';

import classes from './App.module.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit'

const App = (props) => {

  const [showPersonsState, setShowPersonsState] = useState({
    showPersons: true
  })

  const [personsState, setPersonsState] = useState({
    persons: [
      { id: 1, name: 'Bart', age: 27, hobbies: 'Sport'},
      { id: 2, name: 'Mette', age: 29, hobbies: 'Netflix (C series)'},
      { id: 3, name: 'Kato', age: '7 months', hobbies: 'Dada tppfff da taaa'}
    ]
  });

  const nameChangedHandler = (event, id) => {
    const personIndex = personsState.persons.findIndex(p => p.id === id)
    const person = {...personsState.persons[personIndex]}
    person.name = event.target.value 
    const persons = [...personsState.persons]
    persons[personIndex] = person
    setPersonsState({persons: persons})
  }
  
  const togglePersonsHandler = useCallback(() => {
    const currentShowPersons = showPersonsState.showPersons
    setShowPersonsState({
      showPersons: !currentShowPersons
    })
  }, [showPersonsState.showPersons])
  
  const deletePersonHandler = (index) => {
    const persons = [...personsState.persons]
    persons.splice(index, 1)
    setPersonsState({persons: persons})
  }

  return (
    <div className={classes.App}>
      <Cockpit
        title={props.appTitle}
        personsLength={personsState.persons.length}
        toggle={togglePersonsHandler}
        showPersons={showPersonsState.showPersons}/>
      <Persons
        showPersons={showPersonsState.showPersons}
        persons={personsState.persons}
        clicked={deletePersonHandler}
        changed={nameChangedHandler}/>
    </div>
  );
} 

export default App;
 
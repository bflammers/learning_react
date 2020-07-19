import React from 'react';
import Person from './Person/Person'

const Persons = (props) => {

    let persons = null;

    if (props.showPersons) {

      persons = (
        <div>
          {props.persons.map((person, index) => {
            return (
              <Person 
                click={() => props.clicked(index)}
                name={person.name} 
                age={person.age}
                changed={(event) => props.changed(event, person.id)} 
                hobbies={person.hobbies}
                key={person.id}/>
            )
            })}
        </div>
      );
      
    }
    return persons
  }

export default Persons
import React, { Component } from 'react';

import Person from '../components/Person/Person';
import AddPerson from '../components/AddPerson/AddPerson'
import { connect } from 'react-redux'
import * as actionTypes from '../store/actions'

const Persons = props => {
    
    return (
        <div>
            <AddPerson personAdded={props.personAddedHandler} />
            {props.persons.map(person => (
                <Person 
                    key={person.id}
                    name={person.name} 
                    age={person.age} 
                    clicked={() => props.personDeletedHandler(person.id)}/>
            ))}
        </div>
    );
}

const mapStateToProps = state => {
    return {
        persons: state.persons
    }
}

const mapDispatchToProps = dispatch => {
    return {
        personAddedHandler: () => dispatch({type: actionTypes.ADD_PERSON}),
        personDeletedHandler: (i) => dispatch({type: actionTypes.DEL_PERSON, id: i})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Persons);
import React, { useEffect } from 'react';
import classes from './Cockpit.module.css'

const Cockpit = (props) => {

    const time = new Date()
    console.log('----')

    useEffect(() => {
        console.log(time.getMilliseconds() + ' [Cockpit.js] useEffect function body')
        // console.log(props)
        return(() => {
            console.log(time.getMilliseconds() + ' [Cockpit.js] useEffect clean-up step')
        }) 
    })
    console.log(time.getMilliseconds() + ' [Cockput.js] outside useEffect')

    const subtitleClasses = []
  
    if (props.personsLength <= 2) {
        subtitleClasses.push(classes.red)
    }

    if (props.personsLength <= 1) {
        subtitleClasses.push(classes.bold)
    }

    const buttonClasses = [classes.Button];

    if (props.showPersons) {
        buttonClasses.push(classes.Red)
    }

    return (
        <div>
            <h1>{props.title}</h1>
            <p className={subtitleClasses.join(' ')}>This is really working!</p>
            <button 
                className={buttonClasses.join(' ')}
                onClick={props.toggle}>{props.showPersons ? 'Hide' : 'Show'}
            </button>
        </div>
    )
}

export default React.memo(Cockpit);

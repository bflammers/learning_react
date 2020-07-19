import React from 'react';
import { connect } from 'react-redux'

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

const Counter = props => {

    return (
        <div>
            <CounterOutput value={props.counter} />
            <CounterControl label="Increment" clicked={props.incrementHandler} />
            <CounterControl label="Decrement" clicked={props.decrementHandler}  />
            <CounterControl label="Add 5" clicked={props.addHandler}  />
            <CounterControl label="Subtract 5" clicked={props.subHandler}  />
        </div>
    );
}

const mapStateToProps = state => {
    return {
        counter: state.counter
    }
}

const mapDispatchToProps = dispatch => {
    return {
        incrementHandler: () => dispatch({type: 'INCREMENT'}),
        decrementHandler: () => dispatch({type: 'DECREMENT'}),
        addHandler: () => dispatch({type: 'ADD', value: 5}),
        subHandler: () => dispatch({type: 'SUB', value: 5})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
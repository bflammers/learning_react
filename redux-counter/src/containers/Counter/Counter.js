import React from 'react';
import { connect } from 'react-redux'
import * as actionTypes from '../../store/actions'

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
            <hr/>
            <button onClick={() => props.storeHandler(props.counter)}>Store value</button>
            <ul>
                {props.result_list.map((rl, i) => {
                    return <li key={i} onClick={() => props.delHandler(i)}>{rl}</li>
                })}
            </ul>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        counter: state.counter.counter,
        result_list: state.result.result_list
    }
}

const mapDispatchToProps = dispatch => {
    return {
        incrementHandler: () => dispatch({type: actionTypes.INCREMENT}),
        decrementHandler: () => dispatch({type: actionTypes.DECREMENT}),
        addHandler: () => dispatch({type: actionTypes.ADD, value: 5}),
        subHandler: () => dispatch({type: actionTypes.SUB, value: 5}),
        storeHandler: (count) => dispatch({type: actionTypes.STORE, count: count}), 
        delHandler: (i) => dispatch({type: actionTypes.DELETE, index: i})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
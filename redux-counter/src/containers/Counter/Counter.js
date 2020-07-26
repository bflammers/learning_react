import React from 'react';
import { connect } from 'react-redux'
import * as counterActions from '../../store/actions/counter'
import * as resultActions from '../../store/actions/result'

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

const Counter = props => {

    return (
        <div>
            <CounterOutput value={props.counter} />
            <CounterControl label="Increment" clicked={props.incrementHandler} />
            <CounterControl label="Decrement" clicked={props.decrementHandler}  />
            <CounterControl label="Add 5" clicked={props.addHandler}  />
            <CounterControl label="Subtract 5" clicked={props.subtractHandler}  />
            <hr/>
            <button onClick={() => props.storeCountHandler(props.counter)}>Store value</button>
            <ul>
                {props.result_list.map((rl, i) => {
                    return <li key={i} onClick={() => props.deleteCountHandler(i)}>{rl}</li>
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
        incrementHandler: () => dispatch(counterActions.incrementCount()),
        decrementHandler: () => dispatch(counterActions.decrementCount()),
        addHandler: () => dispatch(counterActions.addCount(5)),
        subtractHandler: () => dispatch(counterActions.subtractCount(5)),
        storeCountHandler: (count) => dispatch(resultActions.storeCount(count)), 
        deleteCountHandler: (i) => dispatch(resultActions.deleteCount(i))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
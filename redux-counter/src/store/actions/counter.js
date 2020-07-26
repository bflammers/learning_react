
export const INCREMENT_COUNT = 'INCREMENT_COUNT'
export const DECREMENT_COUNT = 'DECREMENT_COUNT'
export const ADD_COUNT = 'ADD_COUNT'
export const SUBTRACT_COUNT = 'SUBTRACT_COUNT'


export const incrementCount = () => {
    return {
        type: INCREMENT_COUNT
    }
}

export const decrementCount = () => {
    return {
        type: DECREMENT_COUNT
    }
}

export const addCount = (value) => {
    return {
        type: ADD_COUNT,
        value: value
    }
}

export const subtractCount = (value) => {
    return {
        type: SUBTRACT_COUNT,
        value: value
    }
}

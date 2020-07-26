
export const STORE_COUNT = 'STORE_COUNT'
export const DELETE_COUNT = 'DELETE_COUNT'

export const storeCount = (count) => {
    return {
        type: STORE_COUNT,
        count: count
    }
}

export const deleteCount = (index) => {
    return {
        type: DELETE_COUNT, 
        index: index
    }
}


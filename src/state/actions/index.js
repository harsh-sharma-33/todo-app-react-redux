export const add = (val) => {
    return {
        type: 'ADD',
        payload: val,
    }
}

export const remove = (id) => {
    return {
        type: 'REMOVE',
        payload: {
            id,
        },
    }
}

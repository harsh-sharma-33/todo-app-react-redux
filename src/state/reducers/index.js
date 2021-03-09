var lastId = 0

const todoReducer = (state = [], action) => {
    switch (action.type) {
        case 'ADD':
            return [
                ...state,
                {
                    id: ++lastId,
                    todo: action.payload,
                },
            ]

        case 'REMOVE':
            return state.filter((todo) => todo.id !== action.payload.id)
        default:
            return state
    }
}

export default todoReducer

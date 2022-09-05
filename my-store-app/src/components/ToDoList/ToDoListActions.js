export const TOGGLE_TODO = "TOGGLE_TODO"
export const ADD_TODO = "ADD_TODO"
export const DELETE_TODO = "DELETE_TODO"

export const toggleTodo = (value) => {
    return {
        type: TOGGLE_TODO,
        payload: value
    }
}

export const addTodo = (value) => {
    return {
        type: ADD_TODO,
        payload: value
    }
}

export const deleteTodo = (value) => {
    return {
        type: DELETE_TODO,
        payload: value
    }
}
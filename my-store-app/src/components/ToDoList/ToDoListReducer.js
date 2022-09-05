import initialStore from "../../redux-store/initialStore";

import {
    ADD_TODO,
    DELETE_TODO,
    TOGGLE_TODO
} from "./ToDoListActions";

const todoReducer = (todoList = initialStore.todoList, action) => {
    let todoIndex = -1;
    let list;
    let parsList = {}
    switch (action.type) {
        case DELETE_TODO:
            list = [...todoList]
            todoIndex = list.findIndex(({title}) => title === action.payload);
            list.splice(todoIndex, 1)
            localStorage.setItem("todoList", JSON.stringify({list}));

            parsList = JSON.parse(localStorage.getItem("todoList"));
            // console.log("DELETE_TODO = ", parsList.list)
            if (parsList.list !== null && parsList.list !== undefined) {
                return parsList.list;
            } else {
                return list;
            }
        case ADD_TODO:
            list = [...todoList]
            if (action.payload !== "") {
                if (list.findIndex(({title}) => title === action.payload) === -1) {
                    // console.log(action.payload)
                    list.push({checked: false, title: action.payload})
                    localStorage.setItem("todoList", JSON.stringify({list}));
                } else {
                    alert(`You already has task with title: ${action.payload}`)
                }
            }
            return list
        case TOGGLE_TODO:
            list = [...todoList]
            todoIndex = list.findIndex(({title}) => title === action.payload);
            list[todoIndex].checked = !list[todoIndex].checked

            localStorage.setItem("todoList", JSON.stringify({list}));
            parsList = JSON.parse(localStorage.getItem("todoList"));
            // console.log("TOGGLE_TODO = ", parsList.list)

            if (parsList.list !== null && parsList.list !== undefined) {
                return parsList.list;
            } else {
                return list;
            }
        default:
            list = [...todoList]
            parsList = JSON.parse(localStorage.getItem("todoList"));
            // console.log("default parsList.list = ", parsList.list)
            if (parsList.list !== null && parsList.list !== undefined) {
                return parsList.list;
            } else {
                return list;
            }
    }
}

export default todoReducer;
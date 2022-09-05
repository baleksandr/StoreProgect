import {combineReducers} from "redux";
import todoReducer from "../components/ToDoList/ToDoListReducer";


export default combineReducers({
  todoList: todoReducer
},);
import {combineReducers} from "redux";
import todoReducer from "../components/ToDoList/ToDoListReducer";
import authReducer from "../auth/authReduxer";
import basketReducer from "./Actions";


export default combineReducers({
  todoList: todoReducer,
  auth: authReducer,
  basket: basketReducer,
},);
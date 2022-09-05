import {applyMiddleware, compose, createStore} from "redux";
import initialStore from "./initialStore";
import thunk from 'redux-thunk';
import reducer from "./rootReducer";


const store = createStore(
  reducer,
  initialStore,
  compose(
    applyMiddleware(thunk),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store
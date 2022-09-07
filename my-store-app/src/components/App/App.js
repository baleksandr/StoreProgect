import './App.scss';
import React, {Component} from "react";
import {connect} from "react-redux";
import ToDoList from "../ToDoList/ToDoList";
import Store from "../StoreComponent/Store";
import AppRoutes from "../../routes/appRoutes";

class App extends Component {

  render() {
    return (
      <>

          {/*<ToDoList/>*/}
        <Store/>
        {/*<AppRoutes/>*/}

      </>

    );
  }
}

export default connect()(App);
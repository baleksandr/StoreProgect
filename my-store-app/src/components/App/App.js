import './App.scss';
import React, {Component} from "react";
import {connect} from "react-redux";
import ToDoList from "../ToDoList/ToDoList";

class App extends Component {

  render() {
    return (
      <>
          <ToDoList/>
      </>

    );
  }
}

export default connect()(App);
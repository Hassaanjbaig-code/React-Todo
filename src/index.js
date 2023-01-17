import React from "react";
import  ReactDOM  from "react-dom";
import { BrowserRouter as Router } from "react-router-dom"
import TodoContainer from "./FunctionsBased/TodoContainer";
import './FunctionsBased/App.css'

ReactDOM.render(
  <React.StrictMode>
    <Router>
    <TodoContainer/>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
)
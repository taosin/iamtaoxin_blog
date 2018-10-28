import React, { Component } from "react";
import { Route, Switch, Router, Link } from 'react-router-dom';
import { Button } from "antd";
import "./App.css";
import Home from './Pages/Home/home'
class App extends Component {
  render() {
    return (
      <div className="App">
        <Home></Home>
        <Switch>
        <Route path="/home" exact component={Home} />
        </Switch>
      </div>
    );
  }
}

export default App;

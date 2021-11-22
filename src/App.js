import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

export default class App extends Component {
  pagesize=12;
  render() {
    return (
      <div>
        <Router>
          <Navbar />
          <Switch>
            <Route exact path="/"> <News key="general" pagesize={this.pagesize} country="in" category="general" /> </Route>
            <Route exact path="/business"> <News key="business" pagesize={this.pagesize} country="in" category="business" /> </Route>
            <Route exact path="/entertainment"> <News key="entertainment" pagesize={this.pagesize} country="in" category="entertainment" /> </Route>
            <Route exact path="/general"> <News key="general" pagesize={this.pagesize} country="in" category="general" /> </Route>
            <Route exact path="/health"> <News key="health" pagesize={this.pagesize} country="in" category="health" /> </Route>
            <Route exact path="/science"> <News key="science" pagesize={this.pagesize} country="in" category="science" /> </Route>
            <Route exact path="/sports"> <News key="sports" pagesize={this.pagesize} country="in" category="sports" /> </Route>
            <Route exact path="/technology"> <News key="technology" pagesize={this.pagesize} country="in" category="technology" /> </Route>
          </Switch>
        </Router>
      </div> 
    )
  }
}

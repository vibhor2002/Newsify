import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default class App extends Component {
  pagesize = 6;
  apiKey = '127c27987f374ceb995cb3d0d210a2a8'

  state = {
    progress: 0
  }
  setProgress = (progress) => {
    this.setState({ progress: progress })
  }
  render() {
    return (
      <div>
        <Router>
          <Navbar />
          <LoadingBar
            height={3}
            color='#f11946'
            progress={this.state.progress}
          />
          <Switch>
            <Route exact path="/"> <News setProgress={this.setProgress} apiKey={this.apiKey} key="general" pagesize={this.pagesize} country="in" category="general" /> </Route>
            <Route exact path="/business"> <News setProgress={this.setProgress} apiKey={this.apiKey} key="business" pagesize={this.pagesize} country="in" category="business" /> </Route>
            <Route exact path="/entertainment"> <News setProgress={this.setProgress} apiKey={this.apiKey} key="entertainment" pagesize={this.pagesize} country="in" category="entertainment" /> </Route>
            <Route exact path="/general"> <News setProgress={this.setProgress} apiKey={this.apiKey} key="general" pagesize={this.pagesize} country="in" category="general" /> </Route>
            <Route exact path="/health"> <News setProgress={this.setProgress} apiKey={this.apiKey} key="health" pagesize={this.pagesize} country="in" category="health" /> </Route>
            <Route exact path="/science"> <News setProgress={this.setProgress} apiKey={this.apiKey} key="science" pagesize={this.pagesize} country="in" category="science" /> </Route>
            <Route exact path="/sports"> <News setProgress={this.setProgress} apiKey={this.apiKey} key="sports" pagesize={this.pagesize} country="in" category="sports" /> </Route>
            <Route exact path="/technology"> <News setProgress={this.setProgress} apiKey={this.apiKey} key="technology" pagesize={this.pagesize} country="in" category="technology" /> </Route>
          </Switch>
        </Router>
      </div>
    )
  }
}

import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';

import Home from './Routes/Home';
import School from './Routes/Home';

// @flow
class App extends Component {


  // stuff (x: ?number): string {
  //   if(x) {
  //     return x;
  //   }
  //   return "default string"
  // }

  render() {
    return (
      <div className="App">
        <Router>
          <Switch>

            <Route exact path = "/" component={Home} />
            <Route exact path = "/school" component={School} />

          </Switch>
        </Router>

      </div>
    );
  }
}

export default App;

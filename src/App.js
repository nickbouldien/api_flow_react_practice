import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';

import Home from './Routes/Home';
import School from './Routes/School';
import District from './Routes/Districts';

//https://docs.google.com/presentation/d/1k1NmgNNh1wI-nLsr3UQjCQnX0QTeJJzL-r70Fud-6rs/edit#slide=id.g1e54a4144e_0_189

// @flow
class App extends Component {


  render() {
    return (
      <div className="App">
        <Router>
          <Switch>

            <Route exact path = "/" component={Home} />
            <Route exact path = "/school" component={School} />
            <Route exact path = "/district" component={District} />

          </Switch>
        </Router>




      </div>
    );
  }
}

export default App;

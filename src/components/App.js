import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import ListPage from './ListPage/ListPage';
import Header from './Header/Header';

export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Header /> 
          <Switch>
            <Route
              path='/'
              exact
              render={(routerProps) => <ListPage {...routerProps}/>}
            />
          </Switch>
        </Router>
      </div>
    )
  }
}

import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import ListPage from './ListPage/ListPage';
import DetailPage from './DetailPage/DetailPage';
import CreatePage from './CreatePage/CreatePage';
import Header from './Header/Header';
import SignIn from './SignIn/SignIn';

export default class App extends Component {
  state = {
    token: null
  }

  render() {
    const { token } = this.state;
    return (
      <div>
        <Router>
          <Header /> 
          <Switch>
            <Route
              path='/'
              exact
              render={(routerProps) => <SignIn {...routerProps}/>}
            />
            <Route
              path='/list'
              exact
              render={(routerProps) => <ListPage token={token} {...routerProps}/>}
            />
            <Route
              path='/create'
              exact
              render={(routerProps) => <CreatePage token={token} {...routerProps}/>}
            />
            <Route
              path='/detail/:id'
              exact
              render={(routerProps) => <DetailPage token={token} {...routerProps}/>}
            />
          </Switch>
        </Router>
      </div>
    )
  }
}

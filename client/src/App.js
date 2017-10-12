import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import HomePage from './components/home/HomePage'
import IdeaPage from './components/idea/IdeaPage'
import LogInPage from './components/login/LogInPage'


class App extends Component {
  render() {
    return (
      <Router>
        <div>
        <div>
        <div>
          <Link to="/">Home</Link>
        </div>
        <div>
          <Link to="/login">LogIn</Link>
        </div>
        <div>
          <Link to="/idea">Idea</Link>
          </div>
          </div>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/login" component={LogInPage} />
            <Route exact path="/:userId" component={IdeaPage} />
          </Switch>
          </div>
        </Router>
  
    )
  }
}


export default App;

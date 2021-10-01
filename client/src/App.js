import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import Profile from './components/Profile';



function App() {
  return (
    <Router>
      <Switch>
        <Route component={Register} exact path='/register'/>
        <Route component={Login} exact path='/login'/>
        <Route component={Profile} exact path='/profile'/>
      </Switch>
    </Router>
  );
}

export default App;

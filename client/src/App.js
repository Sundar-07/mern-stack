import React from 'react';
import 'tailwindcss/'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import NavBar from './components/NavBar/NavBar';
import Todos from './components/todos/Todos';



function App() {
  return (
    <Router>
      <NavBar/>
      <Switch>
        <Route component={SignIn} exact path='/signin'/>
        <Route component={SignUp} exact path='/Signup'/>
        <Route component={Todos} exact path='/todos'/>
      </Switch>
    </Router>
  );
}

export default App;

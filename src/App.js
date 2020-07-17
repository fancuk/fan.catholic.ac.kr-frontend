import React from 'react';
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import Join from "./components/views/Join/Join";
import Login from "./components/views/Login/Login";
import Logout from "./components/views/Logout/LogoutButton";
import Home from "./components/views/Home/Home";
import './App.css';

const App = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/join" component={Join} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/logout" component={Logout} />
          <Route exact path="/home" component={Home} />
        </Switch>
      </div>
    </Router>
  )
}
export default App;

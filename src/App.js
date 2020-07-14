import React from 'react';
import { Link, Route, Switch, BrowserRouter as Router } from "react-router-dom";
import Join from "./components/views/Join/Join";
import Login from "./components/views/Login/Login";
import Logout from "./components/views/Logout/LogoutButton";
import './App.css';

function App() {
  return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/join" component={Join} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/logout" component={Logout} />
          </Switch>
        </div>
      </Router>
  );
}
export default App;

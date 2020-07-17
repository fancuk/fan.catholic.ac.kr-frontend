import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import RentBookList from "./components/view/library/RentBookList";
import BookList from "./components/view/library/BookList";

const App = () => {
  return (
      <Router>
        <div>
          <Switch>
            <Route path="/library" component={BookList} />
            <Route path="/rentbook" component={RentBookList} />
          </Switch>
        </div>
      </Router>
  )
}

export default App;
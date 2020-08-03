import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Join from "./components/views/Join/Join";
import Login from "./components/views/Login/Login";
import Logout from "./components/views/Logout/LogoutButton";
import Home from "./components/views/Home/Home";
import RentBookList from "./components/views/library/RentBookList";
import BookList from "./components/views/library/BookList";
import CustomerList from "./components/views/CustomerList/CustomerList";
import CustomerDetail from "./components/views/CustomerDetail/CustomerDetail";
import Notice from "./components/views/Notice/Notice";
import FanBoard from "./components/views/FanBoard/FanBoard";
import StudyBoard from "./components/views/StudyBoard/StudyBoard";
import './App.css';

const App = () => {
    return (
        <Router>
            <div>
                 <Switch>
                    <Route path="/join" component={Join} />
                    <Route path="/login" component={Login} />
                    <Route path="/logout" component={Logout} />
                    <Route path="/home" component={Home} />
                    <Route path="/library" component={BookList} />
                    <Route path="/rentbook" component={RentBookList} />
                    <Route exact path="/member" component={ CustomerList}/>
                    <Route path="/member/detail" component={CustomerDetail}/>
                    <Route path="/notice" component={Notice}/>
                    <Route path="/fanboard" component={FanBoard}/>
                    <Route path="/studyboard" component={StudyBoard}/>
                 </Switch>
            </div>
        </Router>
        )
    }
export default App;

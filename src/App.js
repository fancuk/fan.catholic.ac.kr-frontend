import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/views/Header/Header";
import Join from "./components/views/Join/Join";
import Login from "./components/views/Login/Login";
import Logout from "./components/views/Logout/LogoutButton";
import RentBookList from "./components/views/library/RentBookList";
import BookList from "./components/views/library/BookList";
import CustomerList from "./components/views/CustomerList/CustomerList";
import CustomerDetail from "./components/views/CustomerDetail/CustomerDetail"
import MainSlider from "./components/views/Home/MainSlider";

const App = () => {
    return (
        <div>
            <Header/>
            <Router>
                <div>
                    <Switch>
                        <Route path="/home" component={MainSlider} />
                        <Route path="/join" component={Join} />
                        <Route path="/login" component={Login} />
                        <Route path="/logout" component={Logout} />
                        <Route path="/library" component={BookList} />
                        <Route path="/rentbook" component={RentBookList} />
                        <Route exact path="/member" component={CustomerList}/>
                        <Route path="/member/detail" component={CustomerDetail}/>
                    </Switch>
                </div>
            </Router>
        </div>
        )
    }
export default App;

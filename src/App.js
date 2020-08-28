import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Register from "./components/views/Register/Register";
import Login from "./components/views/Login/Login";
import Logout from "./components/views/Logout/LogoutButton";
import RentBookList from "./components/views/library/RentBookList";
import BookList from "./components/views/library/BookList";
import CustomerList from "./components/views/CustomerList/CustomerList";
import CustomerDetail from "./components/views/CustomerDetail/CustomerDetail";
import Notice from "./components/views/Notice/Notice";
import FanBoard from "./components/views/FanBoard/FanBoard";
import StudyBoard from "./components/views/StudyBoard/StudyBoard";
import './App.css';
import MainSlide from "./components/views/Home/MainSlide";
import MyPage from "./components/views/Profile/Mypage"
import Edit from "./components/views/Profile/Edit"
import Login from "./components/views/Login/Login"

const App = () => {
    return (
        <>
            <Router>
                <div>
                    <Switch>
                        <Route path="/mypage" component={MyPage}/>
                        <Route path="/edit" component={Edit}/>
                        <Route path="/home" component={MainSlide}/>
                        <Route path="/register" component={Register}/>
                        <Route path="/control" component={Controls}/>
                        <Route path="/login" component={Login}/>
                        <Route path="/library" component={BookList}/>
                        <Route path="/rentbook" component={RentBookList}/>
                        <Route exact path="/member" component={CustomerList}/>
                        <Route path="/detail" component={CustomerDetail}/>
                        <Route path="/notice" component={Notice}/>
                        <Route path="/fanboard" component={FanBoard}/>
                        <Route path="/studyboard" component={StudyBoard}/>
                    </Switch>
                </div>
            </Router>
        </>
    )
}

export default App;

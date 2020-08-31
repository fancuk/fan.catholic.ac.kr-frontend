import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MainSlide from "./components/views/Home/MainSlide";
import MyPage from "./components/views/Profile/Mypage";
import Edit from "./components/views/Profile/Edit";
import Register from "./components/views/Register/Register";
import Login from "./components/views/Login/Login";
import LoginControls from "./components/views/Login/LoginControls";
import RentBookList from "./components/views/library/RentBookList";
import BookList from "./components/views/library/BookList";
import CustomerList from "./components/views/CustomerList/CustomerList";
import CustomerDetail from "./components/views/CustomerDetail/CustomerDetail";
import NoticeAdd from "./components/views/Notice/NoticeAdd";
import NoticeList from "./components/views/Notice/NoticeList";
import FanAdd from "./components/views/FanBoard/FanAdd";
import FanList from "./components/views/FanBoard/FanList";
import StudyAdd from "./components/views/StudyBoard/StudyAdd";
import StudyList from "./components/views/StudyBoard/StudyList";

import './App.css';

const App = () => {
    return (
        <>
            <Router>
                <div>
                    <Switch>
                        <Route path="/mypage" component={MyPage}/>
                        <Route path="/edit" component={Edit}/>
                        <Route exact path="/" component={MainSlide}/>
                        <Route path="/register" component={Register}/>
                        <Route path="/control" component={LoginControls}/>
                        <Route path="/login" component={Login}/>
                        <Route path="/library" component={BookList}/>
                        <Route path="/rentbook" component={RentBookList}/>
                        <Route exact path="/member" component={CustomerList}/>
                        <Route path="/detail" component={CustomerDetail}/>
                        <Route path="/notice" component={NoticeList}/>
                        <Route path="/noticeadd" component={NoticeAdd}/>
                        <Route path="/fan" component={FanList}/>
                        <Route path="/fanadd" component={FanAdd}/>
                        <Route path="/studyadd" component={StudyAdd}/>
                        <Route path="/study" component={StudyList}/>
                    </Switch>
                </div>
            </Router>
        </>
    )
}

export default App;

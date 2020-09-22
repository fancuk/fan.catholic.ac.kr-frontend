import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MainSlide from "./components/views/Home/MainSlide";
import MyPage from "./components/views/Profile/MyPage";
import Edit from "./components/views/Profile/Edit";
import Register from "./components/views/Login/Register";
import Login from "./components/views/Login/Login";
import LoginControls from "./components/views/Login/LoginControls";
import LogoutButton from "./components/views/Login/LogoutButton";
import RentBookList from "./components/views/library/RentBookList";
import BookList from "./components/views/library/BookList";
import CustomerDetail from "./components/views/CustomerDetail/CustomerDetail";
import NoticeAdd from "./components/views/Notice/NoticeAdd";
import NoticeList from "./components/views/Notice/NoticeList";
import FanAdd from "./components/views/FanBoard/FanAdd";
import FanList from "./components/views/FanBoard/FanList";
import StudyAdd from "./components/views/StudyBoard/StudyAdd";
import StudyList from "./components/views/StudyBoard/StudyList";
import ScrollToTop from "./components/ScrollToTop";
import './App.css';

const App = () => {
    return (
        <>
            <Router>
                <div>
                    <ScrollToTop>
                        <Switch>
                            <Route path="/mypage" component={MyPage}/>
                            <Route path="/edit" component={Edit}/>
                            <Route exact path="/" component={MainSlide}/>
                            <Route path="/register" component={Register}/>
                            <Route path="/control" component={LoginControls}/>
                            <Route path="/login" component={Login}/>
                            <Route path="/logout" component={LogoutButton}/>
                            <Route path="/library" component={BookList}/>
                            <Route path="/rentbook" component={RentBookList}/>
                            <Route path="/detail" component={CustomerDetail}/>
                            <Route path="/notice" component={NoticeList}/>
                            <Route path="/noticeadd" component={NoticeAdd}/>
                            <Route path="/free" component={FanList}/>
                            <Route path="/freeadd" component={FanAdd}/>
                            <Route path="/studyadd" component={StudyAdd}/>
                            <Route path="/study" component={StudyList}/>
                        </Switch>
                    </ScrollToTop>
                </div>
            </Router>
        </>
    )
}

export default App;

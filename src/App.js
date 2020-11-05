import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MainSlide from "./components/views/Home/MainSlide";
import MyPage from "./components/views/Profile/MyPage";
import Register from "./components/views/Login/Register";
import Login from "./components/views/Login/Login";
import Logout from "./components/views/Login/Logout";
import RentBookList from "./components/views/library/RentBookList";
import BookList from "./components/views/library/BookList";
import CustomerDetail from "./components/views/CustomerDetail/CustomerDetail";
import NoticeAdd from "./components/views/Notice/NoticeAdd";
import NoticeList from "./components/views/Notice/NoticeList";
import StudyAdd from "./components/views/Study/StudyAdd";
import StudyList from "./components/views/Study/StudyList";
import FreeAdd from "./components/views/Free/FreeAdd";
import FreeList from "./components/views/Free/FreeList";
import ScrollToTop from "./components/ScrollToTop";
import './App.css';
import AdminList from "./components/views/AdminBoard/AdminList";
import AdminAdd from "./components/views/AdminBoard/AdminAdd";
import MyFan from "./components/views/MyFan/MyFan";
import Header from "./components/views/Header/Header";

const App = () => {
    return (
        <>
            <Header/>
            <Router>
                <div>
                    <ScrollToTop>
                        <Switch>
                            <Route path="/mypage" component={MyPage}/>
                            <Route path="/fan" component={MyFan}/>
                            <Route exact path="/" component={MainSlide}/>
                            <Route path="/register" component={Register}/>
                            <Route path="/login" component={Login}/>
                            <Route path="/logout" component={Logout}/>
                            <Route path="/library" component={BookList}/>
                            <Route path="/rentbook" component={RentBookList}/>
                            <Route path="/detail" component={CustomerDetail}/>
                            <Route path="/notice" component={NoticeList}/>
                            <Route path="/noticeadd" component={NoticeAdd}/>
                            <Route path="/studyadd" component={StudyAdd}/>
                            <Route path="/study" component={StudyList}/>
                            <Route path="/freeadd" component={FreeAdd}/>
                            <Route path="/free" component={FreeList}/>
                            <Route path="/adminadd" component={AdminAdd}/>
                            <Route path="/admin" component={AdminList}/>
                        </Switch>
                    </ScrollToTop>
                </div>
            </Router>
        </>
    )
}

export default App;
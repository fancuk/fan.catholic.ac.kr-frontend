import React from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Register from "./components/views/LoginSystem/Register";
import Login from "./components/views/LoginSystem/Login";
import Home from "./components/views/Home/Home";
import RentBookList from "./components/views/library/RentBookList";
import BookList from "./components/views/library/BookList";
import MyPage from "./components/views/MyPage/MyPage";
import Fan from "./components/views/FanBoard/FanBoard";
import Notice from "./components/views/Notice/Notice";
import Study from "./components/views/StudyBoard/StudyBoard";
import './App.css';

const App = () => {
    return (
        <>
            <Div>
                <img src={logo}
                     className="Login-logo"
                     alt="logo"
                     hspace="10"
                     align="center"
                     width="60px"
                     height="60px"
                />
                <h5>Free meeting Active studying Nice ending</h5>
            </Div>

            <Router>
                <Header>
                    <Link to="home">
                        <Button>홈</Button>
                    </Link>
                    <Link to="login">
                        <Button>로그인</Button>
                    </Link>
                    <Link to="register">
                        <Button>회원가입</Button>
                    </Link>
                </Header>
                <main>
                    <Switch>
                        <Route path="/register" component={Register} />
                        <Route path="/login" component={Login} />
                        <Route path="/home" component={Home} />
                        <Route path="/library" component={BookList} />
                        <Route path="/rentbook" component={RentBookList} />
                        <Route path="/mypage" component={MyPage} />
                    </Switch>
                </main>
            </Router>
        </>
    )
}

const Button = styled.button`
    display:inline-block;
    border-radius:10px;
    border-color:#0080ff;
    margin:5px;
    padding:5px;
    font-weight:600;
    background-color:#afdaff;
   `;

const Header = styled.header`
display:block;
margin:0px;
padding:0px;
text-align:right;
`;

const Div = styled.div`
margin:0px;
padding:0px;
text-align:center;
`;

export default App;
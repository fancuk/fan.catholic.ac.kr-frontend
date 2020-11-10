import React, {Component} from "react";
import "./Header.css";
import cookie from 'react-cookies'
import Logout from "../Login/Logout";

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            level:cookie.load('level'),
            login:cookie.load('login')
        }
    }

    render() {
        return (
            <div>
                <button type="button" className="mobile-nav-toggle d-lg-none">
                </button>
                <div id="head-util">
                    <ul id="login">
                        {this.state.level !=="3" ? <a href="/mypage">MyPage</a>:
                            <a href="/detail">Detail</a>}&nbsp;&nbsp;|&nbsp;&nbsp;
                        {this.state.login ? <Logout/> :
                            <a href="/login">Login</a>
                        }
                    </ul>
                </div>
                <div id="header">
                    <nav role="navigation">
                        <ul id="main-menu">
                            <img className="logo" src="assets/img/logo.png"/>
                            <h1 className="name"><a href="/">FAN CUK</a></h1>
                            <li><a href="/">Home</a></li>
                            <li><a href="#">Board</a>
                                <ul id="sub-menu">
                                    <li><a href="/notice" aria-label="subemenu">Notice</a></li>
                                    <li><a href="/study" aria-label="subemenu">Study</a></li>
                                    <li><a href="/free" aria-label="subemenu">Free</a></li>
                                </ul>
                            </li>
                            <li><a href="#">Library</a>
                                <ul id="sub-menu">
                                    <li><a href="/library" aria-label="subemenu">FAN Library</a></li>
                                    <li><a href="/rentbook" aria-label="subemenu">Rent Book</a></li>
                                </ul>
                            </li>
                            <li><a href="#">Links</a>
                                <ul id="sub-menu">
                                    <li><a href="https://www.catholic.ac.kr/index.do" aria-label="subemenu">CUK</a></li>
                                    <li><a href="https://uportal.catholic.ac.kr/sso/jsp/sso/ip/login_form.jsp" aria-label="subemenu">Trinity</a></li>
                                    <li><a href="https://e-cyber.catholic.ac.kr/ilos/main/main_form.acl" aria-label="subemenu">Cyber Campus</a></li>
                                    <li><a href="https://mail.catholic.ac.kr/">Web Mail</a></li>
                                    <li><a href="https://library.catholic.ac.kr/" target="_blank" aria-label="subemenu" >CUK Library</a></li>
                                </ul>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        );
    }
}
export default (Header);
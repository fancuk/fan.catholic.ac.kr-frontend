import React, {Component} from "react";
import "./Header.css";
import cookie from 'react-cookies'

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
                        {this.state.level !=='3' ? <a href="mypage">마이페이지</a>:
                            <a href="detail">관리자 페이지</a>}&nbsp;|&nbsp;
                        {this.state.login !== 'ture' ? <a href="/login">로그인</a> :
                            <a href="/logout">로그아웃</a>
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
                                    <li><a href="/notice" aria-label="subemenu">notice</a></li>
                                    <li><a href="/study" aria-label="subemenu">study</a></li>
                                    <li><a href="/free" aria-label="subemenu">free</a></li>
                                </ul>
                            </li>
                            <li><a href="#">Library</a>
                                <ul id="sub-menu">
                                    <li><a href="/library" aria-label="subemenu">library</a></li>
                                    <li><a href="/rentbook" aria-label="subemenu">rent book</a></li>
                                </ul>
                            </li>
                            <li><a href="#">Links</a>
                                <ul id="sub-menu">
                                    <li><a href="https://www.catholic.ac.kr/index.do" aria-label="subemenu">CUK</a></li>
                                    <li><a href="https://uportal.catholic.ac.kr/sso/jsp/sso/ip/login_form.jsp" aria-label="subemenu">trinity</a></li>
                                    <li><a href="https://e-cyber.catholic.ac.kr/ilos/main/main_form.acl" aria-label="subemenu">cyber campus</a></li>
                                    <li><a href="https://mail.catholic.ac.kr/">web mail</a></li>
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
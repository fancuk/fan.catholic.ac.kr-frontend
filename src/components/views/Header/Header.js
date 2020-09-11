import React, {Component} from "react";
import "./Header.css";
import logo from "../../logo.png";


class Header extends Component {
    render() {
        return (
            <div>
                <div id="header">
                    <div id="head-util">
                        <ul>
                            <li><a href="/mypage" >마이페이지</a></li>
                            <li><button>로그아웃</button></li>
                        </ul>
                    </div>
                    <nav role="navigation">
                        <ul id="main-menu">
                            <li><a href="/home">Home</a></li>
                            <li><a href="#">Board</a>
                                <ul id="sub-menu">
                                    <li><a href="#" aria-label="subemenu">notice</a></li>
                                    <li><a href="#" aria-label="subemenu">study</a></li>
                                    <li><a href="#" aria-label="subemenu">free</a></li>
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



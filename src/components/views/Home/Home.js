import React from "react"
import { Link, withRouter } from "react-router-dom"
import logo from '../../logo.png';
import styled from 'styled-components'

function Home() {
    return (
        <Div>
            <img src={logo}
                className="Login-logo"
                alt="logo"
                hspace="50"
                align="center"
                width="60px"
                height="60px"
            />
            <Link to="/join">
                <Button>회원가입</Button>
            </Link>
            <Link to="/login">
                <Button>로그인</Button>
            </Link>
            <Link to="www.catholic.ac.kr">학교</Link>&nbsp;
            <Link tp="https://e-cyber.catholic.ac.kr/ilos/main/main_form.acl">사이버캠퍼스</Link>&nbsp;
            <Link to="https://uportal.catholic.ac.kr/sso/jsp/sso/ip/login_form.jsp">트리니티</Link>
            <Link to="https://mail.catholic.ac.kr/">웹메일</Link>
            <h5>Free meeting Active studying Nice ending</h5>

        </Div >

    )

}

const Div = styled.div`
padding:10px;
text-align:center;
`;

const Button = styled.button`
    display:inline-block;
    border-radius:10px;
    border-color:#0080ff;
    margin:10px;
    padding:5px;
    font-weight:600;
    background-color:#afdaff;
   `;

export default withRouter(Home)
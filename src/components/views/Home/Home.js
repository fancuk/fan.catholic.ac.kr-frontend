import React from "react";
import { Link, withRouter } from "react-router-dom";
import styled from 'styled-components';

function Home() {
    return (
        <>
            <Header>
                <Link tp="https://e-cyber.catholic.ac.kr/ilos/main/main_form.acl">사이버캠퍼스</Link>&nbsp;
                <Link to="https://uportal.catholic.ac.kr/sso/jsp/sso/ip/login_form.jsp">트리니티</Link>&nbsp;
                <Link to="https://mail.catholic.ac.kr/">웹메일</Link>&nbsp;
            </Header>
        </>
    )

}

const Header =styled.header`
padding:10px;
text-align:left;
`;


export default withRouter(Home)
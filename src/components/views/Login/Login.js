import React, { useState } from "react"
import styled from 'styled-components';
import { Link,Redirect, withRouter } from "react-router-dom"
import logo from '../../logo.png';
import {BsFillLockFill} from "react-icons/bs";

function Login({ authenticated, login, location }) {
    const [id, setId] = useState("")
    const [password, setPassword] = useState("")

    const handleClick = () => {
        try {
            login({ id, password })
        } catch (e) {
            alert("Failed to login")
            setId("")
            setPassword("")
        }
    }
    const Find = () => {
        alert("팬 운영진에게 전화해주세요")
    }

    const { from } = location.state || { from: { pathname: "/" } }
    if (authenticated) return <Redirect to={from} />

    return (
        <Div>
            <img src={logo}
                 className="Login-logo"
                 alt="logo"
                 width="300px"
                 height="300px"
            />
            <h1><BsFillLockFill/>&nbsp;Login</h1>
            <h5>Let`s F.A.N !</h5>
            <input
                value={id}
                onChange={({ target: { value } }) => setId(value)}
                type="text"
                placeholder="id"
            /><br/>
            <input
                value={password}
                onChange={({ target: { value } }) => setPassword(value)}
                type="password"
                placeholder="password"
            /><br/>
            <Link to="./join">
                <Button>Join</Button>
            </Link>
            <Button onClick={handleClick}>Login</Button>
                <Button onClick={Find}>비밀번호/아이디 찾기</Button>

        </Div>
    )
}
const Div=styled.div`
padding:25px;
display:block;
text-align:center;
`;

const Button =styled.button`
    display:inline-block;
    border-radius:10px;
    border-color:#0080ff;
    margin:10px;
    padding:5px;
    font-weight:600;
    background-color:#afdaff;
   `;

export default withRouter(Login);
import React, { useState } from "react"
import styled from 'styled-components';
import { Link, Redirect, withRouter } from "react-router-dom"
import logo from '../../logo.png';
import { BsFillLockFill } from "react-icons/bs";
import axios from "axios"

let form = new FormData()


function Login({ authenticated, login, location }) {
    const [id, user_id] = useState("")
    const [pwd, user_pwd] = useState("")

    const handleClick = () => {
        try {
            login({ id, pwd })
        } catch (e) {
            alert("Failed to login")
            user_id("")
            user_pwd("")
        }
        form.append('id', this.id)
        form.append('pwd',this.pwd)

        axios.post(`http://fan.catholic.ac.kr/api/login`, form)
            .then( response => {
                console.log('response : ', JSON.stringify(response, null, 2))
            }).catch( error => {
            console.log('failed', error)
        })
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
            <h1><BsFillLockFill />&nbsp;Login</h1>
            <h5>Free meeting Active studying Nice ending</h5>
            <input
                value={id}
                onChange={({ target: { value } }) => user_id(value)}
                type="text"
                placeholder="id"
            /><br />
            <input
                value={pwd}
                onChange={({ target: { value } }) => user_pwd(value)}
                type="password"
                placeholder="password"
            /><br />
            <Link to="./join">
                <Button>Join</Button>
            </Link>
            <Button onClick={handleClick}>Login</Button>
            <h5>비밀번호 분실 시, 운영진에게 문의 해주세요! </h5>
        </Div>
    )
}
const Div = styled.div`
padding:25px;
display:block;
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

export default withRouter(Login);
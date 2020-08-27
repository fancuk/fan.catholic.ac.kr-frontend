import React, { Component } from 'react';
import Axios from 'axios';
import styled from 'styled-components';
import { Link, Redirect, withRouter } from "react-router-dom";
import logo from '../../logo.png';
import { BsFillLockFill } from "react-icons/bs";
import {Validator} from "./Validator";
class Login extends Component {
    state = {
        user_id: '',
        user_pwd: '',
        errorMessage: ''
    }
    handleSubmit = async (e) => {
        e.preventDefault();
        const body = {
            user_id: this.state.user_id,
            user_pwd: this.state.user_pwd,
        }
        try {
            Validator(body);
            await Axios.post('http://fan.catholic.ac.kr:5000/api/login', body, {
                headers: {
                    'Content-Type': 'application/json',
                    'withCredentials':'true' // 필요하다고 해서 일단 적어둠
                }
            })
            this.props.history.push('/');
        } catch (catchedError) {
            const errorMessage = (catchedError.response && catchedError.response.data)
                ? catchedError.response.data.errorMessage
                : catchedError.message;
            this.setState({
                errorMessage
            });
        }
    }
    handleInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    render() {
        return (
            <Div>
                <img src={logo}
                     className="Login-logo"
                     alt="logo"
                     width="30%"
                     height="30%"
                /><br/><br/>
                <h3><BsFillLockFill />&nbsp;Login</h3>
                <h5>Free meeting Active studying Nice ending</h5>
                <form onSubmit={this.handleSubmit}>
                    아이디&nbsp;
                    <Input
                        type='text'
                        name='user_id'
                        placeholder='아이디'
                        onInput={this.handleInput}
                    /><br/>
                    비밀번호&nbsp;
                    <Input
                        type='password'
                        name='password'
                        placeholder='비밀번호'
                        onInput={this.handleInput}
                    />
                    <Link to="./register"><br/>
                        <Button>회원가입</Button>
                    </Link>
                    <Button type='submit'>로그인</Button>
                    <div style={{color: 'red'}}>
                        {this.state.errorMessage}
                    </div>
                </form>
                <h6>비밀번호 분실 시, 운영진에게 문의 해주세요! </h6>
            </Div>
        );
    }
}
const Div = styled.div`
margin:200px;
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
    text-align: center;
    `;
const Input = styled.input`
width:30%;
padding:10px;
margin:1% auto;
text-align: center;
border: none;
border-bottom: solid 2px #4263eb; 
-webkit-transition: 0.5s; 
transition: 0.5s;
`;
export default withRouter(Login);
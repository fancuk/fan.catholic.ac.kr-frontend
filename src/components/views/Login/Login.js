import React, { Component } from 'react';
import Axios from 'axios';
import styled from 'styled-components';
import { Link, Redirect, withRouter } from "react-router-dom";
import { BsFillLockFill } from "react-icons/bs";
import {Validator} from "./Validator";
import { Button, Form, FormGroup, Label, Input, Card } from 'reactstrap';

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
        // 비동기 안써도 됨
        try {
            Validator(body);
                await Axios.post('http://fan.catholic.ac.kr:5000/api/login', body, {
                    headers: {
                        'Content-Type': 'application/json',
                        'withCredentials': 'true' // 필요하다고 해서 일단 적어둠
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
                <Card body outline color="primary">
                <h3><BsFillLockFill/> Login <BsFillLockFill/></h3>
                <h5>Free meeting Active studying Nice ending</h5>
                <Form inline onSubmit={this.handleSubmit}>
                <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                    <Label for="user_id" className="mr-sm-2">아이디</Label>
                    <Input
                        type='text'
                        name='user_id'
                        placeholder='아이디'
                        onInput={this.handleInput}
                    />
                </FormGroup>
                <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                    <Label for="user_id" className="mr-sm-2">패스워드</Label>
                    <Input
                        type='password'
                        name='user_pwd'
                        placeholder='패스워드'
                        onInput={this.handleInput}
                    />
                </FormGroup>
                    <Link to="./register">
                        <Button outline color="primary">회원가입</Button>
                    </Link>
                    <Button outline color="primary" type='Submit'>
                        로그인
                    </Button>
                    <div style={{color: 'red'}}>
                        {this.state.errorMessage}
                    </div>
            </Form>
                    <h6>비밀번호 분실 시, 운영진에게 문의 해주세요! </h6>
                </Card>
            </Div>
        );
    }
}

const Div = styled.div`
padding:10%
text-align:left;
width:50%;
margin: 20% auto;
`;

export default withRouter(Login);
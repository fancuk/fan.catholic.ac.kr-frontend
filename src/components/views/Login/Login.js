import React, {Component} from 'react';
import styled from 'styled-components';
import {Link, withRouter} from "react-router-dom";
import {Button, Form, FormGroup, Label, Input, Card} from 'reactstrap';
import axios from "axios";
import cookie from 'react-cookies'
import "./login.css"

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user_id: '',
            user_pwd: '',
            token: '',
            level: '',
            login: false
        };
    }

    handleClick = (e) => {
        e.preventDefault()
        if (!/^([a-z0-9]+)$/.test(this.state.user_id)) {
            alert('아이디를 확인해주세요.')
        } else if (!/([a-zA-Z0-9_-])/.test(this.state.user_pwd)) {
            alert('비밀번호를 확인해주세요.')
        }
        let url = 'http://fan.catholic.ac.kr:5000/api/login';
        const post = {
            user_id: this.state.user_id,
            user_pwd: this.state.user_pwd
        }
        axios.post(url, post)
            .then(response => {
                if (response.data.login === "True") {
                    this.setState({
                        token: response.data.token,
                        user_id: response.data.user_id,
                        level: response.data.level,
                        login: response.data.login
                    })
                    let expires = new Date();
                    let tmp = expires.getDate();
                    expires.setDate(tmp + 1);
                    const cookieOptions = {
                        path: '/',
                        expires,
                        httponly: false,
                    }
                    cookie.save("user_id", this.state.user_id, cookieOptions);
                    cookie.save("token", this.state.token, cookieOptions);
                    cookie.save("level", this.state.level, cookieOptions);
                    cookie.save("login", this.state.login, cookieOptions);

                    window.location.href = '/mypage'
                } else if (!response.data.login) {
                    alert("다시 로그인 하세요")
                }
            })
            .catch(e => {
                console.log(e);
            })


        this.setState({
            login: false
        })
    }

    handleInput = (e) => {
        let nextState = {};
        nextState[e.target.name] = e.target.value;
        this.setState(nextState);
    }

    render() {
        return (
            <Div>
                <Card body outline color="primary" id="expend_0">
                    <h1><b>FAN LOGIN</b></h1>
                    <h3><b>F</b>ree meeting <b>A</b>ctive studying <b>N</b>ice ending</h3>
                    <div id="start">
                        <div className="space">
                            <Form inline onSubmit={this.handleClick}>
                                <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                                    <Label for="user_id" className="mr-sm-2">아이디 </Label>
                                    <Input
                                        type='text'
                                        name='user_id'
                                        placeholder='아이디'
                                        defaultValue={this.state.user_id}
                                        onInput={this.handleInput}
                                    />
                                </FormGroup>
                            </Form></div>
                        <div className="space">
                            <Form inline onSubmit={this.handleClick}>
                                <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                                    <Label for="user_id" className="mr-sm-2">패스워드</Label>
                                    <Input
                                        type='password'
                                        name='user_pwd'
                                        placeholder='패스워드'
                                        defaultValue={this.state.user_pwd}
                                        onInput={this.handleInput}
                                    />
                                </FormGroup>
                            </Form>
                        </div>
                        <div className="space_2">
                            <Form inline onSubmit={this.handleClick}>
                                &nbsp;&nbsp;&nbsp;<Button outline color="primary" id="expend_3" type='submit'>로그인</Button>
                                &nbsp;<Link to="./register">
                                <Button outline color="primary" id="expend_4">회원가입</Button>
                            </Link>
                            </Form>
                        </div>
                    </div>
                    <h6>아이디·비밀번호 분실 시 개별 문의 바랍니다.</h6>
                </Card>
            </Div>
        );
    }
}

const Div = styled.div`
    width: 50%;
    margin: 2% auto;
    `;
export default withRouter(Login);
import React, { Component } from 'react';
import styled from 'styled-components';
import { Link, withRouter } from "react-router-dom";
import { BsFillLockFill } from "react-icons/bs";
import { Button, Form, FormGroup, Label, Input, Card } from 'reactstrap';
import axios from "axios";

class Login extends Component {
    constructor(props) {
        super(props);
        this.state= {
            user_id: '',
            user_pwd: '',
        }
    }

    handleClick = (e) => {
        e.preventDefault()
        let url = 'http://fan.catholic.ac.kr:5000/api/login';
        const login = {
            user_id: this.state.user_id,
            user_pwd: this.state.user_pwd
        }
        axios.post(url, login)
            .then(response => {
                console.log('response : ', JSON.stringify(response))
                document.location.href="./mypage";
            })
            .catch(e => {
                console.log(e);
            })

        this.setState({
            user_id: '',
            user_pwd: '',
        })

    }

    handleInput = (e) => {
        let success = {};
        success[e.target.name] = e.target.value;
        this.setState(success);
    }

    render() {
        const { } = this.props;
        return (
            <Div>
                <Card body outline color="primary">
                <h3><BsFillLockFill /> LOGIN <BsFillLockFill /></h3>
                <h5>Free meeting Active studying Nice ending</h5>
                <Form inline onSubmit={this.handleClick}>
                <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                    <Label for="user_id" className="mr-sm-2">아이디</Label>
                    <Input
                        type='text'
                        name='user_id'
                        placeholder='아이디'
                        value={this.state.user_id}
                        onInput={this.handleInput}
                    />
                </FormGroup>
                <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                    <Label for="user_id" className="mr-sm-2">패스워드</Label>
                    <Input
                        type='password'
                        name='user_pwd'
                        placeholder='패스워드'
                        value={this.state.user_pwd}
                        onInput={this.handleInput}
                    />
                </FormGroup>
                    <Link to="./register" >
                        <Button outline color="primary" >회원가입</Button>
                    </Link>
                    <Button outline color="primary" type='submit'>로그인</Button>
            </Form>
                    <h6>비밀번호 분실 시, 운영진에게 문의 해주세요! </h6>
                </Card>
            </Div>
        );
    }
}
const Div = styled.div`
    width: 50%;
    margin: 5% auto;
    `;

export default withRouter(Login);
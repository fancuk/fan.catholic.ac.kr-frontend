import React, { Component } from 'react';
import styled from 'styled-components';
import { Link, withRouter } from "react-router-dom";
import { BsFillLockFill } from "react-icons/bs";
import { Button, Form, FormGroup, Label, Input, Card } from 'reactstrap';

class Login extends Component {
    render() {
        return (
            <Div>
                <Card body outline color="primary">
                <h3><BsFillLockFill /> LOGIN <BsFillLockFill /></h3>
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
                    <Link to="./register" >
                        <Button outline color="primary" >회원가입</Button>{' '}
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
    margin: 20% auto;
    `;

export default withRouter(Login);
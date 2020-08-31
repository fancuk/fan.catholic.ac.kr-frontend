import React, { Component } from 'react';
import axios from 'axios';
import { Link, withRouter } from "react-router-dom"
import { BsFillPersonPlusFill } from "react-icons/bs";
import { Validator } from './Validator';
import { Card, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import styled from "styled-components";

class Register extends Component {
    state = {
        user_id: '',
        user_pwd: '',
        name: '',
        student_id: '',
        grade: '',
        semester: '',
        phone: '',
        email: '',
        errorMessage: ''

    }

    handleSubmit = async (e) => {
        e.preventDefault();

        const body = {
            user_id: this.state.user_id,
            user_pwd: this.state.user_pwd,
            name: this.state.name,
            student_id: this.state.student_id,
            grade: this.state.grade,
            semester: this.state.semester,
            phone: this.state.phone,
            email: this.state.email
        };

        try {
            Validator(body);
            await axios.post('http://fan.catholic.ac.kr:5000/api/register', body, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            this.props.history.push('/login');
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
                <h1><BsFillPersonPlusFill/>&nbsp;Register</h1>
                <h4>Free meeting Active studying Nice ending</h4>
                <h5>컴퓨터정보공학부 전공학회 F.A.N 회원가입을 환영합니다 !</h5>
                <Form onSubmit={this.handleSubmit}>
                    <FormGroup>
                    <Label for="user_id">아이디</Label>
                        <Input
                            text='text'
                            name="user_id"
                            placeholder='아이디'
                            onChange={this.handleInput}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="user_pwd">비밀번호</Label>
                        <Input
                            text='password'
                            name="user_pwd"
                            placeholder='비밀번호'
                            onChange={this.handleInput}
                        />
                    </FormGroup>
                    <FormGroup>
                    <Label for="name">이름</Label>
                        <Input
                            text='text'
                            name="name"
                            placeholder='이름'
                            onChange={this.handleInput}
                        />
                    </FormGroup>
                    <FormGroup>
                    <Label for="student_id">학번</Label>
                        <Input
                            text='text'
                            name="student_id"
                            placeholder='학번'
                            onChange={this.handleInput}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="grade">학년</Label>
                        <Input
                            text='text'
                            name="grade"
                            placeholder='학년'
                            onChange={this.handleInput}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="semester">학기</Label>
                        <Input
                            text='text'
                            name="semester"
                            placeholder='학기'
                            onChange={this.handleInput}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="phone">번호</Label>
                        <Input
                            text='text'
                            name="phone"
                            placeholder='휴대폰 번호'
                            onChange={this.handleInput}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="email">이메일</Label>
                        <Input
                            text='text'
                            name="email"
                            placeholder='이메일'
                            onChange={this.handleInput}
                        />
                    </FormGroup>
                    <Link to="./home">
                        <Button outline color="primary">취소</Button>{' '}
                    </Link>
                        <Button outline color="primary" type='Submit'>
                            회원가입
                        </Button>
                    <div style={{color: 'red'}}>
                        {this.state.errorMessage}
                    </div>
                </Form>
            </Card>
            </Div>
        );
    }
}

const Div = styled.div`
    text-align:left;
    width:40%;
    margin: 10% auto;
    `;

export default withRouter(Register);
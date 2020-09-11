import React, { Component } from 'react';
import axios from 'axios';
import { Link, withRouter } from "react-router-dom"
import {BsFillPersonPlusFill} from "react-icons/bs";
import { Card, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import styled from "styled-components";
// 정규식 써야해
class Register extends Component {
    constructor(props) {
        super(props);
        this.state= {
            user_id: '',
            user_pwd: '',
            name: '',
            student_id: '',
            grade: '',
            semester: '',
            phone: '',
            email: ''
        }
    }

    handleFormSubmit = (e) => {
        e.preventDefault()
        let url = 'http://fan.catholic.ac.kr:5000/api/register';
        const register = {
            user_id: this.state.user_id,
            user_pwd: this.state.user_pwd,
            name: this.state.name,
            student_id: this.state.student_id,
            grade: this.state.grade,
            semester: this.state.semester,
            phone: this.state.phone,
            email: this.state.email
        }
        axios.post(url, register)
            .then(response => {
                console.log('response : ', JSON.stringify(response))
            })
            .catch(e => {
                console.log(e);
            })
            alert(this.state.user_id+"님 환영합니다!")
            document.location.href="./login";

        this.setState({
            user_id: '',
            user_pwd: '',
            name: '',
            student_id: '',
            grade: '',
            semester: '',
            phone: '',
            email: ''
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
                    <h1><BsFillPersonPlusFill/> REGISTER <BsFillPersonPlusFill/></h1>
                    <h4>Free meeting Active studying Nice ending</h4>
                    <h5>컴퓨터정보공학부 전공학회 F.A.N 회원가입을 환영합니다 !</h5>
                    <Form onSubmit={this.handleFormSubmit}>
                        <FormGroup>
                            <Label for="user_id">아이디</Label>
                            <Input
                                text='text'
                                name="user_id"
                                placeholder='아이디'
                                value={this.state.user_id}
                                onChange={this.handleInput}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="user_pwd">비밀번호</Label>
                            <Input
                                text='password'
                                name="user_pwd"
                                placeholder='비밀번호'
                                value={this.state.user_pwd}
                                onChange={this.handleInput}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="name">이름</Label>
                            <Input
                                text='text'
                                name="name"
                                placeholder='이름'
                                value={this.state.name}
                                onChange={this.handleInput}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="student_id">학번</Label>
                            <Input
                                text='text'
                                name="student_id"
                                placeholder='학번'
                                value={this.state.student_id}
                                onChange={this.handleInput}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="grade">학년</Label>
                            <Input
                                text='text'
                                name="grade"
                                placeholder='학년'
                                value={this.state.grade}
                                onChange={this.handleInput}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="semester">학기</Label>
                            <Input
                                text='text'
                                name="semester"
                                placeholder='학기'
                                value={this.state.semester}
                                onChange={this.handleInput}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="phone">번호</Label>
                            <Input
                                text='text'
                                name="phone"
                                placeholder='휴대폰 번호'
                                value={this.state.phone}
                                onChange={this.handleInput}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="email">이메일</Label>
                            <Input
                                text='text'
                                name="email"
                                placeholder='이메일'
                                value={this.state.email}
                                onChange={this.handleInput}
                            />
                        </FormGroup>
                        <Link to="./">
                            <Button outline color="primary">취소</Button>{' '}
                        </Link>
                        <Button outline color="primary" type='Submit'>
                            회원가입
                        </Button>
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

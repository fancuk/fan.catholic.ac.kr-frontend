import React, { Component } from 'react';
import { Link, withRouter } from "react-router-dom"
import { AiFillEdit } from "react-icons/ai";
import { Card, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import styled from "styled-components";
import axios from "axios";


class Edit extends Component {
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
        let url = 'http://fan.catholic.ac.kr:5000/api/profile/edit';
        const edit = {
            user_id: this.state.user_id,
            user_pwd: this.state.user_pwd,
            name: this.state.name,
            student_id: this.state.student_id,
            grade: this.state.grade,
            semester: this.state.semester,
            phone: this.state.phone,
            email: this.state.email
        }
        axios.put(url, edit)
            .then(response => {
                console.log('response : ', JSON.stringify(response))
            })
            .catch(e => {
                console.log(e);
            })
        document.location.href="./mypage";

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
        return (
            <Div>
                <Card body outline color="primary">
                    <h1><AiFillEdit/> My Page - EDIT <AiFillEdit/></h1>
                    <h4>Free meeting Active studying Nice ending</h4>
                    <Form onSubmit={this.handleFormSubmit}>
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
                        <Link to="./mypage">
                            <Button outline color="primary">취소</Button>{' '}
                        </Link>
                        <Button outline color="primary" type='Submit'>
                            수정완료
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

export default withRouter(Edit);
import React, {Component} from 'react';
import axios from 'axios';
import {Link, withRouter} from "react-router-dom"
import {Card, Button, Form, FormGroup, Label, Input} from 'reactstrap';
import styled from "styled-components";

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user_id: '',
            user_pwd: '',
            name: '',
            student_id: '',
            grade: '',
            semester: '',
            phone: '',
            email: '',
            user_check: '',
            id: false,
            register: false
        }
    }

    idCheck = () => {
        axios.get('http://fan.catholic.ac.kr:5000/api/check/id?user_id=' + this.state.user_id)
            .then(response => {
                console.log(response)
                if (response.data.id) {
                    alert("사용 가능한 아이디 입니다.")
                } else {
                    alert("중복 아이디 입니다.")
                    console.log(this.state.user_id)
                    console.log(response.data.id)
                }
            })
            .catch(e => {
                console.log(e);
            })


        this.setState({
            id: false
        })
    }

    handleFormSubmit = (e) => {
        e.preventDefault()
        if (!/^([a-z0-9]+)$/.test(this.state.user_id)) {
            alert('소문자와 숫자가 아닌 아이디 인지 확인을 해주세요.')
        } else if (!/([a-zA-Z0-9_-])/.test(this.state.user_pwd)) {
            alert('비밀번호를 다시 확인해주세요.')
        } else if (!/^([가-힣]*)$/.test(this.state.name)) {
            alert('이름을 다시 확인해주세요.')
        } else if (!/^([0-9])+$/.test(this.state.student_id) && this.state.student_id.length !== 9) {
            alert('학번은 총 9자리며 숫자만 입력해주세요')
        } else if (!/^([0-9])+$/.test(this.state.grade) && this.state.grade < 5) {
            alert('학년은 1~4학년까지 있습니다.')
        } else if (!/(\d)/.test(this.state.semester) && this.state.semester < 3) {
            alert('학기는 1~2학기만 가능합니다.')
        } else if (!/(\d{2,3}-\d{3,4}-\d{4})/.test(this.state.phone) && this.state.phone.length !== 13) {
            alert('전화번호를 다시 확인해주세요')
        } else if (!/([a-zA-Z0-9_-]+@[a-z]+.[a-z]+)/.test(this.state.email)) {
            alert('이메일을 확인해주세요')
        }

        let url = 'http://fan.catholic.ac.kr:5000/api/register';
        const register = {
            user_id: this.state.user_id,
            user_pwd: this.state.user_pwd,
            name: this.state.name,
            student_id: this.state.student_id,
            grade: this.state.grade,
            semester: this.state.semester,
            phone: this.state.phone,
            email: this.state.email,
            user_check: this.state.user_check
        }
        axios.post(url, register)
            .then(response => {
                if (this.state.user_check !== this.state.user_pwd) {
                    alert("비밀번호가 일치하지 않습니다.")
                } else if (response.data.register) {
                    window.location.href = '/login'
                } else {
                    console.log('response : ', JSON.stringify(response))
                    alert("다시 확인 하세요")
                }
            })
            .catch(e => {
                console.log(e);
            })
        this.setState({
            register: false
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
                <Card body outline color="primary">
                    <h1>REGISTER</h1>
                    <h4>Free meeting Active studying Nice ending</h4>
                    <h5>컴퓨터정보공학부 전공학회 F.A.N 회원가입을 환영합니다 !</h5>
                    <Form onSubmit={this.handleFormSubmit}>
                        <FormGroup>
                            <Label for="user_id">아이디</Label>
                            <Input
                                type='text'
                                name="user_id"
                                placeholder='아이디'
                                value={this.state.user_id}
                                onChange={this.handleInput}
                            />
                            <Button outline color="primary" onClick={this.idCheck}>
                                중복확인
                            </Button>
                        </FormGroup>
                        <FormGroup>
                            <Label for="user_pwd">비밀번호</Label>
                            <Input
                                type='password'
                                name="user_pwd"
                                placeholder='비밀번호'
                                value={this.state.user_pwd}
                                onChange={this.handleInput}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="user_check">비밀번호 확인</Label>
                            <Input
                                type='text'
                                name="user_check"
                                placeholder='비밀번호 확인'
                                value={this.state.user_check}
                                onChange={this.handleInput}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="name">이름</Label>
                            <Input
                                type='text'
                                name="name"
                                placeholder='이름'
                                value={this.state.name}
                                onChange={this.handleInput}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="student_id">학번</Label>
                            <Input
                                type='text'
                                name="student_id"
                                placeholder='학번'
                                value={this.state.student_id}
                                onChange={this.handleInput}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="grade">학년</Label>
                            <Input
                                type='text'
                                name="grade"
                                placeholder='학년'
                                value={this.state.grade}
                                onChange={this.handleInput}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="semester">학기</Label>
                            <Input
                                type='text'
                                name="semester"
                                placeholder='학기'
                                value={this.state.semester}
                                onChange={this.handleInput}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="phone">번호</Label>
                            <Input
                                type='text'
                                name="phone"
                                placeholder='휴대폰 번호'
                                value={this.state.phone}
                                onChange={this.handleInput}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="email">이메일</Label>
                            <Input
                                type='text'
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
    width:45%;
    margin: auto;
    `;

export default withRouter(Register);

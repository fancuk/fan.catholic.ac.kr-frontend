import React, { Component } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { Link, withRouter } from "react-router-dom"
import logo from '../../logo.png';
import Input from "@material-ui/core/Input";
import FormLabel from "@material-ui/core/FormLabel";
import { BsFillPersonPlusFill } from "react-icons/bs";
import { Validator } from './Validator';

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
        errorMessage: '',
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
            await axios.post('fan.catholic.ac.kr:5000/api/register', body);
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
                <h1><BsFillPersonPlusFill/>&nbsp;Join</h1>
                <h4>Free meeting Active studying Nice ending</h4>
                <h5>컴퓨터정보공학부 전공학회 F.A.N 회원가입을 환영합니다 !</h5>
                <img src={logo}
                     className="Login-logo"
                     alt="logo"
                     align="left"
                     width="500px"
                     height="500px"
                /><br/><br/>
                <form className="Register">
                    <div onSubmit={this.handleSubmit}>
                        <FormLabel htmlFor="user_id">아이디</FormLabel>
                        <Input
                            text='text'
                            name="user_id"
                            onChange={this.handleInput}
                        /><br/>
                        <FormLabel htmlFor="user_pwd">비밀번호</FormLabel>
                        <Input
                            text='password'
                            name="user_pwd"
                            onChange={this.handleInput}
                        /><br/>
                        <FormLabel htmlFor="name">이름</FormLabel>
                        <Input
                            text='text'
                            name="name"
                            onChange={this.handleInput}
                        /><br/>
                        <FormLabel htmlFor="student_id">학번</FormLabel>
                        <Input
                            text='text'
                            name="student_id"
                            onChange={this.handleInput}
                        /><br/>
                        <FormLabel htmlFor="grade">학년</FormLabel>
                        <Input
                            text='text'
                            name="grade"
                            onChange={this.handleInput}
                        /><br/>
                        <FormLabel htmlFor="semester">학기</FormLabel>
                        <Input
                            text='text'
                            name="semester"
                            onChange={this.handleInput}
                        /><br/>
                        <FormLabel htmlFor="phone">휴대폰 번호</FormLabel>
                        <Input
                            text='text'
                            name="phone"
                            onChange={this.handleInput}
                        /><br/>
                        <FormLabel htmlFor="user_id">이메일</FormLabel>
                        <Input
                            text='text'
                            name="email"
                            onChange={this.handleInput}
                        /><br/>
                    </div>
                    <Link to="./home">
                        <Button>취소</Button>
                    </Link>
                    <Link to onClick={this.handleSubmit}>
                            <Button type='Submit'>
                                회원가입
                            </Button>
                        </Link>
                    <div style={{color: 'red'}}>
                        {this.state.errorMessage}
                    </div>
                </form>
            </Div>
        );
    }
}
    const Div = styled.div`
    padding:10px;
    text-align:center;
    display:block;
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

    export default withRouter(Register);

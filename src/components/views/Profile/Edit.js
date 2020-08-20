import React, { Component } from 'react';
import Axios from 'axios';
import { withRouter, Link } from 'react-router-dom';
import styled from "styled-components";
import { AiFillHome } from "react-icons/ai";
import logo from "../../logo.png";

class Edit extends Component {
    state = {
        user_id:'',
        user_pwd:'',
        name:'',
        student_id:'',
        grade:'',
        semester:'',
        phone:'',
        email: '',
    };

    constructor(props) {
        super(props);
        this.FanCuk();
    }

    FanCuk = async () => {
        const {data: { member }} = (await Axios.put('http://fan.catholic.ac.kr:5000/api/profile/edit', { withCredentials: true }));
        if (!member) {
            this.props.history.push('/login');
        }
        this.setState({
            user_id:member.user_id,
            user_pwd:member.user_pwd,
            name:member.name,
            student_id:member.student_id,
            grade:member.grade,
            semester:member.semester,
            phone:member.phone,
            email: member.email,
        });
    }
    handleInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

// 업데이트가 전체 인건지 해당되는 것 만 인지 질문 해야함.
//(학번, 비번, 전번, 이메일, 학년) 이라고 함

    handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('user_id', this.state.user_id);
        formData.append('name', this.state.name);
        formData.append('grade', this.state.grade);
        const fan_updated = this.setState({
            user_pwd:this.data.user_pwd,
            student_id:this.data.student_id,
            phone:this.data.phone,
            grade:this.data.grade,
            email:this.data.email
        });

        if (fan_updated) {
            formData.append('user_pwd', this.state.user_pwd);
            formData.append('student_id', this.state.student_id);
            formData.append('grade', this.state.grade);
            formData.append('phone', this.state.phone);
            formData.append('email', this.state.email);
        }

        const result = await Axios.put(`http://fan.catholic.ac.kr:5000/api/profile/edit`, formData, { withCredentials: true });
        if (fan_updated) {
            this.setState({
                user_pwd: result.data.user_pwd,
                student_id: result.data.student_id,
                phone: result.data.phone,
                grade: result.data.grade,
                email:result.data.email
            });
        }
    }

    handleDelete = async (e) => {
        e.preventDefault();
        if(window.confirm('정말 탈퇴하시겠습니까?')) {
            await Axios.delete(`http://fan.catholic.ac.kr:5000/api/delete/user`, {} , { withCredentials: true });
            this.props.history.push('/');
        }
    }

    render() {
        return (
            <Div>
                <h2>MyPage - Profile <AiFillHome/></h2>
                <h4>Free meeting Active studying Nice ending</h4>
                <img src={logo}
                     className="Login-logo"
                     alt="logo"
                     align="left"
                     width="35%"
                     height="35%"
                /><br/><br/>
                <div className="Edit">
                <form onSubmit={this.handleSubmit}>
                    아이디
                    <Input
                        type='text'
                        name='user_id'
                        placeholder='아이디'
                        value={this.state.user_id}
                        onInput={this.handleInput}
                    /><br/>
                    비밀번호
                    <Input
                        type='password'
                        name='user_pwd'
                        placeholder='비밀번호'
                        value={this.state.user_pwd}
                        onInput={this.handleInput}
                    /><br/>
                    이름
                    <Input
                        type='text'
                        name='name'
                        placeholder='이름'
                        value={this.state.name}
                        onInput={this.handleInput}
                    /><br/>
                    학번
                    <Input
                        type='text'
                        name='student_id'
                        placeholder='학번'
                        value={this.state.student_id}
                        onInput={this.handleInput}
                    /><br/>
                    학년
                    <Input
                        type='text'
                        name='grade'
                        placeholder='학년'
                        value={this.state.grade}
                        onInput={this.handleInput}
                    /><br/>
                    학기
                    <Input
                        type='text'
                        name='semester'
                        placeholder='학기'
                        value={this.state.semester}
                        onInput={this.handleInput}
                    /><br/>
                    전화번호
                    <Input
                        type='text'
                        name='phone'
                        placeholder='010-xxxx-xxxx'
                        value={this.state.phone}
                        onInput={this.handleInput}
                    /><br/>
                    이메일
                    <Input
                        type='text'
                        name='email'
                        placeholder='abc@text.com'
                        value={this.state.email}
                        onInput={this.handleInput}
                    /><br/>
                    <Button>수정</Button>
                    <Button onClick={this.handleDelete}>탈퇴</Button>
                </form>
             </div>
            </Div>

        );
    }
}

const Div = styled.div`
    margin:30px;
    text-align:center;
    display:block;
    `;

const Input = styled.input`
text-align:left;
width: 15%;
border: none;
margin-top:10px;
margin-bottom:10px;
border-bottom: solid 2px #4263eb; 
-webkit-transition: 0.5s; 
transition: 0.5s;
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

export default withRouter(Edit);
import React, { Component } from 'react';
import Axios from 'axios';
import { withRouter, Link } from 'react-router-dom';
import styled from "styled-components";

// 틀고치기 + api 다시 해야함
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
        this.fetchUser();
    }
// 마이페이지에서 가지고 오는 데이터?

    fetchUser = async () => {
        const {data: { user }} = (await Axios.get('fan.catholic.ac.kr:5000/api/profile/mypage', { withCredentials: true }));
        if (!user) {
            this.props.history.push('/login');
        }
        this.setState({
            user_id:user.user_id,
            user_pwd:user.user_pwd,
            name:user.name,
            student_id:user.student_id,
            grade:user.grade,
            semester:user.semester,
            phone:user.phone,
            email: user.email,
        });
    }
    handleInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

//  - 마이페이지 : 회원정보 수정(학번, 비번, 전번, 이메일, 학년)
// 수정이 되어야 하는 데이터 :  + 이게 편집이 되어야 함

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

        const result = await Axios.post(`fan.catholic.ac.kr:5000/api/profile/edit`, formData, { withCredentials: true });
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
            await Axios.post(`fan.catholic.ac.kr:5000/api/delete/user`, {} , { withCredentials: true });
            this.props.history.push('/');
        }
    }

    render() {
        return (
            <div>
                <h2>MyPage - Profile </h2>
                <form onSubmit={this.handleSubmit}>
                    <Input
                        type='text'
                        name='user_id'
                        placeholder='아이디'
                        value={this.state.user_id}
                        onInput={this.handleInput}
                    />
                    <Input
                        type='text'
                        name='user_pwd'
                        placeholder='비밀번호'
                        value={this.state.user_pwd}
                        onInput={this.handleInput}
                    />
                    <Input
                        type='text'
                        name='name'
                        placeholder='이름'
                        value={this.state.name}
                        onInput={this.handleInput}
                    />
                    <Input
                        type='text'
                        name='student_id'
                        placeholder='학번'
                        value={this.state.student_id}
                        onInput={this.handleInput}
                    />
                    <Input
                        type='text'
                        name='semester'
                        placeholder='학기'
                        value={this.state.semester}
                        onInput={this.handleInput}
                    />
                    <Input
                        type='text'
                        name='phone'
                        placeholder='전화번호'
                        value={this.state.phone}
                        onInput={this.handleInput}
                    />
                    <Input
                        type='text'
                        name='email'
                        placeholder='이메일'
                        value={this.state.email}
                        onInput={this.handleInput}
                    />
                    <Button>수정</Button>
                    <Button onClick={this.handleDelete}>탈퇴</Button>
                </form>
            </div>

        );
    }
}

const Button =styled.button`
    display:display;
    border-radius:10px;
    border-color:#0080ff;
    margin:10px;
    padding:5px;
    font-weight:600;
    background-color:#afdaff;
    text-align: center;
    `;

const Input = styled.input`
padding:15px;
margin:30px;
`;

export default withRouter(Edit);
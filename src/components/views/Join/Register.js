import React, { useState } from "react";
import styled from 'styled-components';
import { Link, withRouter } from "react-router-dom"
import logo from '../../logo.png';
import Input from "@material-ui/core/Input";
import FormLabel from "@material-ui/core/FormLabel";
import { BsFillPersonPlusFill } from "react-icons/bs"

const Register = () => {
    const [id, setId] = useState("");
    const [passwd, setPasswd] = useState("");
    const [name, setName] = useState("");
    const [student_id, setStudent_id] = useState("");
    const [grade, setGrade] = useState("");
    const [semester, setSemester] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");

    const setIdText = e => {
        setId(e.target.value);
    };
    const setPasswdText = e => {
        setPasswd(e.target.value);
    };

    const setNameText = e => {
        setName(e.target.value);
    };
    const setStudent_idText = e => {
        setStudent_id(e.target.value);
    };
    const setGradeText = e => {
        setGrade(e.target.value);
    };
    const setSemesterText = e => {
        setSemester(e.target.value);
    };
    const setPhoneText = e => {
        setPhone(e.target.value);
    };
    const setEmailText = e => {
        setEmail(e.target.value);
    };

    const save = e => {
        e.preventDefault();
        const isKorean = /[A-Za-z0-9]/;
        const isNumber = /[0-9]/;

        if (isKorean.test(name)) {
            alert("이름을 다시 확인하세요.");
        } else if (!isNumber.test(student_id) || student_id.length !== 9) {
            alert("학번을 다시 확인하세요.");
        } else if (!isNumber.test(grade) || grade.length !== 1) {
            alert("학년은 1~4학년 만 있습니다!! 다시 확인해주세요.")
        } else if (!isNumber.test(semester) || semester.length !== 1) {
            alert("1학기 혹은 2학기를 확인 해주세요")
        } else if (!isNumber.test(phone) || phone.length !== 11) {
            alert("휴대폰 번호를 다시 확인하세요.");
        }
    };
    // 모든 테스트를 거치고 나서 저장을 누르면 로그인 페이지로 이동을 넘어가야함 -> 이게 제일 안됨...!!!!

    return (
        <Div>
            <h1><BsFillPersonPlusFill />&nbsp;Join</h1>
            <h4>Free meeting Active studying Nice ending</h4>
            <h5>컴퓨터정보공학부 전공학회 F.A.N 회원가입을 환영합니다 ! </h5>
            <img src={logo}
                className="Login-logo"
                alt="logo"
                hspace="50"
                align="left"
                width="300px"
                height="300px"
            />
            <div className="Join">
                <form onSubmit={save}>
                    <FormLabel htmlFor="id">아이디</FormLabel>
                    <Input
                        name="id"
                        id="id"
                        onChange={setIdText}
                    /><br />
                    <FormLabel htmlFor="passwd">패스워드</FormLabel>
                    <Input
                        name="passwd"
                        id="passwd"
                        onChange={setPasswdText}
                    /><br />
                    <FormLabel htmlFor="name">이름</FormLabel>
                    <Input
                        name="name"
                        id="name"
                        onChange={setNameText}
                    /><br />
                    <FormLabel htmlFor="student_id">학번</FormLabel>
                    <Input
                        name="student_id"
                        id="student_id"
                        onChange={setStudent_idText}
                    /><br />
                    <FormLabel htmlFor="grade">학년</FormLabel>
                    <Input
                        name="grade"
                        id="grade"
                        onChange={setGradeText}
                    /><br />
                    <FormLabel htmlFor="semester">학기</FormLabel>
                    <Input
                        name="semester"
                        id="semester"
                        onChange={setSemesterText}
                    /><br />
                    <FormLabel htmlFor="phone">휴대폰 번호</FormLabel>
                    <Input
                        name="phone"
                        id="phone"
                        onChange={setPhoneText}
                    /><br />
                    <FormLabel htmlFor="email">이메일</FormLabel>
                    <Input
                        name="email"
                        id="email"
                        onChange={setEmailText}
                    /><br />
                </form>
                <Button onClick={save}>저장</Button>
                <Link to="/home">
                    <Button>취소</Button>
                </Link>
            </div>
        </Div>
    );
};
const Div = styled.div`
padding:10px;
text-align:center;
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

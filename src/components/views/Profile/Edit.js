import React, { useState } from "react";
import styled from 'styled-components';
import { Link, withRouter } from "react-router-dom"
import logo from '../../logo.png';
import Input from "@material-ui/core/Input";
import FormLabel from "@material-ui/core/FormLabel";
import { BsFillPersonPlusFill } from "react-icons/bs";
//import axios from "axios";

//let form = new FormData()

//<참고>  - 마이페이지 : 회원정보 수정(학번, 비번, 전번, 이메일, 학년), 학기

const Edit = () => {
    const [pwd, setPwd] = useState("");
    const [student_id, setStudent_id] = useState("");
    const [grade, setGrade] = useState("");
    const [semester, setSemester] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");

    const setPwdText = e => {
        setPwd(e.target.value);
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
        const val = e.target.value.substr(0, 13);
        let number = e.target.value.replace(/[^0-9]/g, "");
        let phone = "";

        if(e.target.value.length > 13)  {
            e.target.value = val
            return
        }

        if(number.length < 4) {
            return number;
        } else if(number.length < 7) {
            phone += number.substr(0, 3);
            phone += "-";
            phone += number.substr(3);
        } else if(number.length < 11) {
            phone += number.substr(0, 3);
            phone += "-";
            phone += number.substr(3, 3);
            phone += "-";
            phone += number.substr(6);
        } else {
            phone += number.substr(0, 3);
            phone += "-";
            phone += number.substr(3, 4);
            phone += "-";
            phone += number.substr(7);
        }
        e.target.value = phone;
        setPhone(e.target.value);
    };
    const setEmailText = e => {
        setEmail(e.target.value);
    };

    const save = e => {
        e.preventDefault();
        const isKorean = /[A-Za-z0-9]/;
        const isNumber = /[0-9]/;

        if (!isNumber.test(student_id) || student_id.length !== 9) {
            alert("학번을 다시 확인하세요.");
        } else if (!isNumber.test(grade) || grade.length !== 1) {
            alert("학년은 1~4학년 만 있습니다!! 다시 확인해주세요.")
        } else if (!isNumber.test(semester) || semester.length !== 1) {
            alert("1학기 혹은 2학기를 확인 해주세요")
        } else if (!isNumber.test(phone) || phone.length !== 13) {
            alert("휴대폰 번호를 다시 확인하세요.");
        }
    };

    // form.append('pwd', pwd)
    // form.append('name', name)
    // form.append('student_id', student_id)
    // form.append('grade', grade)
    // form.append('semester', semester)
    // form.append('phone', phone)
    // form.append('email',email)
    //
    // axios.post(`http://fan.catholic.ac.kr/api/profile/edit`, form)
    //     .then( response => {
    //         console.log('response : ', JSON.stringify(response, null, 6))
    //     }).catch( error => {
    //     console.log('failed', error) })

    return (
        <Div>
            <h1><BsFillPersonPlusFill />&nbsp;Edit</h1>
            <h4>Free meeting Active studying Nice ending</h4>
            <h5>컴퓨터정보공학부 전공학회 F.A.N 회원정보 수정 요청</h5>
            <img src={logo}
                 className="Login-logo"
                 alt="logo"
                 hspace="50"
                 align="left"
                 width="300px"
                 height="300px"
            />
            <div className="Edit">
                <form onSubmit={save}>
                    <FormLabel htmlFor="pwd">패스워드</FormLabel>
                    <Input
                        name="pwd"
                        id="pwd"
                        onChange={setPwdText}
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
                <Link to="/profile">
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

export default withRouter(Edit);
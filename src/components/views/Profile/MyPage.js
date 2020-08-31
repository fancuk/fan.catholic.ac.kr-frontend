import React, { Component } from 'react';
import styled from 'styled-components';
import { Link, withRouter } from "react-router-dom";
import {Button, Card } from 'reactstrap';
import {BsFillHouseFill} from "react-icons/bs";


class MyPage extends Component {
    render() {
        return (
            <Div>
                <Card body outline color="primary">
                    <h1><BsFillHouseFill />My Page - HOME<BsFillHouseFill/></h1>
                    <h3>Free meeting Active studying Nice ending</h3>
                    <ul>
                        <li><strong>안녕하세요 FAN 홈페이지 입니다 !</strong></li>
                    </ul>
                    <div className="board1">
                        <a href={"./notice"}><h5><strong>공지사항</strong></h5></a>
                        <ul>
                            <li><a herf="#">  F.A.N 개강총회 일정안내 </a> <span>[20.08.28] </span></li>
                            <li><a herf="#">  F.A.N실 이용안내 </a> <span>[20.08.29] </span></li>
                            <li><a herf="#">  F.A.N 회비납부 안내 </a> <span>[20.08.30] </span></li>
                        </ul>
                    </div>
                    <div className="board2">
                        <a href={"./rentbook"}><h5><strong>내도서목록</strong></h5></a>
                        <ul>
                            <li>생활코딩 PHP+MySQL</li>
                            <li>생활코딩 CSS+HTML+자바스크립트</li>
                            <li>생활코딩 자바스크립트 입문</li>
                        </ul>
                        <Link to="/edit">
                            <Button outline color="primary">수정</Button>{' '}
                        </Link>
                    </div>
                </Card>
            </Div>
        );
    }
}

const Div = styled.div`
    text-align:left;
    width:45%;
    margin: 10% auto;
    `;

export default withRouter(MyPage);
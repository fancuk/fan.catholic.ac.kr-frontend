import React, { Component } from 'react';
import StudyItem from './StudyItem';
import {Link, withRouter} from "react-router-dom";
import styled from "styled-components";
import './Study.css';

class Study extends Component {

    state = {
        maxNo: 3,
        boards: [
            {
                brdno: 1,
                brdwriter: '임효진',
                brdtitle: 'FAN 게시판 입니다.',
                brditem: '안녕하세요 게시판지기 입니다. 텍스트 입력을 시작하도록 하겠습니다.',
                brddate: new Date()
            },
            {
                brdno: 2,
                brdwriter: '임혜린',
                brdtitle: 'FAN 게시판2 입니다.',
                brditem: '안녕하세요 게시판지기 입니다. 텍스트 입력을 시작하도록 하겠습니다.',
                brddate: new Date()
            },
        ],
        selectedBoard:{}
    }

    handleSelectRow = (row) => {
        this.setState({selectedBoard:row});
    }

    render() {
        const { boards } = this.state;
        return (
            <>
                <h2>스터디 게시판 - F.A.N </h2>
                <table border="1">
                    <tbody>
                    <tr align="center">
                        <td width="auto">No.</td>
                        <td width="auto">제목</td>
                        <td width="auto">작성자</td>
                        <td width="auto">내용</td>
                        <td width="auto">날짜</td>
                    </tr>
                    {
                        boards.map(row =>
                            (<StudyItem key={row.brdno} row={row} onRemove={this.handleRemove} onSelectRow={this.handleSelectRow} />)
                        )
                    }
                    </tbody>
                </table>
                <Link to="./newstudy">
                    <Button>글쓰기</Button>
                </Link>
            </>
        );
    }
}

const Button =styled.button`
    display:inline-block;
    border-radius:10px;
    border-color:#0080ff;
    margin:10px;
    padding:5px;
    font-weight:600;
    background-color:#afdaff;
   `;

export default withRouter(Study);
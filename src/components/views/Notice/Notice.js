import React, { Component } from 'react';
import NoticeItem from './NoticeItem';
import {Link,withRouter} from "react-router-dom";

class Notice extends Component {

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

    handleRemove = (brdno) => {
        this.setState({
            boards: this.state.boards.filter(row => row.brdno !== brdno)
        })
    }

    handleSelectRow = (row) => {
        this.setState({selectedBoard:row});
    }

    render() {
        const { boards, selectedBoard } = this.state;
        return (
            <div>
                <h1>공지사항 - F.A.N </h1>
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
                            (<NoticeItem key={row.brdno} row={row} onRemove={this.handleRemove} onSelectRow={this.handleSelectRow} />)
                        )
                    }
                    </tbody>
                </table>
                <Link to="./NewNotice">
                <button>
                    글쓰기
                </button>
                </Link>
            </div>
        );
    }
}

export default withRouter(Notice);
import React, { Component } from 'react';
import StudyForm from './StudyForm';
import {Link, withRouter} from "react-router-dom";

class NewStudy extends Component {

    state = {
        maxNo: 3,
        boards: [
            {
                brdno: 1,
                brdwriter: '임효진',
                brdtitle: 'FAN 공부게시판 입니다.',
                brditem: '안녕하세요 게시판지기 입니다. 텍스트 입력을 시작하도록 하겠습니다.',
                brddate: new Date()
            },
            {
                brdno: 2,
                brdwriter: '임혜린',
                brdtitle: 'FAN 공부게시판2 입니다.',
                brditem: '안녕하세요 게시판지기 입니다. 텍스트 입력을 시작하도록 하겠습니다.',
                brddate: new Date()
            },
        ],
        selectedBoard:{}
    }

    render() {
        const { selectedBoard } = this.state;
        return (
            <>
                <StudyForm selectedBoard={selectedBoard} />
            </>
        );
    }
}

export default withRouter(NewStudy);
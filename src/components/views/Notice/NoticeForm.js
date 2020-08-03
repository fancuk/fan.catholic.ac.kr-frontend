import React, { Component } from 'react';
import {Link} from "react-router-dom";

class NoticeForm extends Component {

    shouldComponentUpdate(nextProps, nextState) {
        let selectedBoard = nextProps.selectedBoard;
        if (!selectedBoard.brdno) {
            this.brdtitle.value = "";
            this.brdwriter.value = "";
            this.brditem.value="";
            return true;
        }

        this.brdtitle.value = selectedBoard.brdtitle;
        this.brdwriter.value = selectedBoard.brdwriter;
        this.brditem.value = selectedBoard.brditem;
        return true;
    }

    handleSubmit = (e) => {
        e.preventDefault();
        let selectedBoard = this.props.selectedBoard;
        let data = {
            brdtitle: this.brdtitle.value,
            brdwriter: this.brdwriter.value,
            brditem: this.brditem.value
        }
        if (selectedBoard.brdno) {
            data.brdno = selectedBoard.brdno
            data.brddate = selectedBoard.brddate
        }
        this.props.onSaveData(data);
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input placeholder="제목" ref={node => this.brdtitle  = node}/>
                <input placeholder="아이디" ref={node => this.brdwriter = node}/><br />
                <textarea name="content" cols="150" rows="8" ref={node => this.brditem= node}>
                    게시판을 입력해주세요.
                </textarea><br/>
                {/*// 저장을 누르면서 나는 게시판 창에 가고 싶어(이벤트로 할거 같은데 사실 로그인 때도 안된 문제 ) + 여백 좀 챙겨 + 아이디 치워  */}
                <button type="submit">저장</button>&nbsp;
                <Link to="./Notice">
                    <button>
                        취소
                    </button>
                </Link>
            </form>
        );
    }
}

export default NoticeForm;
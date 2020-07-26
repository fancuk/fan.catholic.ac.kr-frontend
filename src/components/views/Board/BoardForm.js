import React, { Component } from 'react';


class BoardForm extends Component {

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
                    게시판을 입력해주세요. 제목을 클릭하면 내용을 알 수 있습니다.
                </textarea>&nbsp;
                <button type="submit">저장</button>
            </form>
        );
    }
}

export default BoardForm;
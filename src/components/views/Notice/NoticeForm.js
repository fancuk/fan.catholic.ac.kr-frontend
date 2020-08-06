import React, { Component } from 'react';
import {Link} from "react-router-dom";
import styled from "styled-components";
import './Notice.css';

class NoticeForm extends Component {

    handleSaveData = (data) => {
        if (!data.brdno) {            // new : Insert
            this.setState({
                maxNo: this.state.maxNo+1,
                boards: this.state.boards.concat({brdno: this.state.maxNo, brddate: new Date(), ...data }),
                selectedBoard: {}
            });
        } else {                                                        // Update
            this.setState({
                boards: this.state.boards.map(row => data.brdno === row.brdno ? {...data }: row),
                selectedBoard: {}
            })
        }
    }

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
        this.props.handleSaveData();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input name="title" placeholder="제목" ref={node => this.brdtitle  = node}/><br/>
                <textarea name="name" placeholder="게시판을 입력해주세요." cols="150" rows="8" ref={node => this.brditem= node}>
                </textarea>&nbsp;
                <Link to='./notice' onclick={this.handleSubmit}><Button>저장</Button></Link>
                <Link to='./notice'><Button>취소</Button></Link>
            </form>
        );
    }
}
// 저장 안되는 거 수정할 것

const Button =styled.button`
    display:inline-block;
    border-radius:10px;
    border-color:#0080ff;
    margin:10px;
    padding:5px;
    font-weight:600;
    background-color:#afdaff;
   `;

export default NoticeForm;